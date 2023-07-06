/**
 * @module matcher
 */

import { Pattern } from '/detector/Pattern';
import { PlotLine } from '/common/PlotLine';
import { BitMatrix } from '/common/BitMatrix';
import { round, toInt32 } from '/common/utils';
import { FinderPatternGroup } from '/detector/FinderPatternGroup';
import { distance, isPointInQuadrangle, Point } from '/common/Point';

export const DIFF_EDGE_RATIO = 0.5;
export const DIFF_MODULE_SIZE_RATIO = 0.5;
export const MIN_MODULE_COUNT_PER_EDGE = 11;
export const DIFF_FINDER_PATTERN_RATIO = 0.5;
export const MAX_MODULE_COUNT_PER_EDGE = 175;
export const DIFF_ALIGNMENT_PATTERN_RATIO = 0.8;

export function centerFromEnd(countState: number[], end: number): number {
  const { length } = countState;
  const middleIndex = toInt32(length / 2);

  let center = end - countState[middleIndex] / 2;

  for (let i = middleIndex + 1; i < length; i++) {
    center -= countState[i];
  }

  return center;
}

export function setCountState(countState: number[], count: number): void {
  const { length } = countState;
  const lastIndex = length - 1;

  for (let i = 0; i < lastIndex; i++) {
    countState[i] = countState[i + 1];
  }

  countState[lastIndex] = count;
}

export function getCountStateTotal(countState: number[], checkZero?: boolean): number {
  let countStateTotal = 0;

  for (const count of countState) {
    if (checkZero && count === 0) {
      return NaN;
    }

    countStateTotal += count;
  }

  return countStateTotal;
}

export function isMatchFinderPattern(countState: number[]): boolean {
  const moduleCount = 7;
  const { length } = countState;
  const countStateTotal = getCountStateTotal(countState, true);

  if (countStateTotal >= moduleCount) {
    const moduleSize = countStateTotal / moduleCount;

    if (moduleSize >= 1) {
      const middleIndex = toInt32(length / 2);
      const threshold = moduleSize * DIFF_FINDER_PATTERN_RATIO;

      // Allow less than DIFF_FINDER_MODULE_SIZE_RATIO variance from 1-1-3-1-1 proportions
      for (let i = 0; i < length; i++) {
        const size = countState[i];
        const ratio = i !== middleIndex ? 1 : 3;
        const moduleSizeDiff = Math.abs(size - moduleSize * ratio);

        if (moduleSizeDiff > 1 && moduleSizeDiff > threshold * ratio) {
          return false;
        }
      }

      return true;
    }
  }

  return false;
}

export function isMatchAlignmentPattern(countState: number[]): boolean {
  const moduleCount = countState.length;
  const countStateTotal = getCountStateTotal(countState, true);

  if (countStateTotal >= moduleCount) {
    const moduleSize = countStateTotal / moduleCount;

    if (moduleSize >= 1) {
      const threshold = moduleSize * DIFF_ALIGNMENT_PATTERN_RATIO;

      // Allow less than DIFF_ALIGNMENT_MODULE_SIZE_RATIO variance from 1-1-1 or 1-1-1-1-1 proportions
      for (const size of countState) {
        const moduleSizeDiff = Math.abs(size - moduleSize);

        if (moduleSizeDiff > 1 && moduleSizeDiff > threshold) {
          return false;
        }
      }

      return true;
    }
  }

  return false;
}

export function isEqualsEdge(edge1: number, edge2: number): boolean {
  const edgeAvg = (edge1 + edge2) / 2;
  const ratio = Math.abs(edge1 - edge2) / edgeAvg;

  return ratio < DIFF_EDGE_RATIO;
}

export function isEqualsModuleSize(moduleSize1: number, moduleSize2: number): boolean {
  const modeSizeAvg = (moduleSize1 + moduleSize2) / 2;
  const moduleSizeDiff = Math.max(1, modeSizeAvg * DIFF_MODULE_SIZE_RATIO);

  return Math.abs(moduleSize1 - moduleSize2) <= moduleSizeDiff;
}

export function isValidModuleCount(edge: number, moduleSize: number): boolean {
  // Check the sizes
  const moduleCount = Math.ceil(edge / moduleSize);

  return moduleCount >= MIN_MODULE_COUNT_PER_EDGE && moduleCount <= MAX_MODULE_COUNT_PER_EDGE;
}

export function isInFinderPatternGroup({ topLeft, topRight, bottomLeft }: FinderPatternGroup, pattern: Pattern): boolean {
  // Guess where a "bottom right" finder pattern would have been
  const bottomRight = new Point(topRight.x - topLeft.x + bottomLeft.x, topRight.y - topLeft.y + bottomLeft.y);

  return isPointInQuadrangle(pattern, topLeft, topRight, bottomRight, bottomLeft);
}

export function alignCrossPattern(
  matrix: BitMatrix,
  x: number,
  y: number,
  maxCount: number,
  isHorizontal: boolean,
  checker: (countState: number[]) => boolean
): [offset: number, countState: number[]] {
  let offset = isHorizontal ? x : y;

  const countState = [0, 0, 0, 0, 0];
  const isBlackPixel = (): number => {
    return isHorizontal ? matrix.get(offset, y) : matrix.get(x, offset);
  };

  while (offset >= 0 && isBlackPixel()) {
    offset--;
    countState[2]++;
  }

  while (offset >= 0 && !isBlackPixel()) {
    offset--;
    countState[1]++;
  }

  while (offset >= 0 && countState[0] < maxCount && isBlackPixel()) {
    offset--;
    countState[0]++;
  }

  offset = (isHorizontal ? x : y) + 1;

  const size = isHorizontal ? matrix.width : matrix.height;

  while (offset < size && isBlackPixel()) {
    offset++;
    countState[2]++;
  }

  while (offset < size && !isBlackPixel()) {
    offset++;
    countState[3]++;
  }

  while (offset < size && countState[4] < maxCount && isBlackPixel()) {
    offset++;
    countState[4]++;
  }

  return [checker(countState) ? centerFromEnd(countState, offset) : NaN, countState];
}

export function checkDiagonalPattern(
  matrix: BitMatrix,
  x: number,
  y: number,
  maxCount: number,
  isBackslash: boolean,
  checker: (countState: number[]) => boolean
): boolean {
  let offset = 0;

  const countState = [0, 0, 0, 0, 0];
  const isBlackPixel = (isUpward: boolean): number => {
    if (isBackslash) {
      return isUpward ? matrix.get(x - offset, y - offset) : matrix.get(x + offset, y + offset);
    } else {
      return isUpward ? matrix.get(x + offset, y - offset) : matrix.get(x - offset, y + offset);
    }
  };

  // Start counting up, left from center finding black center mass
  while (x >= offset && y >= offset && isBlackPixel(true)) {
    offset++;
    countState[2]++;
  }

  // Continue up, left finding white space
  while (x >= offset && y >= offset && !isBlackPixel(true)) {
    offset++;
    countState[1]++;
  }

  // Continue up, left finding black border
  while (x >= offset && y >= offset && countState[0] < maxCount && isBlackPixel(true)) {
    offset++;
    countState[0]++;
  }

  offset = 1;

  const { width, height } = matrix;

  while (x + offset < width && y + offset < height && isBlackPixel(false)) {
    offset++;
    countState[2]++;
  }

  while (x + offset < width && y + offset < height && !isBlackPixel(false)) {
    offset++;
    countState[3]++;
  }

  while (x + offset < width && y + offset < height && countState[4] < maxCount && isBlackPixel(false)) {
    offset++;
    countState[4]++;
  }

  return checker(countState);
}

export function checkRepeatPixelsInLine(matrix: BitMatrix, pattern1: Pattern, pattern2: Pattern): boolean {
  let black = 0;
  let white = 0;

  const points = new PlotLine(pattern1, pattern2).points();
  const moduleSize1 = (pattern1.width + pattern1.height) / 14;
  const moduleSize2 = (pattern2.width + pattern2.height) / 14;
  const maxRepeat = (moduleSize1 + moduleSize2) * 10;

  for (const [x, y] of points) {
    if (matrix.get(x, y)) {
      black++;
      white = 0;
    } else {
      white++;
      black = 0;
    }

    if (white > maxRepeat || black > maxRepeat) {
      return false;
    }
  }

  return true;
}

function calcTimingRatio(point: number, anchor: number): number {
  return anchor > point ? 1 : anchor < point ? -1 : 0;
}

function isObtuseAngle(start: Point, middle: Point, end: Point): boolean {
  const edge1 = distance(start, middle);
  const edge2 = distance(middle, end);
  const edge3 = distance(start, end);

  return round(edge1 * edge1 + edge2 * edge2) < round(edge3 * edge3);
}

function getTimingPointXAxis({ x, rect }: Pattern, ratio: number): number {
  const [, right, , left] = rect;

  return ratio > 0 ? right : ratio < 0 ? left : x;
}

function getTimingPointYAxis({ y, rect }: Pattern, ratio: number): number {
  const [top, , bottom] = rect;

  return ratio > 0 ? bottom : ratio < 0 ? top : y;
}

export function calcTimingPoints(start: Pattern, end: Pattern, anchor: Pattern): [start: Point, end: Point] {
  const { x: endX, y: endY } = end;
  const { x: startX, y: startY } = start;
  const { x: anchorX, y: anchorY } = anchor;
  const endXRatio = calcTimingRatio(endX, anchorX);
  const endYRatio = calcTimingRatio(endY, anchorY);
  const startXRatio = calcTimingRatio(startX, anchorX);
  const startYRatio = calcTimingRatio(startY, anchorY);
  const steepStarEnd = Math.abs(endY - startY) > Math.abs(endX - startX);
  const steepStarAnchor = Math.abs(anchorY - startY) > Math.abs(anchorX - startX);

  if (steepStarAnchor === steepStarEnd && isObtuseAngle(end, start, anchor)) {
    return [
      new Point(
        steepStarEnd ? startX : getTimingPointXAxis(start, startXRatio),
        steepStarEnd ? getTimingPointYAxis(start, startYRatio) : start.y
      ),
      new Point(
        steepStarEnd ? endX : getTimingPointXAxis(end, endXRatio),
        steepStarEnd ? getTimingPointYAxis(end, endYRatio) : end.y
      )
    ];
  }

  return [
    new Point(
      steepStarEnd ? getTimingPointXAxis(start, startXRatio) : startX,
      steepStarEnd ? start.y : getTimingPointYAxis(start, startYRatio)
    ),
    new Point(
      steepStarEnd ? getTimingPointXAxis(end, endXRatio) : endX,
      steepStarEnd ? end.y : getTimingPointYAxis(end, endYRatio)
    )
  ];
}

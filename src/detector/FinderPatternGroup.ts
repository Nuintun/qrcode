/**
 * @module FinderPatternGroup
 */

import { Pattern } from './Pattern';
import { round } from '/common/utils';
import { distance } from '/common/Point';
import { BitMatrix } from '/common/BitMatrix';
import { calculateModuleSize, calculateModuleSizeOneWay, ModuleSizeGroup } from './utils/module';

type OrderedPatterns = [
  // Top left finder
  topLeft: Pattern,
  // Top right finder
  topRight: Pattern,
  // Bottom left finder
  bottomLeft: Pattern
];

function crossProductZ(pattern1: Pattern, pattern2: Pattern, pattern3: Pattern): number {
  const { x, y } = pattern2;

  return (pattern3.x - x) * (pattern1.y - y) - (pattern3.y - y) * (pattern1.x - x);
}

function orderFinderPatterns(patterns: Pattern[]): OrderedPatterns {
  let topLeft: Pattern;
  let topRight: Pattern;
  let bottomLeft: Pattern;

  // Find distances between pattern centers
  const [pattern1, pattern2, pattern3] = patterns;
  const oneTwoDistance = distance(pattern1, pattern2);
  const twoThreeDistance = distance(pattern2, pattern3);
  const oneThreeDistance = distance(pattern1, pattern3);

  // Assume one closest to other two is B; A and C will just be guesses at first
  if (twoThreeDistance >= oneTwoDistance && twoThreeDistance >= oneThreeDistance) {
    [topLeft, bottomLeft, topRight] = patterns;
  } else if (oneThreeDistance >= twoThreeDistance && oneThreeDistance >= oneTwoDistance) {
    [bottomLeft, topLeft, topRight] = patterns;
  } else {
    [bottomLeft, topRight, topLeft] = patterns;
  }

  // Use cross product to figure out whether A and C are correct or flipped.
  // This asks whether BC x BA has a positive z component, which is the arrangement
  // we want for A, B, C. If it's negative, then we've got it flipped around and
  // should swap A and C.
  if (crossProductZ(bottomLeft, topLeft, topRight) < 0) {
    [bottomLeft, topRight] = [topRight, bottomLeft];
  }

  return [topLeft, topRight, bottomLeft];
}

function calculateSymbolSize([topLeft, topRight, bottomLeft]: OrderedPatterns, moduleSize: ModuleSizeGroup): number {
  const width = distance(topLeft, topRight);
  const height = distance(topLeft, bottomLeft);
  const moduleSizeAvg = calculateModuleSize(moduleSize);
  const size = round((round(width / moduleSizeAvg) + round(height / moduleSizeAvg)) / 2) + 7;

  switch (size & 0x03) {
    case 0:
      return size + 1;
    case 2:
      return size - 1;
    case 3:
      return NaN;
  }

  return size;
}

export class FinderPatternGroup {
  #size?: number;
  #matrix: BitMatrix;
  #patterns: OrderedPatterns;
  #moduleSize?: ModuleSizeGroup;

  constructor(matrix: BitMatrix, patterns: Pattern[]) {
    this.#matrix = matrix;
    this.#patterns = orderFinderPatterns(patterns);
  }

  public get topLeft(): Pattern {
    return this.#patterns[0];
  }

  public get topRight(): Pattern {
    return this.#patterns[1];
  }

  public get bottomLeft(): Pattern {
    return this.#patterns[2];
  }

  public get moduleSize(): ModuleSizeGroup {
    if (this.#moduleSize == null) {
      const matrix = this.#matrix;
      const [topLeft, topRight, bottomLeft] = this.#patterns;

      this.#moduleSize = [
        calculateModuleSizeOneWay(matrix, topLeft, topRight),
        calculateModuleSizeOneWay(matrix, topLeft, bottomLeft)
      ];
    }

    return this.#moduleSize;
  }

  public get size(): number {
    if (this.#size == null) {
      this.#size = calculateSymbolSize(this.#patterns, this.moduleSize);
    }

    return this.#size;
  }
}

export function calculateTopLeftAngle({ topLeft, topRight, bottomLeft }: FinderPatternGroup): number {
  const { x, y } = topLeft;
  const dx1 = topRight.x - x;
  const dy1 = topRight.y - y;
  const dx2 = bottomLeft.x - x;
  const dy2 = bottomLeft.y - y;
  const d = dx1 * dx2 + dy1 * dy2;
  const l2 = (dx1 * dx1 + dy1 * dy1) * (dx2 * dx2 + dy2 * dy2);

  return Math.acos(d / Math.sqrt(l2));
}
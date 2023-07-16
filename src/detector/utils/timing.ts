/**
 * @module timing
 */

import { Point } from '/common/Point';
import { toInt32 } from '/common/utils';
import { Pattern } from '/detector/Pattern';
import { PlotLine } from '/common/PlotLine';
import { BitMatrix } from '/common/BitMatrix';
import { FinderPatternGroup } from '/detector/FinderPatternGroup';

function calculateTimingRatio(axis: number, control: number) {
  return control > axis ? 1 : control < axis ? -1 : 0;
}

function getTimingPointXAxis({ x, rect }: Pattern, ratio: number) {
  const [left, , right] = rect;

  return ratio > 0 ? right : ratio < 0 ? left : x;
}

function getTimingPointYAxis({ y, rect }: Pattern, ratio: number) {
  const [, top, , bottom] = rect;

  return ratio > 0 ? bottom : ratio < 0 ? top : y;
}

function calculateTimingLine(start: Pattern, end: Pattern, control: Pattern, isVertical?: boolean): [start: Point, end: Point] {
  const { x: endX, y: endY } = end;
  const { x: startX, y: startY } = start;
  const { x: controlX, y: controlY } = control;
  const xRatio = calculateTimingRatio(endX, controlX);
  const yRatio = calculateTimingRatio(endY, controlY);
  const endXTranslate = getTimingPointXAxis(end, xRatio);
  const endYTranslate = getTimingPointYAxis(end, yRatio);
  const startXTranslate = getTimingPointXAxis(start, xRatio);
  const startYTranslate = getTimingPointYAxis(start, yRatio);

  if (xRatio === 0 || yRatio === 0) {
    return [new Point(startXTranslate, startYTranslate), new Point(endXTranslate, endYTranslate)];
  }

  if (isVertical ? xRatio === yRatio : xRatio !== yRatio) {
    return [new Point(startX, startYTranslate), new Point(endX, endYTranslate)];
  }

  return [new Point(startXTranslate, startY), new Point(endXTranslate, endY)];
}

export function checkModulesInTimingLine(
  matrix: BitMatrix,
  { size, topLeft, topRight, bottomLeft }: FinderPatternGroup,
  isVertical?: boolean
): boolean {
  const [start, end] = isVertical
    ? calculateTimingLine(topLeft, bottomLeft, topRight, true)
    : calculateTimingLine(topLeft, topRight, bottomLeft);
  const points = new PlotLine(start, end).points();

  let modules = 1;
  let lastBit = matrix.get(toInt32(start.x), toInt32(start.y));

  for (const [x, y] of points) {
    const bit = matrix.get(x, y);

    if (bit !== lastBit) {
      modules++;
      lastBit = bit;

      if (modules > size) {
        return false;
      }
    }
  }

  return modules >= size - 18;
}

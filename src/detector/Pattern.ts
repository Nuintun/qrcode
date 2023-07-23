/**
 * @module Pattern
 */

import { Point } from '/common/Point';
import { toInt32 } from '/common/utils';
import { PatternRatios } from './PatternRatios';

function calculateIntersectRadius({ ratios }: PatternRatios): number {
  return ratios[toInt32(ratios.length / 2)] / 2;
}

export class Pattern extends Point {
  #noise: number;
  #width: number;
  #height: number;
  #moduleSize: number;
  #combined: number = 1;
  #ratios: PatternRatios;
  #intersectRadius: number;

  public static noise(pattern: Pattern): number {
    return pattern.#noise;
  }

  public static width(pattern: Pattern): number {
    return pattern.#width;
  }

  public static height(pattern: Pattern): number {
    return pattern.#height;
  }

  public static combined(pattern: Pattern): number {
    return pattern.#combined;
  }

  constructor(ratios: PatternRatios, x: number, y: number, width: number, height: number, noise: number) {
    super(x, y);

    const { modules } = ratios;
    const xModuleSize = width / modules;
    const yModuleSize = height / modules;
    const ratio = calculateIntersectRadius(ratios);
    const moduleSize = (xModuleSize + yModuleSize) / 2;

    this.#noise = noise;
    this.#width = width;
    this.#height = height;
    this.#ratios = ratios;
    this.#moduleSize = moduleSize;
    this.#intersectRadius = moduleSize * ratio;
  }

  public get moduleSize(): number {
    return this.#moduleSize;
  }

  public equals(x: number, y: number, width: number, height: number): boolean {
    const { modules } = this.#ratios;
    const intersectRadius = this.#intersectRadius;

    if (Math.abs(x - this.x) <= intersectRadius && Math.abs(y - this.y) <= intersectRadius) {
      const moduleSizeThis = this.#moduleSize;
      const moduleSize = (width + height) / modules / 2;
      const moduleSizeDiff = Math.abs(moduleSize - moduleSizeThis);

      if (moduleSizeDiff <= 1 || moduleSizeDiff <= moduleSizeThis) {
        return true;
      }
    }

    return false;
  }

  public combine(x: number, y: number, width: number, height: number, noise: number): Pattern {
    const combined = this.#combined;
    const nextCombined = combined + 1;
    const combinedX = (this.x * combined + x) / nextCombined;
    const combinedY = (this.y * combined + y) / nextCombined;
    const combinedNoise = (this.#noise * combined + noise) / nextCombined;
    const combinedWidth = (this.#width * combined + width) / nextCombined;
    const combinedHeight = (this.#height * combined + height) / nextCombined;
    const pattern = new Pattern(this.#ratios, combinedX, combinedY, combinedWidth, combinedHeight, combinedNoise);

    pattern.#combined = nextCombined;

    return pattern;
  }
}

/**
 * @module FinderPatternMatcher
 */

import { Pattern } from './Pattern';
import { distance } from '/common/Point';
import { BitMatrix } from '/common/BitMatrix';
import { PatternMatcher } from './PatternMatcher';
import { checkPixelsInTimingLine } from './utils/timing';
import { FinderPatternGroup } from './FinderPatternGroup';
import { MAX_VERSION_SIZE, MIN_VERSION_SIZE } from '/common/Version';
import { isEqualsSize, isMatchFinderPattern } from './utils/pattern';
import { DIFF_EDGE_RATIO, DIFF_MODULE_SIZE_RATIO, FINDER_PATTERN_RATIOS } from './utils/constants';

export class FinderPatternMatcher extends PatternMatcher {
  constructor(matrix: BitMatrix, strict?: boolean) {
    super(matrix, FINDER_PATTERN_RATIOS, isMatchFinderPattern, strict);
  }

  public override match(x: number, y: number, scanline: number[]): boolean {
    return super.match(x, y, scanline, scanline[2]);
  }

  public *groups(): Generator<FinderPatternGroup, void, boolean> {
    const patterns = this.patterns.filter(({ combined }) => combined >= 3);
    const { length } = patterns;

    // Find enough finder patterns
    if (length >= 3) {
      // Max i1
      const maxI1 = length - 2;
      // Max i2
      const maxI2 = length - 1;
      // Used patterns
      const used = new Map<Pattern, boolean>();

      for (let i1 = 0; i1 < maxI1; i1++) {
        const pattern1 = patterns[i1];
        const [xModuleSize1, yModuleSize1] = pattern1.moduleSize;

        if (used.has(pattern1)) {
          continue;
        }

        for (let i2 = i1 + 1; i2 < maxI2; i2++) {
          const pattern2 = patterns[i2];
          const [xModuleSize2, yModuleSize2] = pattern2.moduleSize;

          if (used.has(pattern1)) {
            break;
          }

          if (
            used.has(pattern2) ||
            !isEqualsSize(xModuleSize1, xModuleSize2, DIFF_MODULE_SIZE_RATIO) ||
            !isEqualsSize(yModuleSize1, yModuleSize2, DIFF_MODULE_SIZE_RATIO)
          ) {
            continue;
          }

          for (let i3 = i2 + 1; i3 < length; i3++) {
            const pattern3 = patterns[i3];
            const [xModuleSize3, yModuleSize3] = pattern3.moduleSize;

            if (used.has(pattern1) || used.has(pattern2)) {
              break;
            }

            if (
              !isEqualsSize(xModuleSize1, xModuleSize3, DIFF_MODULE_SIZE_RATIO) ||
              !isEqualsSize(xModuleSize2, xModuleSize3, DIFF_MODULE_SIZE_RATIO) ||
              !isEqualsSize(yModuleSize1, yModuleSize3, DIFF_MODULE_SIZE_RATIO) ||
              !isEqualsSize(yModuleSize2, yModuleSize3, DIFF_MODULE_SIZE_RATIO)
            ) {
              continue;
            }

            const { matrix } = this;
            const finderPatternGroup = new FinderPatternGroup(matrix, [pattern1, pattern2, pattern3]);
            const { topLeft, topRight, bottomLeft } = finderPatternGroup;
            const edge1 = distance(topLeft, topRight);
            const edge2 = distance(topLeft, bottomLeft);

            if (isEqualsSize(edge1, edge2, DIFF_EDGE_RATIO)) {
              const { size } = finderPatternGroup;

              if (size >= MIN_VERSION_SIZE && size <= MAX_VERSION_SIZE) {
                const { moduleSize } = finderPatternGroup;
                const [moduleSize1, moduleSize2] = moduleSize;

                // All tests passed!
                if (
                  moduleSize1 >= 1 &&
                  moduleSize2 >= 1 &&
                  checkPixelsInTimingLine(matrix, finderPatternGroup) &&
                  checkPixelsInTimingLine(matrix, finderPatternGroup, true)
                ) {
                  if (yield finderPatternGroup) {
                    used.set(pattern1, true);
                    used.set(pattern2, true);
                    used.set(pattern3, true);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

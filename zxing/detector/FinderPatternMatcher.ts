/**
 * @module FinderPatternMatcher
 */

import { Pattern } from './Pattern';
import { BitMatrix } from '/common/BitMatrix';
import { PatternMatcher } from './PatternMatcher';
import { checkPixelsInTimingLine } from './utils/timing';
import { FinderPatternGroup } from './FinderPatternGroup';
import { MAX_VERSION_SIZE, MIN_VERSION_SIZE } from '/common/Version';
import { isEqualsSize, isMatchFinderPattern } from './utils/pattern';
import { DIFF_EDGE_RATIO, FINDER_PATTERN_RATIOS } from './utils/constants';

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
      // Pattern is used
      const used = new Set<Pattern>();

      for (let i1 = 0; i1 < maxI1; i1++) {
        const pattern1 = patterns[i1];

        if (used.has(pattern1)) {
          continue;
        }

        const width1 = pattern1.width;
        const height1 = pattern1.height;

        for (let i2 = i1 + 1; i2 < maxI2; i2++) {
          const pattern2 = patterns[i2];

          if (used.has(pattern2)) {
            continue;
          }

          const width2 = pattern2.width;
          const height2 = pattern2.height;

          if (!isEqualsSize(width1, width2, DIFF_EDGE_RATIO)) {
            continue;
          }

          if (!isEqualsSize(height1, height2, DIFF_EDGE_RATIO)) {
            continue;
          }

          for (let i3 = i2 + 1; i3 < length; i3++) {
            const pattern3 = patterns[i3];

            if (used.has(pattern3)) {
              continue;
            }

            if (!isEqualsSize(width2, pattern3.width, DIFF_EDGE_RATIO)) {
              continue;
            }

            if (!isEqualsSize(height2, pattern3.height, DIFF_EDGE_RATIO)) {
              continue;
            }

            const { matrix } = this;
            const finderPatternGroup = new FinderPatternGroup(matrix, [pattern1, pattern2, pattern3]);
            const { size, moduleSize } = finderPatternGroup;

            if (size >= MIN_VERSION_SIZE && size <= MAX_VERSION_SIZE) {
              const [moduleSize1, moduleSize2] = moduleSize;

              // All tests passed!
              if (
                moduleSize1 >= 1 &&
                moduleSize2 >= 1 &&
                checkPixelsInTimingLine(matrix, finderPatternGroup) &&
                checkPixelsInTimingLine(matrix, finderPatternGroup, true)
              ) {
                if (yield finderPatternGroup) {
                  used.add(pattern1);
                  used.add(pattern2);
                  used.add(pattern3);
                }
              }
            }
          }
        }
      }
    }
  }
}

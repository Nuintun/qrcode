/**
 * @module FinderPatternMatcher
 */

import { BitMatrix } from '/common/BitMatrix';
import { PatternMatcher } from './PatternMatcher';
import { checkPixelsInTimingLine } from './utils/timing';
import { FinderPatternGroup } from './FinderPatternGroup';
import { MAX_VERSION_SIZE, MIN_VERSION_SIZE } from '/common/Version';
import { isEqualsEdge, isMatchFinderPattern } from './utils/pattern';

export class FinderPatternMatcher extends PatternMatcher {
  constructor(matrix: BitMatrix, strict?: boolean) {
    super(matrix, 7, isMatchFinderPattern, strict);
  }

  public override match(x: number, y: number, scanline: number[]): boolean {
    return super.match(x, y, scanline, scanline[2]);
  }

  public groups(): FinderPatternGroup[] {
    const patterns = this.patterns.filter(({ combined }) => combined >= 3);
    const finderPatternGroups: FinderPatternGroup[] = [];
    const { length } = patterns;

    // Find enough finder patterns
    if (length >= 3) {
      // Max i1
      const maxI1 = length - 2;
      // Max i2
      const maxI2 = length - 1;

      // Sort patterns
      patterns.sort((pattern1, pattern2) => pattern2.width - pattern1.width);

      for (let i1 = 0; i1 < maxI1; i1++) {
        const pattern1 = patterns[i1];
        const width1 = pattern1.width;
        const height1 = pattern1.height;

        for (let i2 = i1 + 1; i2 < maxI2; i2++) {
          const pattern2 = patterns[i2];
          const width2 = pattern2.width;
          const height2 = pattern2.height;

          if (!isEqualsEdge(width1, width2)) {
            break;
          }

          if (!isEqualsEdge(height1, height2)) {
            continue;
          }

          for (let i3 = i2 + 1; i3 < length; i3++) {
            const pattern3 = patterns[i3];

            if (!isEqualsEdge(width2, pattern3.width)) {
              break;
            }

            if (!isEqualsEdge(height2, pattern3.height)) {
              continue;
            }

            const { matrix } = this;
            const finderPatternGroup = new FinderPatternGroup(matrix, [pattern1, pattern2, pattern3]);
            const { size, moduleSize } = finderPatternGroup;

            // Invalid module size
            if (moduleSize[0] < 1 || moduleSize[1] < 1) {
              continue;
            }

            if (size < MIN_VERSION_SIZE || size > MAX_VERSION_SIZE) {
              continue;
            }

            if (
              checkPixelsInTimingLine(matrix, finderPatternGroup) &&
              checkPixelsInTimingLine(matrix, finderPatternGroup, true)
            ) {
              // All tests passed!
              finderPatternGroups.push(finderPatternGroup);
            }
          }
        }
      }
    }

    return finderPatternGroups;
  }
}

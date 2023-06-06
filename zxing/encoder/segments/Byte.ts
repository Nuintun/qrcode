/**
 * @module Byte
 */

import { Mode } from '/common/Mode';
import { Charset } from '/common/Charset';
import { BitArray } from '/common/BitArray';

const encoder = new TextEncoder();

export interface TextEncode {
  (content: string, charset: Charset): ArrayLike<number>;
}

export class Byte {
  #content: string;
  #charset: Charset;

  constructor(content: string, charset: Charset = Charset.UTF_8) {
    this.#content = content;
    this.#charset = charset;
  }

  public get mode(): Mode {
    return Mode.BYTE;
  }

  public get content(): string {
    return this.#content;
  }

  public get charset(): Charset {
    return this.#charset;
  }

  public encode(encode: TextEncode = content => encoder.encode(content)): BitArray {
    const bytes = encode(this.#content, this.#charset);
    const bits = new BitArray();
    const { length } = bytes;

    let i = 0;

    while (i < length) {
      bits.append(bytes[i++], 8);
    }

    return bits;
  }
}
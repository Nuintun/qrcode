/**
 * @module GenericGFPoly
 */

import { isNumber } from '../utils';
import { GenericGF } from './GenericGF';

export class GenericGFPoly {
  #field: GenericGF;
  #coefficients: Int32Array;

  constructor(field: GenericGF, coefficients: Int32Array) {
    this.#field = field;

    const size = coefficients.length;

    if (size > 1 && coefficients[0] === 0) {
      // Leading term must be non-zero for anything except the constant polynomial "0"
      let firstNonZero = 1;

      while (firstNonZero < size && coefficients[firstNonZero] === 0) {
        firstNonZero++;
      }

      if (firstNonZero === size) {
        this.#coefficients = new Int32Array([0]);
      } else {
        const array = new Int32Array(size - firstNonZero);

        array.set(coefficients.subarray(firstNonZero));

        this.#coefficients = array;
      }
    } else {
      this.#coefficients = coefficients;
    }
  }

  #assertField(other: GenericGFPoly) {
    if (this.#field !== other.#field) {
      throw new Error('GenericGFPolys do not have same GenericGF field');
    }
  }

  public get coefficients(): Int32Array {
    return this.#coefficients;
  }

  public getDegree(): number {
    return this.#coefficients.length - 1;
  }

  public isZero(): boolean {
    return this.#coefficients[0] === 0;
  }

  public getCoefficient(degree: number): number {
    const coefficients = this.#coefficients;

    return coefficients[coefficients.length - 1 - degree];
  }

  public evaluateAt(a: number): number {
    if (a === 0) {
      // Just return the x^0 coefficient
      return this.getCoefficient(0);
    }

    let result: number;

    const coefficients = this.#coefficients;

    if (a === 1) {
      // Just the sum of the coefficients
      result = 0;

      for (const coefficient of coefficients) {
        result = result ^ coefficient;
      }

      return result;
    }

    result = coefficients[0];

    const field = this.#field;
    const length = coefficients.length;

    for (let i = 1; i < length; i++) {
      result = field.multiply(a, result) ^ coefficients[i];
    }

    return result;
  }

  public addOrSubtract(other: GenericGFPoly): GenericGFPoly {
    this.#assertField(other);

    if (this.isZero()) {
      return other;
    }

    if (other.isZero()) {
      return this;
    }

    let smallerCoefficients = this.#coefficients;
    let largerCoefficients = other.#coefficients;

    if (smallerCoefficients.length > largerCoefficients.length) {
      [smallerCoefficients, largerCoefficients] = [largerCoefficients, smallerCoefficients];
    }

    let sumDiff = new Int32Array(largerCoefficients.length);

    const lengthDiff = largerCoefficients.length - smallerCoefficients.length;

    // Copy high-order terms only found in higher-degree polynomial's coefficients
    sumDiff.set(largerCoefficients.subarray(0, lengthDiff));

    for (let i = lengthDiff; i < largerCoefficients.length; i++) {
      sumDiff[i] = smallerCoefficients[i - lengthDiff] ^ largerCoefficients[i];
    }

    return new GenericGFPoly(this.#field, sumDiff);
  }

  public multiply(scalar: number): GenericGFPoly;
  public multiply(other: GenericGFPoly): GenericGFPoly;
  public multiply(other: number | GenericGFPoly): GenericGFPoly {
    const field = this.#field;

    if (isNumber(other)) {
      if (other === 0) {
        return field.zero;
      }

      if (other === 1) {
        return this;
      }

      const coefficients = this.#coefficients;
      const length = coefficients.length;
      const product = new Int32Array(length);

      for (let i = 0; i < length; i++) {
        product[i] = field.multiply(coefficients[i], other);
      }

      return new GenericGFPoly(field, product);
    }

    this.#assertField(other);

    if (this.isZero() || other.isZero()) {
      return field.zero;
    }

    const aCoefficients = this.#coefficients;
    const bCoefficients = other.coefficients;
    const aLength = aCoefficients.length;
    const bLength = bCoefficients.length;
    const product = new Int32Array(aLength + bLength - 1);

    for (let i = 0; i < aLength; i++) {
      const aCoeff = aCoefficients[i];

      for (let j = 0; j < bLength; j++) {
        product[i + j] = product[i + j] ^ field.multiply(aCoeff, bCoefficients[j]);
      }
    }

    return new GenericGFPoly(field, product);
  }

  public multiplyByMonomial(degree: number, coefficient: number): GenericGFPoly {
    if (degree < 0) {
      throw new Error('illegal monomial degree less than 0');
    }

    const field = this.#field;

    if (coefficient === 0) {
      return field.zero;
    }

    const coefficients = this.coefficients;
    const length = coefficients.length;
    const product = new Int32Array(length + degree);

    for (let i = 0; i < length; i++) {
      product[i] = field.multiply(coefficients[i], coefficient);
    }

    return new GenericGFPoly(field, product);
  }

  public divide(other: GenericGFPoly): GenericGFPoly[] {
    this.#assertField(other);

    if (other.isZero()) {
      throw new Error('Divide by 0');
    }

    const field = this.#field;

    let quotient = field.zero;
    let remainder: GenericGFPoly = this;

    const denominatorLeadingTerm = other.getCoefficient(other.getDegree());
    const inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);

    while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
      const degreeDifference = remainder.getDegree() - other.getDegree();
      const scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
      const term = other.multiplyByMonomial(degreeDifference, scale);
      const iterationQuotient = field.buildMonomial(degreeDifference, scale);

      quotient = quotient.addOrSubtract(iterationQuotient);
      remainder = remainder.addOrSubtract(term);
    }

    return [quotient, remainder];
  }
}

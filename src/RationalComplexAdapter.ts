import { Rational } from './Rational';
import { Complex } from './Complex';

/**
 * Clase adaptadora que permite realizar operaciones aritméticas entre números complejos y racionales.
 * Implementa la interfaz Arithmeticable que puede tener cualquier tipo de dato.
 */
export class ComplexRationalAdapter extends Complex {
  constructor(rational: Rational) {
    super(rational.getNumerator() / rational.getDenominator(), 0);
  }
}


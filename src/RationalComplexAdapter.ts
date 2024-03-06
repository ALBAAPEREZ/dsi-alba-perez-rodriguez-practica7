import { Rational } from './Rational';
import { Complex } from './Complex';
import { Arithmeticable } from './Aritmeticable';

/**
 * Clase adaptadora que permite realizar operaciones aritméticas entre números complejos y racionales.
 * Implementa la interfaz Arithmeticable que puede tener cualquier tipo de dato.
 */
export class ComplexRationalAdapter implements Arithmeticable<ComplexRationalAdapter> {
  /**
   * Constructor de la clase ComplexRationalAdapter.
   * Se encarga de inicializar los atributos de la clase.
   * @param value valor del número complejo o racional.
   */
  constructor(public value: Complex | Rational) {}
  
  /**
   * Método que pasa un numero racional a complejo.
   * Para ello, comprueba si el valor es de tipo Complex o Rational.
   * Si es racional, lo convierte a complejo haciendo el cociente del numerador entre el denominador.
   * @returns retorna un número complejo.
   */
  toComplex(): Complex {
    if (this.value instanceof Complex) {
      return this.value;
    } else {
      // Convierte el número racional a complejo.
      return new Complex(this.value.numerator / this.value.denominator, 0);
    }
  }
  
  /**
   * Método que pasa un numero complejo a racional.
   * Para ello, comprueba si el valor es de tipo Complex o Rational.
   * Si es complejo, lo convierte a racional haciendo el numerador el número real y el denominador 1.
   * @returns RETORNA UN NÚMERO RACIONAL.
   */
  toRational(): Rational {
    if (this.value instanceof Rational) {
      return this.value;
    } else {
      // Convierte el número complejo a racional.
      return new Rational(this.value.real, 1);
    }
  }

  /**
   * Método para sumar dos números complejos o racionales.
   * Se puede sumar un número complejo con un número racional.
   * @param other otro número complejo o racional.
   * @returns retorna un nuevo número complejo o racional que es el resultado de la suma.
   */
  add(other: ComplexRationalAdapter): ComplexRationalAdapter {
    const complexResult = this.toComplex().add(other.toComplex());
    return new ComplexRationalAdapter(complexResult);
  }

  subtract(other: ComplexRationalAdapter): ComplexRationalAdapter {
    const complexResult = this.toComplex().subtract(other.toComplex());
    return new ComplexRationalAdapter(complexResult);
  }

  multiply(other: ComplexRationalAdapter): ComplexRationalAdapter {
    const complexResult = this.toComplex().multiply(other.toComplex());
    return new ComplexRationalAdapter(complexResult);
  }

  divide(other: ComplexRationalAdapter): ComplexRationalAdapter {
    const complexResult = this.toComplex().divide(other.toComplex());
    return new ComplexRationalAdapter(complexResult);
  }

}
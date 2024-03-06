// INDEX PRINCIPAL
import { Complex } from './Complex';
import { Rational } from './Rational';
import { ComplexRationalAdapter } from "./RationalComplexAdapter";

// Creamos instancias de números complejos y racionales
const complex = new Complex(3, 4);
const rational = new Rational(2, 5);

// Creamos instancias de adaptadores
const complexNumber = new ComplexRationalAdapter(complex);
const rationalNumber = new ComplexRationalAdapter(rational);

// Realiza operaciones entre complejos y racionales
const sumResult = complexNumber.add(rationalNumber);
const subtractResult = complexNumber.subtract(rationalNumber);
const multiplyResult = complexNumber.multiply(rationalNumber);
const divideResult = complexNumber.divide(rationalNumber);

// Mostramos los resultados
console.log('Número Complejo:', complexNumber);
console.log('Número Racional:', rationalNumber);
console.log('Suma:', sumResult);
console.log('Resta:', subtractResult);
console.log('Multiplicación:', multiplyResult);
console.log('División:', divideResult);
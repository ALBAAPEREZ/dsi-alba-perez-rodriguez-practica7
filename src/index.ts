// INDEX PRINCIPAL
import { Complex } from './Complex';
import { Rational } from './Rational';
import { ComplexRationalAdapter } from "./RationalComplexAdapter";

// Creamos instancias de números complejos y racionales
const complex = new Complex(3, 4);
const rational = new Rational(2, 5);

// Creamos instancias de adaptadores
const rationalNumber = new ComplexRationalAdapter(rational);

// Realiza operaciones entre complejos y racionales
const sumResult = rationalNumber.add(rationalNumber);
const subtractResult = rationalNumber.subtract(rationalNumber);
const multiplyResult = rationalNumber.multiply(rationalNumber);
const divideResult = rationalNumber.divide(rationalNumber);

// Mostramos los resultados
console.log(''),
console.log('Número Complejo:', complex);
console.log('')
console.log('Número Racional:', rationalNumber);
console.log('La suma del numero complejo y el racional es:', sumResult);
console.log('La resta del numero complejo y el racional es:', subtractResult);
console.log('La multiplicación del numero complejo y el racional es:', multiplyResult);
console.log('La división del numero complejo y el racional es:', divideResult);
// PRUEBAS PARA LA CLASE RationalComplexAdapter

import 'mocha'
import { expect } from 'chai'
import { Complex } from './../src/Complex'
import { Rational } from './../src/Rational'
import { ComplexRationalAdapter } from './../src/RationalComplexAdapter'

// PRUEBAS PARA LA CLASE RationalComplexAdapter
describe('Pruebas para la clase RationalComplexAdapter', () => {
  it ('Comprobar que se crea una instancia de RationalComplexAdapter', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    expect(complexRationalAdapter).to.be.an('object');
  });
  it ('Prueba para ver que el constructor de RationalComplexAdapter recibe un Rational y retorna un Complex', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    expect(complexRationalAdapter).to.be.an.instanceOf(Complex);
  });
  // prueba para el metodo add
  it ('Prueba para el metodo add de RationalComplexAdapter', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    const result = complexRationalAdapter.add(complexRationalAdapter);
    expect(result).to.be.an.instanceOf(Complex);
  });
  // prueba para el metodo subtract
  it ('Prueba para el metodo subtract de RationalComplexAdapter', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    const result = complexRationalAdapter.subtract(complexRationalAdapter);
    expect(result).to.be.an.instanceOf(Complex);
  });
  // prueba para el metodo multiply
  it ('Prueba para el metodo multiply de RationalComplexAdapter', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    const result = complexRationalAdapter.multiply(complexRationalAdapter);
    expect(result).to.be.an.instanceOf(Complex);
  });
  // prueba para el metodo divide
  it ('Prueba para el metodo divide de RationalComplexAdapter', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    const result = complexRationalAdapter.divide(complexRationalAdapter);
    expect(result).to.be.an.instanceOf(Complex);
  });
  // prueba para el metodo toString
  it ('Prueba para el metodo toString de RationalComplexAdapter', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    const result = complexRationalAdapter.toString();
    expect(result).to.be.a('string');
  });
  // prueba para comporbar que no retorna tipos incorrectos
  it ('Comprobar que no retorna tipos incorrectos', () => {
    const rational = new Rational(2, 5);
    const complexRationalAdapter = new ComplexRationalAdapter(rational);
    const result = complexRationalAdapter.toString();
    expect(result).to.be.a('string');
  });
});
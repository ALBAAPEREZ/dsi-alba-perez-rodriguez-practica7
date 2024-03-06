// PRUEBAS PARA LA CLASE RationalComplexAdapter

import 'mocha'
import { expect } from 'chai'
import { Complex } from './../src/Complex'
import { Rational } from './../src/Rational'
import { ComplexRationalAdapter } from './../src/RationalComplexAdapter'

// PRUEBAS PARA LA CLASE RationalComplexAdapter
describe('Pruebas para la clase RationalComplexAdapter', () => {
  it ('Comprobar que el constructor recibe un número complejo o racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter).to.have.property('value').that.is.an.instanceof(Complex);
  });
  // comprobamos que puede recibir un numero racional
  it ('Comprobar que puede recibir un número racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter).to.have.property('value').that.is.an.instanceof(Rational);
  });
  // comprobamos que puede convertir un numero racional a complejo
  it ('Comprobar que puede convertir un número racional a complejo', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter.toComplex()).to.be.an.instanceof(Complex);
  }); 
  // comprobamos que puede convertir un numero complejo a racional
  it ('Comprobar que puede convertir un número complejo a racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.toRational()).to.be.an.instanceof(Rational);
  });
  // comprobamos que puede sumar un numero complejo con un numero racional
  it ('Comprobar que puede sumar un número complejo con un número racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
  });
  // comprobamos que sea funcion
  it ('Comprobar que es una función', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add).to.be.a('function');
  });
  // comprobamos que puede restar un numero complejo con un numero racional
  it ('Comprobar que puede restar un número complejo con un número racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.subtract(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
  });
  // compprobamos que sea una funcion
  it ('Comprobar que es una función', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.subtract).to.be.a('function');
  });
  // comprobamos que puede multiplicar un numero complejo con un numero racional
  it ('Comprobar que puede multiplicar un número complejo con un número racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.multiply(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
  });
  // comporbamos que sea una funcion
  it ('Comprobar que es una función', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.multiply).to.be.a('function');
  });
  // comprobamos que puede dividir un numero complejo con un numero racional
  it ('Comprobar que puede dividir un número complejo con un número racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.divide(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
  });
  // comprobamos que sea una funcion
  it ('Comprobar que es una función', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.divide).to.be.a('function');
  });
  // comprobarmos que no retorna tipos incorrectos
  it ('Comprobar que no retorna tipos incorrectos', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Rational(1, 1)))).to.not.be.an.instanceof(Rational);
  });
  // comprobamos que implementa la interfaz Aritmeticable
  it ('Comprobar que implementa la interfaz Aritmeticable', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter).to.have.property('add').that.is.a('function');
    expect(rationalComplexAdapter).to.have.property('subtract').that.is.a('function');
    expect(rationalComplexAdapter).to.have.property('multiply').that.is.a('function');
    expect(rationalComplexAdapter).to.have.property('divide').that.is.a('function');
  });
  // comprobamos que no retorna tipos incorrectos
  it ('Comprobar que no retorna tipos incorrectos', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Rational(1, 1)))).to.not.be.an.instanceof(Rational);
  });
  // si a la funcion tocomplex se le pasa un complejo, debe retornar el mismo complejo
  it ('Comprobar que si se le pasa un complejo a toComplex, debe retornar el mismo complejo', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.toComplex()).to.be.an.instanceof(Complex);
  });
  // si a la funcion toRational se le pasa un racional, debe retornar el mismo racional
  it ('Comprobar que si se le pasa un racional a toRational, debe retornar el mismo racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter.toRational()).to.be.an.instanceof(Rational);
  });
  // La funcion toRational debe convertir el complejo a racional haciendo el numerador el número real y el denominador 1
  it ('Comprobar que toRational convierte el complejo a racional haciendo el numerador el número real y el denominador 1', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.toRational()).to.eql(new Rational(1, 1));
  });
  // La funcion toComplex debe convertir el racional a complejo haciendo el cociente del numerador entre el denominador
  it ('Comprobar que toComplex convierte el racional a complejo haciendo el cociente del numerador entre el denominador', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter.toComplex()).to.eql(new Complex(1, 0));
  });
  // La parte imaginaria de los numeros racionales sera 0
  it ('Comprobar que la parte imaginaria de los números racionales será 0', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter.toComplex().imaginary).to.be.equal(0);
  });
  // Los numeros complejos deben tener parte imaginaria y real
  it ('Comprobar que los números complejos deben tener parte imaginaria y real', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.toComplex().real).to.be.equal(1);
    expect(rationalComplexAdapter.toComplex().imaginary).to.be.equal(1);
  });
  // Se crean correctamente los numeros racionales en el index.
  it ('Comprobar que se crean correctamente los números racionales en el index', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter.toRational()).to.eql(new Rational(1, 1));
  });
  // se crean correctamente los numeros complejos en el index.
  it ('Comprobar que se crean correctamente los números complejos en el index', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.toComplex()).to.eql(new Complex(1, 1));
  });
  // Comporbar que se instancia un numero complejo
  it ('Comprobar que se instancia un número complejo', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.toComplex()).to.be.an.instanceof(Complex);
  });
  // Comporbamos que todas las operaciones retornan un numero complejo o racional
  it ('Comprobar que todas las operaciones retornan un número complejo o racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
    expect(rationalComplexAdapter.subtract(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
    expect(rationalComplexAdapter.multiply(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
    expect(rationalComplexAdapter.divide(new ComplexRationalAdapter(new Rational(1, 1)))).to.be.an.instanceof(ComplexRationalAdapter);
  });
  // Comporbamos que si se da un numero racion por ejemplo 1/1, y se le pasa a la funcion toComplex, debe retornar un numero complejo con parte imaginaria 0
  it ('Comprobar que si se da un número racional por ejemplo 1/1, y se le pasa a la función toComplex, debe retornar un número complejo con parte imaginaria 0', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(1, 1));
    expect(rationalComplexAdapter.toComplex().imaginary).to.be.equal(0);
  });
  // si tenemos un racional 10/5 y un complejo 1 + 1i , debera retornar un complejo 3 + 1i
  it ('Comprobar que si tenemos un racional 10/5 y un complejo 1 + 1i, deberá retornar un complejo 3 + 1i', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Rational(10, 5));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Complex(1, 1))).toComplex()).to.eql(new Complex(3, 1));
  });
  // Si tenemos un numero complejo 1 + 1i y un numero racional 10/5, debera retornar un numero complejo 3 + 1i
  it ('Comprobar que si tenemos un número complejo 1 + 1i y un número racional 10/5, deberá retornar un número complejo 3 + 1i', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Rational(10, 5))).toComplex()).to.eql(new Complex(3, 1));
  });
  // Comporbamos que se multiplican correctamente los numeros complejos
  it ('Comprobar que se multiplican correctamente los números complejos', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.multiply(new ComplexRationalAdapter(new Complex(1, 1))).toComplex()).to.eql(new Complex(0, 2));
  });
  // Comprobamos que se dividen correctamente los numeros complejos
  it ('Comprobar que se dividen correctamente los números complejos', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.divide(new ComplexRationalAdapter(new Complex(1, 1))).toComplex()).to.eql(new Complex(1, 0));
  });
  // Comporbamos que no devuelve algo que no sea un numero complejo o racional
  it ('Comprobar que no devuelve algo que no sea un número complejo o racional', () => {
    const rationalComplexAdapter: ComplexRationalAdapter = new ComplexRationalAdapter(new Complex(1, 1));
    expect(rationalComplexAdapter.add(new ComplexRationalAdapter(new Rational(1, 1)))).to.not.be.an.instanceof(Rational);
  });
});
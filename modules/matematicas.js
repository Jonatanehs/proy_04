// se crea la constante math que contendra objetos vacios
const Math = {};

// Define la funcion sumar(add)
function add(a,b) {
  return a + b;
}

// define la funcion restar(substract)
function substract(a,b) {
  return a - b;
}

// define la funcion multiplicar(multiply)
function multiply(a,b) {
  return a * b;
}

// define la funcion dividir(divide)
function divide(a,b) {

/* se crea una condicion if anidada que si b es igual a 0
y a es igual a 0 retorne un mensaje diciendo No Aplica */
  if (b == 0 && a == 0)  {
      return "No Aplica";

// si b es igual a 0 retorne n/a 
  } else if(b==0){
  return "n/a";

/* si las condiciones son falsas se crea una variable llamada divisionTot
contendra la division a /b que retornara divisionTot y aparecera solo un decimal */
  } else {
    let divisionTot = a / b;
    return  divisionTot.toFixed(1);
  }
}

// Math. contendra las funciones matematicas
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// exporta lo que contenga Math
module.exports = Math;
 
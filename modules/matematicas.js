const Math = {};

const add = (a, b) => {
  return a + b;
}

const substract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  if (b == 0 && a == 0) {
    return "No Aplica";
  } else if (b == 0) {
    return "n/a";
  } else {
    let divisionTot = a / b;
    return  divisionTot.toFixed(1);
  }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
 
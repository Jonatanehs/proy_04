require('colors');

const matematicas = require('./modules/matematicas.js');

function getRandom() {
  return Math.floor(Math.random() * 10);
}

const main = () => {
  console.log('************************'.red);
  console.log('*  '.magenta + 'Numeros aleatorios'.bgGreen + '  *'.magenta);
  console.log('************************\n\n'.blue);
  let numero1 = getRandom();
  let numero2 = getRandom();

  console.log('+++++++++++++++++++++++++++++++++'.green);
  console.log('+'.green + '  numeros generados = '.yellow +
    `${[numero1]}`.red + ' , ' + `${[numero2]}`.red + '    *\n'.blue
    + '+'.green + '                               *'.blue);


    const suma = matematicas.add(numero1, numero2);
    const resta = matematicas.substract(numero1, numero2);
    const multiplicacion = matematicas.multiply(numero1, numero2);
    const division = matematicas.divide(numero1, numero2);
    let divisionResult;

    if (typeof division === 'number') {
      divisionResult = division.toFixed(1);
    } else {
      divisionResult = division;
    }
    

    console.log('+'.green + '  Suma: '.yellow + `${[numero1]}`.red  + ' + ' +  `${[numero2]}`.red 
        + ' = ' + `${suma}`.red + '             *'.blue);
    console.log('+'.green + '  Resta:'.yellow + `${[numero1]}`.red  + ' - ' +  `${[numero2]}`.red 
        + ' = ' +  `${resta}`.red + '               >'.blue);
    console.log('+'.green + '  Multiplica: '.yellow + `${[numero1]}`.red  + ' * ' +  `${[numero2]}`.red 
    + ' = ' + `${multiplicacion}`.red +  '    *'.blue);

    console.log(
      '+'.green + '  Divide: '.yellow + `${[numero1]}`.red  + ' / ' +  `${[numero2]}`.red +
      ' = ' +  `${divisionResult}`.red + '        *'.blue
    );

    console.log('+++++++++++++++++++++++++++++++++'.green);    

};

main();

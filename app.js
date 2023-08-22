require('colors');

const matematicas = require('./modules/matematicas.js');

function getRandom() {
  return Math.floor(Math.random() * 10);
}

const main = async () => {
 
  console.log('************************'.red);
  console.log('*  '.magenta + 'Numeros aleatorios'.bgGreen + '  *'.magenta);
  console.log('************************\n\n'.blue);
  let numero1 = getRandom();
  let numero2 = getRandom();

  console.log('+++++++++++++++++++++++++++++++++'.green);
  console.log('+'.green + '  numeros generados = '.yellow +
      `${[numero1]}`.red + ' , ' + `${[numero2]}`.red +  '    *\n'.blue 
        + '+'.green + '                               *'.blue );

  try {
    const suma = await matematicas.add(numero1, numero2);
    const resta = await matematicas.substract(numero1, numero2);
    const multiplicacion = await matematicas.multiply(numero1, numero2);
    const division = await matematicas.divide(numero1, numero2);


    console.log('+'.green + '  Suma: '.yellow + `${[numero1]}`.red  + ' + ' +  `${[numero2]}`.red 
        + ' = ' + `${suma}`.red + '             *'.blue);
    console.log('+'.green + '  Resta:'.yellow + `${[numero1]}`.red  + ' - ' +  `${[numero2]}`.red 
        + ' = ' +  `${resta}`.red + '               >'.blue);
    console.log('+'.green + '  Multiplica: '.yellow + `${[numero1]}`.red  + ' * ' +  `${[numero2]}`.red 
    + ' = ' + `${multiplicacion}`.red +  '    *'.blue);
    console.log('+'.green + '  Divide: '.yellow + `${[numero1]}`.red  + ' / ' +  `${[numero2]}`.red 
        + ' = ' +  `${division.toFixed(1)}`.red + '        *'.blue);
    console.log('+++++++++++++++++++++++++++++++++'.green);    
  } catch (error) {
    console.error("Error:", error);
  }
};

main();

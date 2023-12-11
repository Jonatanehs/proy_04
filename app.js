// importa el modulo de colores de node js 
require('colors');

// la constante matematicas contendra lo importado de matematicas 
const matematicas = require('./modules/matematicas.js');

// se limpiara la consola 
console.clear()

// se crea una funcion llamada getRandom
function getRandom() {

/* se generan numeros decimales aleatorios entre 0 y 1 que se multiplica * 10 
estos numeros los redondea y los retorna */
  return Math.floor(Math.random() * 10);
}

// se crea una nueva funcion flecha llamada main 
const main = () => {

// se imprime un mensaje en consola 
  console.log('************************'.red);
  console.log('*  '.magenta + 'Numeros aleatorios'.bgGreen + '  *'.magenta);
  console.log('************************\n\n'.blue);

// se crean dos variables que contenga la funcion getRandom
  let numero1 = getRandom();
  let numero2 = getRandom();

// se imprime mensajes en la consola 
  console.log('+++++++++++++++++++++++++++++++++'.green);
  console.log('+'.green + '  numeros generados = '.yellow +
    `${[numero1]}`.red + ' , ' + `${[numero2]}`.red + '    *\n'.blue
    + '+'.green + '                               *'.blue);

// la constante llamada suma contendra lo que este en matematicas.add con dos argumentos
    const suma = matematicas.add(numero1, numero2);

// la constante llamada suma contendra lo que este en matematicas.substract con dos argumentos
    const resta = matematicas.substract(numero1, numero2);

// la constante llamada suma contendra lo que este en matematicas.multiply con dos argumentos
    const multiplicacion = matematicas.multiply(numero1, numero2);

// la constante llamada suma contendra lo que este en matematicas.divide con dos argumentos
    const division = matematicas.divide(numero1, numero2);
    
// se imprimen mensajes en la consola 
    console.log('+'.green + '  Suma: '.yellow + `${[numero1]}`.red  + ' + ' +  `${[numero2]}`.red 
        + ' = ' + `${suma} `.red + '            *'.blue);
    console.log('+'.green + '  Resta:'.yellow + `${[numero1]}`.red  + ' - ' +  `${[numero2]}`.red 
        + ' = ' +  `${resta}`.red + '               >'.blue);
    console.log('+'.green + '  Multiplica: '.yellow + `${[numero1]}`.red  + ' * ' +  `${[numero2]}`.red 
    + ' = ' + `${multiplicacion}`.red +  '       *'.blue);

    console.log(
      '+'.green + '  Divide: '.yellow + `${[numero1]}`.red  + ' / ' +  `${[numero2]}`.red +
      ' = ' +  `${division}`.red + '          *'.blue
    );

    console.log('+++++++++++++++++++++++++++++++++'.green);    

};

main();

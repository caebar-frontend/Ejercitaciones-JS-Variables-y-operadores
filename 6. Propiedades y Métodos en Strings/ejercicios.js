console.error('\n')
console.error('/////////////////////////////////////////////////////////////////////////////////////////////////')
console.error('\n')

/*************************************** */
// Ejercicio 6.1: Declara una variable 'frase' y asígnale el valor "JavaScript es genial". Usa el método 'length' para mostrar la longitud de la cadena.

var frase = 'Javascript es genial'
function Ejercicio_6_1() {
const resultado = frase.length

console.warn('---Ejercicio 6.1---')
console.info('Cadena String a analizar: '+ frase)
console.info('La longitud de la cadena es: '+ resultado)
}
Ejercicio_6_1()
/***************************************** */

console.error('\n')
console.error('/////////////////////////////////////////////////////////////////////////////////////////////////')
console.error('\n')

/*************************************   */
// Ejercicio 6.2: Usa el método 'indexOf' para encontrar la posición de la palabra "genial" en la variable 'frase' y muestra el resultado en la consola.
function Ejercicio_6_2() {
let resultado2 = frase.indexOf('genial')
console.warn('---Ejercicio 6.2---')
console.log('La posición de la palabra genial es: ' + resultado2)
}
Ejercicio_6_2()
/**************************************** */

console.error('\n')
console.error('/////////////////////////////////////////////////////////////////////////////////////////////////')
console.error('\n')


/*********************************************** */
// Ejercicio 6.3: Usa el método 'slice' para extraer la palabra "JavaScript" de la variable 'frase' y muestra el resultado en la consola.
function Ejercicio_6_3(){
let resultado3 = frase.slice(0, 10)
console.warn('---Ejercicio 6.3---')
console.log('El resultado de la operación con el método SLICE es: ' + resultado3)
}

Ejercicio_6_3()
/************************************************ */

console.error('\n')
console.error('/////////////////////////////////////////////////////////////////////////////////////////////////')
console.error('\n')

/************************************************ */
// Ejercicio 6.4: Declara una variable 'nombreCompleto' y asígnale el valor "   Juan Pérez   ". Usa el método 'trim' para eliminar los espacios en blanco al principio y al final de la cadena y muestra el resultado en la consola.
function Ejercicio_6_4() {
let resultado4 = '     Juan Pérez     '

let resultado5 = resultado4.trim()

console.warn('---Ejercicio 6.4---')
console.log('La denominación original es: ' + resultado4)
console.log('El resultado de la operación con el método TRIM es: '+ resultado5)
}
Ejercicio_6_4()

console.error('\n')
console.error('/////////////////////////////////////////////////////////////////////////////////////////////////')
console.error('\n')

/************************************************/



/************************************************/
// Ejercicio 6.5: Declara una variable 'cancion' y asígnale el valor "Twinkle, twinkle, little star". Usa el método 'split' para dividir la cadena en palabras individuales y muestra el resultado en la consola.
function Ejercicio_6_5() {
let cancion = 'Twinkle, twinkle, little star'

resultado6 = cancion.split(', ')
resultado7 = cancion.split(' ')

console.warn('---Ejercicio 6.5---')
console.log('La frase a operar con el método SPLIT es: ' + cancion)
console.log('La finalización individual usando el método SPLIT es: ' + resultado6[0])
console.log('La culminación en particular con el método SPLIT es: ' + resultado6[1])
console.log('El resultado utilizando el método SPLIT es: ' + resultado7[2])
console.log('El desenlace con el uso del método SPLIT es: ' + resultado7[3])
}
/************************************************ */
Ejercicio_6_5()

console.error('\n')
console.error('/////////////////////////////////////////////////////////////////////////////////////////////////')
console.error('\n')
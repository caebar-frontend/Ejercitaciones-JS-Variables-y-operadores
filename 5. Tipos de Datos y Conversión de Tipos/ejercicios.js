
/*************************************/
// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
function EJERCICIO5PRIMERO() {
let cadenaNumero = '123';
const numeroConvertido = Number.parseInt(cadenaNumero)


console.info("El número en formato cadena es: " + "'" + cadenaNumero + "'")
console.log("El número en formato numérico es: " + numeroConvertido)
}
/******************************************* */
console.log('\n')
console.error("///////////////////////////////////////////////////////////////////////")
console.log('\n')


/********************************************/
// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.
function EJERCICIO5SEGUNDO() {
let booleano = true

const cadenaBooleano = booleano.toString()

console.info("El valor del booleano es: " + booleano)
console.log("El booleano en formato cadena es: " + "'" + cadenaBooleano + "'")
}
/******************************************* */

console.warn('Ejercicio 5.1, Resultado: ')
EJERCICIO5PRIMERO()
console.log('\n')
console.error("///////////////////////////////////////////////////////////////////////")
console.log('\n')

console.warn('Ejercicio 5.2, Resultado: ')
EJERCICIO5SEGUNDO()
console.log('\n')
console.error("///////////////////////////////////////////////////////////////////////")
console.log('\n')
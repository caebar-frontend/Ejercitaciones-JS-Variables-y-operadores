/*******************************************************************************************************************************************************/
// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
function ejercicio_7_1(){
{
    console.warn('---Ejercicio 7.1---')
    let variableNoDisponible = 1000
    console.log('Valor de la variable dentro del bloque de código es: ', variableNoDisponible)
}

try {
console.info(' Valor de la variable fuera del bloque de código es: ', variableNoDisponible)
} catch (error) {
    console.error('Tipo de error:', error.message)
}
}
ejercicio_7_1()
/*******************************************************************************************************************************************************/

console.error('                                               ')
console.error('//////////////////////////////////////////////////////')
console.error('                                          ')

/*******************************************************************************************************************************************************/
// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
function ejercicio_7_2() {
{
    console.warn('---Ejercicio 7.2---')
    
    console.log('Valor de la constante PI:', 3.14159)
   
}
try {
    const PI = 3.14159
    console.log('Intentando reasignar el valor de la constante PI...')
    PI = 2134
    console.log('Nueva valor de la constante PI:', PI)
}
catch (errordos) {
    console.error('Tipo de error:', errordos.message)
}
}
ejercicio_7_2()
/*******************************************************************************************************************************************************/

console.error('                                               ')
console.error('//////////////////////////////////////////////////////')
console.error('                                         ')


/*******************************************************************************************************************************************************/
// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.
function ejercicio_7_3() {
    console.warn('---Ejercicio 7.3---')
    
    var mensaje = 'Hola Mundo'
    console.log('Valor génesis de la variable mensaje: ', mensaje)
    
    function cambiarValor() {
        mensaje = 'Buen día, un saludo desde la función'
    }
    cambiarValor()
    console.log('Valor secundario de la variable mensaje después de la función: ', mensaje)
}
ejercicio_7_3()
/*******************************************************************************************************************************************************/

console.error('                                               ')
console.error('//////////////////////////////////////////////////////')
console.error('                                         ')



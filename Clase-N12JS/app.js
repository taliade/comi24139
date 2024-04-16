console.log('Hola mundo desde un archivo externo JS');

console.warn('Hola');
console.error('Hola');

//Variables 

// VAR       string cadena de texto
var nombre = " Roberto";
console.log(nombre);
var nombres = ' Maria Laura Fernandez';
console.log(nombres);

//LET  

let calculadora = 'sumas , restas  y divisiones';
console.log(calculadora);
// Reasignar los valores de calculadora
calculadora = ' sumas , restas , divisiones, multiplicaciones y potencias ,etc'
console.log(calculadora);

let suma = 10;
console.log(suma);
suma =50;
console.log(suma);


//CONST 

const PI = 3.14;
console.log(PI);

const personajes = ('Ricky , morty')
console.log(personajes);
const personajess = ( ' Mas personajes');

let sumatotal =(personajes + personajess)
console.log(sumatotal);

let cadena = ' Hola Mundo' ;
console.log(cadena)
let numero = 23;
console.log(numero);

let boolean = true ;
console.log(boolean)
let nulo = null ;
console.log(nulo)
let indefinido = undefined ;
console.log(indefinido)
let symbol = Symbol();
console.log(symbol)
let object = {
    propiedad: 'valor',
    propiedad: 'valor'
}
console.log(object);

console.log(typeof personajes);
console.log(typeof boolean);
console.log(typeof indefinido);


// Definir una cadena que representa un número
var cadenaNumero = "42";

// Usar parseInt para convertir la cadena en un número entero
var numeroEntero = parseInt(cadenaNumero);

// Imprimir el resultado
console.log(numeroEntero); // Output: 42

//parsefloat 
// Definir una cadena que representa un número de punto flotante
var cadenaNumero = "3.14";
console.log(cadenaNumero);  // Output: 3.14


let num1 = 10;
let num2 = 5;
let sumaa = num1 + num2 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log("Suma:", sumaa); // Resultado: 20
console.log("Resta:", resta); // Resultado: 5
console.log("Multiplicación:", multiplicacion); // Resultado: 50
console.log("División:", division); // Resultado: 2

document.write(num1)
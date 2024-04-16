 # Comentarios
 ```
 //Comentario de linea 
 /*
comentario de texto 
*
* /

 ```
  
  # Variables
 ```
variables  VAR
Pertenecen al ámbito o scope global de nuestro documento, por lo que pueden ser accedidas y reasignadas desde cualquier lugar del mismo.
El uso de ésta, puede dar resultados inesperados, por eso, hay que tener cuidado de cómo se usa.

LET
El alcance de estas variables es local, solo pueden ser accedidas dentro del bloque donde se definen. 
También, permiten que su valor pueda ser reasignado.

CONST
Solo pueden ser accedidas dentro del bloque donde están definidas, pero no permite que su valor sea reasignado, es decir, la variable se vuelve inmutable.

### Tipos de Datos
string: secuencia de caracteres que representan un valor. (cadena de texto)
number: valor numérico, entero o decimal.
boolean: valores true o false. 
null: valor nulo.
undefined: valor sin definir.
symbol: tipo de dato cuyos casos son únicos e inmutables.
object: colección de datos en un conjunto de propiedad/valor.

let cadena = ' Hola Mundo' ;
let numero = 23;
let boolean = true ;
let nulo = null ;
let indefinido = undefined ;
let symbol = Symbol();
let object = {
    propiedad: 'valor'
}

# comprobacion numericas
// Comprobar si un número es finito
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false, ya que es infinito

// Comprobar si un número es entero
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(4.6)); // false, ya que es decimal

// Comprobar si un número es seguro (dentro del rango de valores seguros)
console.log(Number.isSafeInteger(1e15)); // true
console.log(Number.isSafeInteger(1e16)); // false, ya que es un valor no seguro

// Comprobar si un valor no es un número (NaN)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false, ya que 5 es un número


// Definir una cadena que representa un número
var cadenaNumero = "42";

// Usar parseInt para convertir la cadena en un número entero
var numeroEntero = parseInt(cadenaNumero);

// Imprimir el resultado
console.log(numeroEntero); // Output: 42

# parsefloat 
// Definir una cadena que representa un número de punto flotante
var cadenaNumero = "3.14";

// Usar parseFloat para convertir la cadena en un número de punto flotante
var numeroDecimal = parseFloat(cadenaNumero);

// Imprimir el resultado
console.log(numeroDecimal); // Output: 3.14




  ## operadoresAritmeticos 
 
     let num1 = 10;
    let num2 = 5;
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    console.log("Suma:", suma); // Resultado: 15
    console.log("Resta:", resta); // Resultado: 5
    console.log("Multiplicación:", multiplicacion); // Resultado: 50
    console.log("División:", division); // Resultado: 2
  
## Entradas y salidas de datos
prompt(): despliega un mensaje en la ventana del navegador con una casilla para ingresar un valor. El valor ingresado será tomado como un string.
alert(): despliega un mensaje en la ventana del navegador con el texto que reciba por parámetro.
console.log(): envía lo que recibe por parámetro a la consola del navegador.  


### Reasignaciones  
    



  // Operadores Relacionales
  ### operadores Relacionales
   ``` 
    let edad = 25;
    let edadMinima = 18;

    let esMayorDeEdad = edad >= edadMinima;

    console.log("¿Es mayor de edad?", esMayorDeEdad); // Resultado: true
   ```
### INCREMENTO Y DECREMENTO
```
    let contador = 5;
contador++; // Incremento en 1
console.log(contador); // Resultado: 6


let contador = 10;
contador--; // Decremento en 1
console.log(contador); // Resultado: 9


let numero = 7;
let resultado = numero++ + 5; // Incremento después de la operación
console.log(numero); // Resultado: 8 (el valor de 'numero' se incrementa después de la operación)
console.log(resultado); // Resultado: 12 (7 + 5)

let otroNumero = 10;
let otroResultado = --otroNumero + 5; // Decremento antes de la operación
console.log(otroNumero); // Resultado: 9 (el valor de 'otroNumero' se decrementa antes de la operación)
console.log(otroResultado); // Resultado: 14 (9 + 5)
```


  // Operadores Lógicos
  ## operadores Logicos
   ```
    let tienePermiso = true;
    let tieneEdadSuficiente = false;

    let puedeConducir = tienePermiso && tieneEdadSuficiente;

    console.log("¿Puede conducir?", puedeConducir); // Resultado: false
   ```

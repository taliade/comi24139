### Arrays

const frutas = ['manzana🍎', 'plátano🍌', 'naranja🍊', 'uva🍇'];

console.log(frutas);
let matriz = [[], [],[]]
let matrizejem = [[1,2,3],[4, 5, 6],[ 7, 8, 9]]; //matriz de 3x3
console.log(matrizejem);
# Acceder al arrays y metodos at()
const frutas = ['manzana🍎', 'plátano🍌', 'naranja🍊', 'uva🍇'];

// Acceder a un elemento específico del array
console.log(frutas[0]); // Salida: manzana
console.log(frutas[2]); // Salida: naranja

// Utilizar el método at() para acceder a un elemento específico del array
console.log(frutas.at(1)); // Salida: plátano
console.log(frutas.at(3)); // Salida: uva

# Tipos y cantidad
# Ejemplo 
const datos =['Jose',23, true, 'Calle Falsa 123'];
console.log(datos.length); 

### Array de números:
const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // Salida: [1, 2, 3, 4, 5]
console.log(numeros.length); // Salida: 5 (cantidad de elementos)

### Array de cadenas de texto:
const nombres = ['Juan', 'María', 'Pedro'];
console.log(nombres); // Salida: ['Juan', 'María', 'Pedro']
console.log(nombres.length); // Salida: 3 (cantidad de elementos)

### Array de booleanos:
const booleanos = [true, false, true, true];
console.log(booleanos); // Salida: [true, false, true, true]
console.log(booleanos.length); // Salida: 4 (cantidad de elementos)

### Array de objetos:
const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 }
];
console.log(personas); // Salida: [{ nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 25 }, { nombre: 'Pedro', edad: 35 }]
console.log(personas.length); // Salida: 3 (cantidad de elementos)




## Método push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.

const frutas = ['manzana', 'plátano', 'naranja'];

frutas.push('uva');
console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva']

let livestock = ["🐷", "🐮", "🐔"];
livestock.push("🐴", "🐮");
// console.log(livestock);
// ["🐷", "🐮", "🐔", "🐴", "🐮"]

frutas.push('sandía🍉', 'melón🍈');
console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva', 'sandía', 'melón']

## Método unshift(): Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.

const numeros = [2, 3, 4, 5];

numeros.unshift(1);
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

numeros.unshift(-2, -1, 0);
console.log(numeros); // Salida: [-2, -1, 0, 1, 2, 3, 4, 5]

let train = ["🚃", "🚃", "🚃", "🚃"];
train.unshift("🚂");
// console.log(train);
// ["🚂", "🚃", "🚃", "🚃", "🚃"]


## Método pop(): Elimina el último elemento del array y lo devuelve.

const colores = ['rojo', 'azul', 'verde'];

const ultimoColor = colores.pop();
console.log(colores); // Salida: ['rojo', 'azul']
console.log(ultimoColor); // Salida: 'verde'

## Método shift(): Elimina el primer elemento del array y lo devuelve.

const letras = ['a', 'b', 'c'];

const primeraLetra = letras.shift();
console.log(letras); // Salida: ['b', 'c']
console.log(primeraLetra); // Salida: 'a'


### Estos métodos te permiten agregar elementos al final o al principio del array (push() y unshift() respectivamente) y eliminar elementos del final o del principio del array (pop() y shift() respectivamente).

## Concatenar elementos
### Concat() 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = array1.concat(array2, array3);
console.log(resultado); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const dogs = ["🐶", "🐶"];
const cats = ["🐱", "🐱", "🐱"];
const pets = dogs.concat(cats);
// console.log(pets);
// ["🐶", "🐶", "🐱", "🐱", "🐱"]


### join()
const elementos = ['Hola', ' ', 'mundo', '!'];

// Utilizando el método join()
const concatenado = elementos.join('');
console.log(concatenado); // Salida: 'Hola mundo!'

// Utilizando un bucle for...of
let concatenado2 = '';
for (let elemento of elementos) {
  concatenado2 += elemento;
}
console.log(concatenado2); // Salida: 'Hola mundo!'

const devices = ["💻", "🖥️", "🖥️", "💻", "🖨️"];
const network = devices.join("〰️");
// console.log(network);
// "💻〰️🖥️〰️🖥️〰️💻〰️🖨️"

### Metodo Split()
##  se aplica a una cadena de texto llamada frase. El método split() divide la cadena en un array de subcadenas utilizando el separador especificado. En el primer caso, se utiliza un espacio en blanco como separador, lo que divide la frase en palabras. En el segundo caso, se utiliza una cadena vacía como separador, lo que divide la frase en letras individuales. Cada subcadena resultante se almacena en un array (palabras y letras, respectivamente).

const frase = "Hola, cómo estás?";

// Dividir la frase en palabras utilizando el espacio en blanco como separador
const palabras = frase.split(" ");

console.log(palabras);
// Output: ["Hola,", "cómo", "estás?"]

// Dividir la frase en letras utilizando una cadena vacía como separador
const letras = frase.split("");

console.log(letras);
// Output: ["H", "o", "l", "a", ",", " ", "c", "ó", "m", "o", " ", "e", "s", "t", "á", "s", "?"]


### Método slice(): Retorna una copia superficial de una porción del array original sin modificarlo.

const numeros = [1, 2, 3, 4, 5];

const subArray = numeros.slice(2, 4);
console.log(subArray); // Salida: [3, 4]

const primerosTres = numeros.slice(0, 3);
console.log(primerosTres); // Salida: [1, 2, 3]
let weather = ["☁️", "🌧️", "☁️"];
weather.splice(1, 2, "☀️");
// console.log(weather);
// ["☁️", "☀️"]



## Sort()
const frutas = ['manzana', 'naranja', 'plátano', 'uva'];

frutas.sort();
console.log(frutas); // Salida: ['manzana', 'naranja', 'plátano', 'uva']

const numeros = [10, 5, 8, 2, 1];

numeros.sort();
console.log(numeros); // Salida: [1, 10, 2, 5, 8]

## Ejemplo  ascendente o descendente
const numeros = [10, 5, 8, 2, 1];

numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros); // Salida: [1, 2, 5, 8, 10]

const numeros = [10, 5, 8, 2, 1];

numeros.sort(function(a, b) {
  return b - a;
});

console.log(numeros); // Salida: [10, 8, 5, 2, 1]


const numeros = [1, 2, 3, 4, 5];

## forEach()
#### forEach() itera sobre cada elemento del array y ejecuta una función para cada uno.

numeros.forEach(function(numero) {
  console.log(numero);
});
// Salida:
// 1
// 2
// 3
// 4
// 5
## every()
const numeros = [1, 2, 3, 4, 5];

const todosMayoresQueCero = numeros.every(function(numero) {
  return numero > 0;
});

console.log(todosMayoresQueCero); // Salida: true

const todosPares = numeros.every(function(numero) {
  return numero % 2 === 0;
});

console.log(todosPares); // Salida: false

const visitors   = ["🧑", "👽", "🧑", "🧑", "🤖"];
const isHuman    = e => e === "🧑";
const onlyHumans = visitors.every(isHuman);
// console.log(onlyHumans);
// false


## some()
const numeros = [1, 2, 3, 4, 5];

const algunoMayorQueTres = numeros.some(function(numero) {
  return numero > 3;
});

console.log(algunoMayorQueTres); // Salida: true

const algunoNegativo = numeros.some(function(numero) {
  return numero < 0;
});

console.log(algunoNegativo); // Salida: false

## reduce()
### reduce() aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

const suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // Salida: 15



## map()
### map() crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
const duplicados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(duplicados); // Salida: [2, 4, 6, 8, 10]

const hungryMonkeys = ["🐒", "🦍", "🦧"];
const feededMonkeys = hungryMonkeys.map(m => m + "🍌");
// console.log(feededMonkeys);
// ["🐒🍌", "🦍🍌", "🦧🍌"]



## filter()
### filter() crea un nuevo array con los elementos que cumplen una condición especificada en una función.
const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // Salida: [2, 4]

const guests  = ["👩👨", "👩👩", "👨", "👩", "👨👨"];
const singles = guests.filter(g => g.length/2 === 1); // *
// console.log(singles);
// ["👨", "👩"]

## find()
### find() devuelve el primer elemento del array que cumple con una condición especificada en una función.
const encontrado = numeros.find(function(numero) {
  return numero > 3;
});
console.log(encontrado); // Salida: 4

const emojis = ["😀", "🌍", "🐶", "🍕", "🎉"];

// Función de callback para buscar un emoji específico
const buscarEmoji = (emoji) => {
  return emoji === "🐶";
};

// Utilizar el método find() para buscar un emoji en el array
const emojiEncontrado = emojis.find(buscarEmoji);

console.log(emojiEncontrado);
// Output: "🐶"
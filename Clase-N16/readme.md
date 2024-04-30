### Qué es la programación orientada a objetos


La programación orientada a objetos es un paradigma de programación basado en la creación de objetos que pueden contener datos y funciones.

Se dice que la programación orientada a objetos busca que representemos nuestro código y algoritmos con objetos, como en la vida real.

Este paradigma está basado, principalmente en los principios de abstracción, encapsulación o encapsulamiento, herencia y polimorfismo.

El propósito central de la programación orientada a objetos es que los objetos que definimos para nuestros algoritmos sean independientes, que no expongan sus detalles y que se puedan usar e integrar con otros objetos.

Un objeto es una combinación de propiedades o atributos que describen al objeto y una serie de métodos o acciones que puede ejecutar el objeto. Cada objeto en nuestro programa es capaz de almacenar información en sus propiedades y de modificarlas de manera independiente a otros objetos. Esto quiere decir que aunque tuviera dos objetos similares, digamos dos marcadores, cada uno puede modificar sus propiedades sin que estas modificaciones afecten al otro objeto, aún cuando ambos son del mismo tipo.

De este mismo objeto marcador, podemos decir que las propiedades que tiene son su color, su tamaño, la tinta disponible, el tipo de material del que están hecho, por mencionar algunos. Aunque tuviéramos dos tipos de marcadores, ambos podrían tener colores de tinta distintos, tinta disponible diferente, etc. Por eso en el paradigma cada objeto guarda un valor que le pertenece solo a él en sus propiedades.

Uno de los grandes poderes del paradigma es el de composición, objetos como el marcador que usamos de ejemplo, no son una unidad, son una composición de objetos más pequeños que tienen responsabilidades específicas y sencillas, la punta solo tiene que absorber tinta, el material que lo une solo tiene que sostenerlo todo, y así en lugar de pensar en el marcador como algo complejo con muchas funciones, pensamos en él como una composición de muchos objetos haciendo tareas sencillas.

De eso se trata separar nuestro código en objetos, de crear pequeños objetos, simples, con responsabilidades sencillas, que en conjunto, puedan solucionar problemas complejos, ayudándonos así a separar dicho problema en distintas responsabilidades.

Aunque en este bloque nos enfocaremos principalmente en el contexto y el valor de this, es importante comenzar hablando del tema de definición de objetos, que tiene mucho que ver con el del contexto, comencemos.


let curso ={
    titulo:"Curso Profesional de Codo a Codo",
    formato: "Virtual",
    bloques: ["Frontend", "Backend"]
}

console.log(curso ["titulo"]);

//Recuerden que tenemos metodos en los objetos que creamos

let curso ={
    titulo:"Curso Profesional de Codo a Codo",
    formato: "Virtual",
    bloques: ["Frontend", "Backend"],
    inscribir: function(){
    console.log("Inscrito al curso");
    }
}

curso.incribir();
## Podemos reasignar los datos en los metodos
curso.titulo = "Curso de Datos";
curso["inscribir"] = function(){
    console.log("Inscribir v2");
}

curso.inscribir();

## Creamos y usamos un objeto, con propiedades y metodos
var persona = {
    nombre: "Juan", //variable del objeto. Par variable: valor,
    apellido: "Paz",
    dni: 11223344,
    //Método: es una propiedad más
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido 
        //El string que devuelve tiene información del propio objeto, por eso usamos “this”
    }
}

console.log(persona) // Imprimo el objeto
console.log(persona.nombre) //Imprimo una propiedad del objeto: Juan
console.log(persona.nombreCompleto()) //Imprimo el resultado del método: Juan Paz



### Metodos 
var perro = {
    nombre: "Milo",
    edad: 12,
    vivo: true,
    quienSoy() {return "Soy " + this.nombre},
    ladrar() {return this.nombre + " dice guau!"}
}
console.log(perro.nombre,"tiene",perro.edad,"años")
console.log(perro.quienSoy())
if (perro.vivo) {
    console.log(perro.ladrar())
}



### Clases de Objetos 

// Clase Perro, con su constructor:
class Perro {
    constructor( nombre, edad, vivo){
         this.nombre = nombre
         this.edad   = edad
         this.vivo   = vivo
         }
     }

// Instanciamos dos objetos clase Perro:
var perro1 = new Perro ("Lola", 4, true)
var perro2 = new Perro ("Lassie", 10, false)

// Modificamos alguna de sus PROPIEDADES:
perro1.nombre = "Toby"
perro2.edad = 6

console.log(perro1)

### Funciones Constructoras

//Función constructora (clase)
function Auto(marca, tipo, modelo) {
   this.marca = marca
   this.tipo = tipo
   this.modelo = modelo
   }

//Creamos el objeto miAuto
var miAuto = new Auto('Ford','Focus', 2019)
//Creamos el objeto miFurgon
var miFurgon = new Auto('Renault','Traffic', 2010)


console.log(miFurgon)


### Propiedades y metodos 

### .lenght 
// Creamos una variable de texto
var texto1 = "¡Hola a todos!"
largo = texto1.length
console.log(largo)   //14
// Se puede usar directamente:
console.log("Hola".length) //4

### .concat()
// Creamos una variable de texto
var cad = "¡Hola "
// Concatenamos con otra
var saludo = cad.concat("Codo a Codo!")
// Y en la consola vemos "¡Hola Codo a Codo!"
console.log(saludo)


### Charat (pos) 
var cad= "hola como estas"
document.write("CHARAT <br>")
document.write(cad.charAt(0)) // devuelve "h"
var pos1= cad[1] //Almaceno en pos1 el caracter 1(“o”)
var pos2= cad[20] //indefinido (no hay elemento nro 20)
document.write(pos1) //devuelve o
document.write(pos2) //undefinded

### indexOf(string) y lastIndexOf(string)

var cad = "hola como estas"
document.write(cad.indexOf("a"))        //Muestra “3” en el documento HTML
document.write(cad.indexOf("a",4))      //Muestra “13” en el documento HTML
document.write(cad.lastIndexOf("o"))    //Muestra “8” en el documento HTML
document.write(cad.lastIndexOf("o", 7)) //Muestra “6” en el documento HTML


## String mas metodos
###  .repeat(n)
var cad= "Aprendiendo JavaScript "
document.write(cad.repeat(3))

### toLowerCase() Devuelve el texto de la variable en minusculas 

### toUpperCase() Devuelve el texto de la variable en mayusculas
var cad= "Aprendiendo JavaScript "
document.write(cad.toLowerCase())
document.write(cad.toUpperCase())


### Plantilla de cadena de caracteres 
function fn() { return "Este es el resultado de la función" }
console.log(`Hola Mundo: ${fn()}`)
//Hola Mundo: Este es el resultado de la función

var usuario = {nombre: 'Juan Perez'}
console.log(`Estás conectado como ${usuario.nombre.toUpperCase()}.`)
// Estás conectado como JUAN PEREZ.
var divisa = 'Pesos'
console.log(`Los precios se indican en ${divisa}. Convierte ${divisa} en tu moneda local.`)
//Los precios se indican en Pesos. Convierte Pesos en tu moneda local.

### 
function suma(a,b){return a+b}
var a=Number(prompt("Ingrese un numero a:"))
var b=Number(prompt("Ingrese un numero b:"))
console.log(a + " + " + b + " es " + suma(a,b)) // 12 + 21 es 33
console.log(`${a} + ${b} es ${suma(a,b)}`) // 12 + 21 es 33


### Sin necesitar concatenar 
var cadena = `Línea número 1 de la cadena
Línea número 2 de la cadena`
console.log(cadena)



### libreria Math  - Metodos 

Math.PI;   // 3.14159265

Math.pow(10,2); // 100  elevar un valor a la potencia 
Math.pow(10,3); // 1000

###  Si queremos redondear al entero mas cercano 
Math.round(6,5); // 7
Math.round(5,6); // 6
Math.round(5,3); // 5

Math.sqrt(4) // raiz cuadrada 2



// let curso ={
//     titulo:"Curso Profesional de Codo a Codo",
//     formato: "Virtual",
//     bloques: ["Frontend", "Backend"]
// }

// console.log(curso ["titulo"]);
// console.log(curso.bloques);


// Creamos el objeto
// var miAuto = new Object()
// // Creamos las propiedades
// miAuto.marca = 'Ford'
// miAuto.tipo = 'Ranger'
// miAuto.modelo = 2019;

// console.log("El auto es:", miAuto.marca, miAuto.tipo,"y el modelo es:",miAuto.modelo); 

// //Recuerden que tenemos metodos en los objetos que creamos

// let curso ={
//     titulo:"Curso Profesional de Codo a Codo",
//     formato: "Virtual",
//     bloques: ["Frontend", "Backend"],
//     inscribir: function(){
//         //Tener el codigo a ejecutar
//     console.log("Inscrito al curso");
//     }
// }

// curso.inscribir();

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
    


    // var perro = {
    //     nombre: "Milo",
    //     edad: 12,
    //     vivo: false,
    //     quienSoy() {return "Soy " + this.nombre},
    //     ladrar() {return this.nombre + " dice guau!"}
    // }
    // console.log(perro.nombre,"tiene",perro.edad,"años")
    // console.log(perro.quienSoy())
    // if (perro.vivo) {
    //     console.log(perro.ladrar())
    // }
    
    
    
// Clase Perro, con su constructor:
// class Perro {
//     constructor( nombre, edad, vivo){
//          this.nombre = nombre
//          this.edad   = edad
//          this.vivo   = vivo
//          }
//      }

// // Instanciamos dos objetos clase Perro:
// var perro1 = new Perro ("Lola", 4, true)
// var perro2 = new Perro ("Lassie", 10, false)

// // Modificamos alguna de sus PROPIEDADES:
// perro1.nombre = "Toby"
// perro2.edad = 6

// console.log(perro1);
// console.log(perro2);

//Función constructora (clase)
function Auto(marca, tipo, modelo) {
    this.marca = marca,
    this.tipo = tipo,
    this.modelo = modelo
    }
 
 //Creamos el objeto miAuto
 var miAuto = new Auto('Ford','Focus', 2019)
 //Creamos el objeto miFurgon
 var miFurgon = new Auto('Renault','Traffic', 2010)
 
 
 console.log(miFurgon)
 console.log(miAuto)


//  const texto11 = "¡Hola a todos!"
// var texto2 = "Otro mensaje de texto"
// var vacio = " "
// var texto3 = "123" // Cuidado, NO es un Number! === Extrictamente iguales tipo de datos
// console.log(texto11);
// console.log(texto2)
// console.log(texto11 + vacio + texto3)
// console.log(typeof(texto3));

// // Declaración con el constructor new String
// const texto1 = new String("¡Hola a todos!")
// var texto22 = new String("Otro mensaje de texto")
// console.log(texto1)
// console.log(texto22);

// Creamos una variable de texto
// var texto1 = "¡Hola a todos!"
// largo = texto1.length
// console.log(largo)   //14
// // Se puede usar directamente:
// console.log("Hola".length) //4

// // Creamos una variable de texto
// var cad = "¡Hola "
// // Concatenamos con otra
// var saludo = cad.concat("Codo a Codo!")
// // Y en la consola vemos "¡Hola Codo a Codo!"
// console.log(saludo)

// var cad= "hola como estas?"
// document.write(cad + " <br>");
// document.write("CHARAT <br>")
// document.write(cad.charAt(0) + "<br>") // devuelve "h"
// var pos1= cad[1] //Almaceno en pos1 el caracter 1(“o”)
// var pos2= cad[15] //indefinido (no hay elemento nro 20)
// document.write(pos1 + "<br>") //devuelve o
// document.write(pos2) //undefinded

var cad = "hola como estas"
document.write(cad.indexOf("a"))        //Muestra “3” en el documento HTML
document.write(cad.indexOf("a",4))      //Muestra “13” en el documento HTML
document.write(cad.lastIndexOf("o"))    //Muestra “8” en el documento HTML
document.write(cad.lastIndexOf("o", 7)) //Muestra “6” en el documento HTML




//libreria Math  - Metodos 

Math.PI;   // 3.14159265

Math.pow(10,2); // 100  elevar un valor a la potencia 
Math.pow(10,3); // 1000

// Si queremos redondear al entero mas cercano 
Math.round(6,5); // 7
Math.round(5,6); // 6
Math.round(5,3); // 5

Math.sqrt(4) // raiz cuadrada 2

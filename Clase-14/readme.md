# Clase N°14 Funciones 

### Funcion Declarada

function saludar() {
  
  console.log("¡Hola, mundo!");
}

saludar();
##### En una función declarada, el nombre de la función está disponible en todo el ámbito en el que se define. Esto significa que puedes llamar a la función en cualquier parte del código, incluso antes de que la declaración de la función aparezca en el código.


### Funcion Expresada

var sumar = function(a, b) {
  return a + b;
};

var resultado = sumar(3, 5);
console.log(resultado);



###  Las funciones declaradas son accesibles en todo el ámbito en el que se definen, incluso antes de su declaración en el código. Las funciones expresadas solo están disponibles después de que se haya realizado la asignación de la función a una variable.

### Return 

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

let numero1 = 5;
let numero2 = 3;
let suma = sumar(numero1, numero2);
console.log(suma);

#### Funcion Flecha 

const sumarConsole = (a, b) =>{
let resultado = a + b;
 console.log('El valor retinado es: ', resultado);
}

const sumarAlert = (a, b) =>{
let resultado = a + b;
    alert('El valor retinado es: ', resultado);
}


### Como resultado 

    const sumar = (a, b, callback) =>{
        let resultado = a + b;

        callback(resultado);
    }
    suma(10, 7, fuction (suma){
        console.log('El valor retornado es' , suma);
    });

    sumar(8, 5, fuction (suma){
    alert('El valor retornado es: ', suma);
    });












### Callback (Sincronicos llamar de vuelta)
#### Los callbacks generalmente se utilizan para manejar operaciones asíncronas. Sin embargo, también es posible usar callbacks de forma sincrónica, aunque no es tan común. Un callback síncrono se ejecuta inmediatamente después de que se llama a la función que lo recibe como argumento.

Ejemplo : 
function operacionSincrona(callback) {
  console.log("Realizando operación sincrónica...");
  callback();
}

function callback() {
  console.log("Callback ejecutado.");
}

operacionSincrona(callback);


#### Callback Asincrona

##### Aunque los callbacks sincrónicos pueden ser útiles en algunos casos, es más común usarlos para manejar operaciones asíncronas, ya que permiten un mejor control del flujo del programa cuando se trabaja con tareas que pueden llevar tiempo, como solicitudes de red o lecturas/escrituras de archivos.


function operacionAsincrona(callback) {
  // Simulamos una operación asíncrona
  setTimeout(function() {
    // Después de 2 segundos, llamamos al callback
    callback();
  }, 2000);
}

function callback() {
  console.log("La operación asíncrona ha finalizado.");
}

// Llamamos a la función operacionAsincrona pasando el callback
operacionAsincrona(callback);
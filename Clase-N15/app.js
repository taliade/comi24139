// function sumar(a, b) {
//     let resultado = a + b;
//     return resultado;
//   }

//   console.log("El resultado de la suma es:" + sumar(50,80))
//   console.log("El resultado de la suma es:" , sumar(50,80))

// /// Funcion Flecha
//   let alCuadro = x => x*x;
//   console.log("La operacion es: ", alCuadro(4));

// var aSumar = (num1,num2) => num1 + num2;
// console.log(aSumar(5,7))


// let aMultiplicar = ( num1,num2 ) => {
//     resultado = num1 * num2;
//     return resultado;
// }

// console.log(aMultiplicar(9,8));



// const sumarAlert = (a, b) =>{
//     let resultado = a + b;
//         alert('El valor retinado es: '+ resultado);
//     }

// sumarAlert(90,54);


// cambioDeNombre = 12;
// console.log(cambioDeNombre);


// // Funcion anonima  
// let nombre = prompt("Ingrese su nombre");
// const saludos = function (nombre){
//     let mensaje = "Hola Como estas? " + nombre;
//     return mensaje;

// }


// console.log(saludos(nombre));

//Callback  al nombrarlo no le ingresas los parentesis
// function saludar (nombre){
//     alert('Hola ' + nombre);
// }
//                          // Una funcion dentro de otra funcion            
// function ingresoDeUsuario(callback){
//     var nombre = prompt('Ingrese por favor su nombre:');
//     callback(nombre);
//      // Es una funcion ingresoDeUsuario dentro esta la otra funcion saludar
// }
 

// ingresoDeUsuario(saludar)

// function closere 
function creaSumador(x) {
    return function(y) {
    return x + y;
    };
    }

    console.log(creaSumador(30));
     let sumar = creaSumador();
     console.log(sumar)

    var suma5 = creaSumador(5);
    var suma10 = creaSumador(50);
    console.log(suma5(2)); // imprimo 7 estoy en la funcion x y paso parametro "2" de la funcion y
    console.log(suma10(26)); 
    // ctrl + k + u 

    


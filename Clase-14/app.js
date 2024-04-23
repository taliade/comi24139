//Funciones  1 er paso  Crear 

function saludar(){ // Parametros  

    console.log("Hola, Soy una funcion");
}

/// 2do  paso la Ejecución

saludar() // No son parametros  


//tabla de multiplicar *5 

for (let a=1; a<=10; a++){
    console.log("1 x ", a, " = ", (5 * a));
}
console.log("Hola mundo")
for (let a=1; a<=10; a++){
    console.log("1 x ", a, " = ", (5 * a));

}
console.log("Segundo ves de la mi tabla")
for (let a=1; a<=10; a++){
    console.log("1 x ", a, " = ", (5 * a));

}

// funcion de tabla del 5

function tablaDelCinco(){
    for (let a=1; a<=10; a++){
        console.log("1 x ", a, " = ", (5 * a));
    
    }
}

tablaDelCinco();


/// Calculadora 

function sumar(num1,num2) {  
     return num1 + num2 
}

function multiplicar (num1,num2) {
    return num1 * num2 
}


function restar(num1,num2) {
    return num1 - num2;
}

// No podes divir por 0 

function dividir(num1,num2){
    if (num2 === 0 ){  /// == Es igual  === Estrictamente igual 
        return "ERROR , no se puede dividir por cero";
    } else return num1 / num2;
}


console.log(sumar(10,60));
console.log(multiplicar(3,5))
console.log(restar(3,5))
console.log("SERAPARAMOS LOS MENSAJES");
console.log(dividir(50,0.2)); 
console.log(dividir(80,4))
console.log(dividir(80,)) // NaN  me falta un valor (argumento)
// ** Potencia  


function SaludarDos(miNombre){
    console.log("Hola " + miNombre);
}

let saludoFormal = prompt("Por favor ingrese su nombre")

console.log("Despues de la Funcion")


SaludarDos(saludoFormal);

document.write(saludoFormal);

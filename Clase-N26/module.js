function sumar (a,b){
    return a + b;
}


// esto es en un funcion tradicional
// const res = sumar(10,50)
// console.log(res)

//module y exportar 

module.exports = sumar; 


//Puedo exportar varias funciones en una solo modulo exports
// module.exports = {
//     sumar,
//     restar,
//     multiplicar,
//     dividir

// }
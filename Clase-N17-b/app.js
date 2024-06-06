// (typeof(Storage) !== "undefined")

// // ¿El navegador soporta esta función?
// if (typeof(Storage) !== "undefined") {
//     // setItem guarda datos en el dispositivo
//     localStorage.setItem("apellido", "Perez")
//     localStorage.setItem("nombre", "Juan")
//     console.log("Datos guardados.")
//     } else {
//     console.log("Web Storage no soportado.")
//     }


// // ¿El navegador soporta esta función?
// if (typeof(Storage) !== "undefined") {
// // getItem recupera datos del dispositivo
// ape = localStorage.getItem("apellido")
// nom = localStorage.getItem("nombre")
// console.log(ape + ", " + nom)
// console.log(`ape ,  nom`);
// } else {
// console.log("Web Storage no soportado.")
// }

/// llamo a localstorage (clave despues el valor)
// localStorage.setItem("Codo a Codo","Clase de Objetos web y arrays");
console.log(localStorage.getItem("Codo a Codo"));


// ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
    // setItem guarda datos en el dispositivo
    sessionStorage.setItem("curso", "Full Stack Python")
    // getItem recupera datos del dispositivo
    curso = sessionStorage.getItem("curso")
    console.log("recuperado:" + curso)
    } else {
    console.log("Web Storage no soportado.")
    }



    // ##  Para utilizar con Objetos 
    lst =[
        {
            name:"Matias",
            age:53
        },{
            name:"Alicia",
            age:40
        }
    ];
    
    // ##  stringify convierne el elemento lista de objetos en un String
    
    
    // ### Entonces antes de guardar realiza una convercion se convierte en json 
    localStorage.setItem("list",JSON.stringify(lst)); 
    
    // ## Ahora quiero mostrar
    lst = JSON.parse(localStorage.getItem("list"))
    console.log(typeof(lst))
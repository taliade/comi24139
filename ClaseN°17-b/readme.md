## Las características de Local Storage y Session Storage son:
## Permiten almacenar entre 5MB y 10MB de información;

//Como funciona el localStorage es para guardar un elementos

// localStorage.setItem("Codo a Codo","Clase de Objetos web y arrays");
// console.log(localStorage.getItem("Codo a Codo"));


##  Para utilizar con Objetos 
// lst =[
//     {
//         name:"Matias",
//         age:53
//     },{
//         name:"Alicia",
//         age:40
//     }
// ];

##  stringify convierne el elemento lista de objetos en un String
localStorage.setItem();
// Esto guarda un string 

### Entonces antes de guardar realiza una convercion se convierte en json 
localStorage.setItem("list",JSON.stringify(lst)); 

## Ahora quiero mostrar
lst = JSON.(localStorage.getItem("list"))
console.log(typeof(lst))


// Ver el tipo de datos que estoy guardando el localStorage
lista = localStorage.getItem("list");
console.log(typeof(lista));

//Pero vamos a usar el listado de objetos con JSON 
lista = JSON.parse(localStorage.getItem("list"));
console.log(typeof(lista));
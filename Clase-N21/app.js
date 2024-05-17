// Un API (Application Programming Interface) es un conjunto de reglas y protocolos 
// que permiten que diferentes aplicaciones se comuniquen entre sí. Es una interfaz que 
// define cómo las diferentes partes de software deben interactuar y qué operaciones
//  pueden realizar.

// Un API define los métodos, los parámetros y el formato de los datos que se pueden
//  intercambiar entre las aplicaciones. Proporciona una forma estructurada y 
//  estandarizada para que los desarrolladores puedan utilizar y acceder a las 
//  funcionalidades de un sistema o servicio externo.


// console.log('Inicio del proceso');
// let suma = 0;
// for (let i = 0; i < 1000000; i++) {
// suma += i;
// }
// console.log('Suma completa: ', suma);
// console.log('Fin del proceso');




const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
.then(res => res.json())
.then(data =>{
   const img = document.querySelector('img');
  img.src = data[0].url; //data del json  
   
});


// const URL = 'https://api.thecatapi.com/v1/images/search?limit=5'; // Limitado a 5 imágenes

// fetch(URL)
//    .then((response) => response.json())
//   .then((data) => {
//     const imageContainer = document.getElementById('image-container'); // Obtén un contenedor en tu HTML
//     data.forEach((catImage) => {
//       const img = document.createElement('img'); // Crea un elemento de imagen para cada imagen
//       img.src = catImage.url; // Establece la fuente de la imagen
//       imageContainer.appendChild(img); // Agrega la imagen al contenedor
//     });
//   })
//   .catch((error) => console.error('Error:', error));

console.log('Primero: Este mensaje se muestra primero.');
// setTimeout(() => {
// console.log('Tercero: Este mensaje se muestra después de 2 segundos.');
// }, 2000);
// console.log('Segundo: Este mensaje se muestra mientras esperamos el temporizador.');

// function obtenerDatosDeAPI() {
//     return new Promise((resolve, reject) => {
//     //Simulando una llamada a API con setTimeout
//     setTimeout(() => {
//     //Supongamos que esta es una operación que puede fallar aleatoriamente
//     const fallo = Math.random() > 0.5; // 50% de probabilidad de fallo
//     if (fallo) {
//     reject("Error: No se pudo obtener los datos.");
//     } else {
//     resolve("Datos obtenidos exitosamente.");
//     }
//     }, 1000); // Simulamos un retraso de 1 segundo
//     });
//     }

// obtenerDatosDeAPI()
// .then(datos => {
// //Se ejecuta si la promesa se resuelve exitosamente
// console.log(datos);
// })
// .catch(error => {
// //Se ejecuta si la promesa se rechaza
// console.error(error);
// })
// .finally(() => {
// //Se ejecuta independientemente del resultado anterior
// console.log("Operación completada.");
// });

// function obtenerDatosDeAPI() {
//     return new Promise((resolve, reject) => {
//     // Simulando una llamada a API con setTimeout
//     setTimeout(() => {
//     // Supongamos que esta es una operación que puede fallar aleatoriamente
//     const fallo = Math.random() > 0.5; // 50% de probabilidad de fallo
//     if (fallo) {
//     reject("Error: No se pudo obtener los datos.");
//     } else {
//     resolve("Datos obtenidos exitosamente.");
//     }
//     }, 1000); // Simulamos un retraso de 1 segundo
//     });
//     }

//     obtenerDatosDeAPI()
// .then(datos => {
// // Se ejecuta si la promesa se resuelve exitosamente
// console.log(datos);
// })
// .catch(error => {
// // Se ejecuta si la promesa se rechaza
// console.error(error);
// })
// .finally(() => {
// // Se ejecuta independientemente del resultado anterior
// console.log("Operación completada.");
// });

const options = {method: 'GET', headers: {accept: 'application/json'}};
fetch('https://rickandmortyapi.com/api/character', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error('err'));

const container = document.getElementById('personajes');
const pedirDatos = () => {
fetch('https://rickandmortyapi.com/api/character', options)
.then(response => response.json())
.then(response => {
response.results.map((personaje) => {
    const article = document.createElement('article');
    article.setAttribute('class', 'character');
    article.innerHTML = `
    <img src="${personaje.image}" alt="${personaje.name}">
    <h2>${personaje.name}</h2>
    <div>
    <p>${personaje.species}</p>
    </div>`;
container.appendChild(article);
});
})
.catch(err => console.error(err));
    }


pedirDatos();
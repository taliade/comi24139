//setTimeout();

// setTimeout(() => {
    
// }, timeout);

// console.log('Inicio');
// setTimeout(() => {
//     console.log('Ejecutar un setTimeout , esto se va hacer ejecutar una sola vez');
// }, 5000);


function mostrarMensaje() {
    document.getElementById('mensaje').innerHTML = '¡Gracias por visitar mi sitio web!';
  }

  setTimeout(mostrarMensaje, 10000); // Espera 5 segundos antes de mostrar el mensaje

// //////////////
 let evento;

function saludar() {
  console.log("Hola Mundo");
  
}

function iniciarSaludo() {
  evento = setTimeout(saludar, 2000);
}

///La función clearTimeout se utiliza para cancelar la ejecución de 
// un temporizador creado previamente con setTimeout. Proporciona una forma de detener 
// la ejecución de una función programada para que se ejecute en el futuro antes de 
// que se cumpla el tiempo establecido.

// function cancelarSaludo() {
//   clearTimeout(evento);

// }



//SETINTERVAL();
setInterval(() => {
    
}, interval);

setInterval(() => {
    console.warn("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
    
}, 3000);

// ////SEt timeout
let temporizador =setInterval(() => {
   console.log(new Date().toLocaleDateString()); 
},3000);

clearTimeout(temporizador); 
console.log('Despues del cleaTimeout');



// /// ejemplo para trabajar con dom  generando un reloj 
let temporizador = setInterval(() => {
    console.log(new Date().toLocaleDateString()); 
 },1000 );
 
clearInterval(temporizador);
 console.log('Despues del cleaTimeout');

////////////////

///Contador  setInternval 
let contador = 0;
let intervalId;

 function actualizarContador() {
    contador++;
   document.getElementById('contador').innerHTML = 'Contador: ' + contador;
 }

 intervalId = setInterval(actualizarContador, 1000); // Actualiza el contador cada segundo

 function detenerContador() {
  clearInterval(intervalId);
 }

 function reiniciarContador() {
  contador = 0;
   document.getElementById('contador').innerHTML = 'Contador: ' + contador;
     clearInterval(intervalId);
   intervalId = setInterval(actualizarContador, 1000);
  }


// //Promesas  

function mostrarMensaje(mensaje) {
    document.getElementById('mensajePromesa').innerHTML = mensaje;
  }

  function obtenerNumeroAleatorio() {
    return new Promise((resolve, reject) => {
      const numero = Math.floor(Math.random() * 10) + 1;
      setTimeout(() => {
        if (numero > 5) {
          resolve(numero);
        } else {
          reject('El número es menor o igual a 5');
        }
      }, 2000);
    });
  }

  obtenerNumeroAleatorio( 9)

     .then(numero => {
       mostrarMensaje(`El número aleatorio generado es ${numero}`);
     })
    .catch(error => {
       mostrarMensaje(`Error: ${error}`);
     })
//     //  .finally(() => {
//     //     mostrarMensaje('La promesa se ha completado');
//     //    });

//       console.log(obtenerNumeroAleatorio);



// // //Asinc Wait 

function mostrarMensaje(mensaje) {
    document.getElementById('versionMejorada').innerHTML = mensaje;
  }

  function obtenerDatosDeUsuario(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuarios = [
          { id: 1, nombre: 'Juan', correo: 'juan@mail.com' },
          { id: 2, nombre: 'María', correo: 'maria@mail.com' },
          { id: 3, nombre: 'Pedro', correo: 'pedro@mail.com' }
        ];
        const usuario = usuarios.find(u => u.id === id);
        if (usuario) {
          resolve(usuario);
        } else {
          reject('No se encontró ningún usuario con el ID proporcionado');
        }
      }, 2000);
    });
  }




  async function mostrarDatosDeUsuario(id) {
    try {
      const usuario = await obtenerDatosDeUsuario(id);
      mostrarMensaje(`Nombre: ${usuario.nombre}, Correo: ${usuario.correo}`);
    } catch (error) {
      mostrarMensaje(`Error: ${error}`);
    }
        finally { 
        console.log("El proceso a finalizado!");
   }
  }

  mostrarDatosDeUsuario(11);

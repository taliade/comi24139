// var nume = 10; //Number
// var numero = '10'; // strip 

// console.log(nume == numero) // true 


// /// Extrictamente iguales 
// console.log(nume === numero) //ni permite diferentes tipo de datos y diferente dato 

//     let num1 = 10;
//     let num2 = '5';
//     let numero2 = 60
//     let suma = num1 + num2 + numero2;
//     let resta = num1 - numero2;
//     let multiplicacion = num1 * num2;
//     let division = num1 / num2;

//     console.log(suma) //pega los datos tal cual los encuentra 10 y 5  105  no hace la operacion aritmetica suma  
// console.log(resta)

// let edad = 5;
// let edadMinima = 18;

// let esMayorDeEdad = edad >= edadMinima;

// console.log("¿Es mayor de edad?", esMayorDeEdad); // Resultado: true

// let contadora = 5;
// contadora++; // Incremento en 1
// console.log(contadora); // Resultado: 6


// let contador = 10;
// contador--; // Decremento en 1
// console.log(contador); // Resultado: 9
// contador--;
// console.log(contador); 

 let numero = 7;
 let resultado = numero++ + 5; // Incremento después de la operación
console.log(numero); // Resultado: 8 (el valor de 'numero' se incrementa después de la operación)
console.log(resultado); // Resultado: 12 (7 + 5)

 let otroNumero = 10;
 let otroResultado = --otroNumero + 5; // Decremento antes de la operación
console.log(otroNumero); // Resultado: 9 (el valor de 'otroNumero' se decrementa antes de la operación)
 console.log(otroResultado); // Resultado: 14 (9 + 5)


 let temperatura = parseInt (prompt('Ingrese la temperatura actual - ingrese un dato numerico'));

    if (temperatura > 30) {
      console.log("Hace calor");
      //Sino si 
    } else if (temperatura <= 30 && temperatura >= 20) {
      console.log("El clima es agradable");
    } else  {//sino  queda como resto   
      console.log("Hace frío");
    }


    let diaDeLaSemana = 1;
    let nombreDia;
    
    switch (diaDeLaSemana) {
      case 1:
        nombreDia = "Lunes";
        break;
      case 2:
        nombreDia = "Martes";
        break;
      case 3:
        nombreDia = "Miércoles";
        break;
      case 4:
        nombreDia = "Jueves";
        break;
      case 5:
        nombreDia = "Viernes";
        break;
      case 6:
        nombreDia = "Sábado";
        break;
      case 7:
        nombreDia = "Domingo";
        break;
      default:
        nombreDia = "Día no válido";
        break;
    }
    
    console.log("Hoy es", nombreDia);


    var color = prompt( "Ingrese el color del auto   - Rojo o  Verde ");

    if (color == "Rojo" || color == "ROJO" || color == "Verde"){ 
        console.log("El auto pertene a la categoria A");
    }else {
        console.log("El auto pertece a la categoria B");
    }

    /// color.toUpprCase()
    /// color.totoLowerCase()


    let contador = 0;
    
    while (contador <= 5) {
      console.log("Iteración #" + (contador + 1));
      contador++;
    }

console.log('Holaa');
    for (let i = 0; i < 5; i++) {
        console.log("Iteración #", i);
      }
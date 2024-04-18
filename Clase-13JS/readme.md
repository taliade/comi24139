
  ## operadoresAritmeticos 
 
     let num1 = 10;
    let num2 = 5;
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    console.log("Suma:", suma); // Resultado: 15
    console.log("Resta:", resta); // Resultado: 5
    console.log("Multiplicación:", multiplicacion); // Resultado: 50
    console.log("División:", division); // Resultado: 2
  
## Entradas y salidas de datos
prompt(): despliega un mensaje en la ventana del navegador con una casilla para ingresar un valor. El valor ingresado será tomado como un string.
alert(): despliega un mensaje en la ventana del navegador con el texto que reciba por parámetro.
console.log(): envía lo que recibe por parámetro a la consola del navegador.  


     
    



  // Operadores Relacionales
  ### operadores Relacionales
   ``` 
    let edad = 25;
    let edadMinima = 18;

    let esMayorDeEdad = edad >= edadMinima;

    console.log("¿Es mayor de edad?", esMayorDeEdad); // Resultado: true
   ```
### INCREMENTO Y DECREMENTO
```
    let contador = 5;
contador++; // Incremento en 1
console.log(contador); // Resultado: 6


let contador = 10;
contador--; // Decremento en 1
console.log(contador); // Resultado: 9


let numero = 7;
let resultado = numero++ + 5; // Incremento después de la operación
console.log(numero); // Resultado: 8 (el valor de 'numero' se incrementa después de la operación)
console.log(resultado); // Resultado: 12 (7 + 5)

let otroNumero = 10;
let otroResultado = --otroNumero + 5; // Decremento antes de la operación
console.log(otroNumero); // Resultado: 9 (el valor de 'otroNumero' se decrementa antes de la operación)
console.log(otroResultado); // Resultado: 14 (9 + 5)
```


  // Operadores Lógicos
  ## operadores Logicos
   ```
    let tienePermiso = true;
    let tieneEdadSuficiente = false;

    let puedeConducir = tienePermiso && tieneEdadSuficiente;

    console.log("¿Puede conducir?", puedeConducir); // Resultado: false
   ```

  // Operadores Relacionales
  ### operadores Relacionales
   ``` 
    let edad = 25;
    let edadMinima = 18;

    let esMayorDeEdad = edad >= edadMinima;

    console.log("¿Es mayor de edad?", esMayorDeEdad); // Resultado: true
   ```
### INCREMENTO Y DECREMENTO
```
    let contador = 5;
    contador++; // Incremento en 1
    console.log(contador); // Resultado: 6
    
    
    let contador = 10;
    contador--; // Decremento en 1
    console.log(contador); // Resultado: 9
    
    
    let numero = 7;
    let resultado = numero++ + 5; // Incremento después de la operación
    console.log(numero); // Resultado: 8 (el valor de 'numero' se incrementa después de la operación)
    console.log(resultado); // Resultado: 12 (7 + 5)
    
    let otroNumero = 10;
    let otroResultado = --otroNumero + 5; // Decremento antes de la operación
    console.log(otroNumero); // Resultado: 9 (el valor de 'otroNumero' se decrementa antes de la operación)
    console.log(otroResultado); // Resultado: 14 (9 + 5)
```


  // Operadores Lógicos
  ## operadores Logicos
   ```
    let tienePermiso = true;
    let tieneEdadSuficiente = false;

    let puedeConducir = tienePermiso && tieneEdadSuficiente;

    console.log("¿Puede conducir?", puedeConducir); // Resultado: false
   ```

  // Condicionales
  ## condicionales IF  - ElSE IF - ELSE

   ```
    let temperatura = 25;

    if (temperatura > 30) {
      console.log("Hace calor");
    } else if (temperatura <= 30 && temperatura >= 20) {
      console.log("El clima es agradable");
    } else {
      console.log("Hace frío");
    }
   ```

Comentar lo seleccionado CTRL + C+ k 
descomentar  CTRL + C + U 

### Switch

```
    let diaDeLaSemana = 2;
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
    }
    
    console.log("Hoy es " + nombreDia);
```
### Operadores terneadrios
 ```
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Resultado: "Eres mayor de edad"
 ```
### operador de Logica

 ```

let tienePermiso = true;
let tieneEdadSuficiente = true;

if (tienePermiso && tieneEdadSuficiente) {
  console.log("Puede conducir");
} else {
  console.log("No puede conducir");
}
 ```





  // Bucles (Ejemplo de bucle for)
 ## BUCLE  FOR
  ```
    for (let i = 0; i < 5; i++) {
      console.log("Iteración #" + (i + 1));
    }
  
 ```
//While 
## BUCLE WHILE 
 ```
    let contador = 0;
    
    while (contador < 5) {
      console.log("Iteración #" + (contador + 1));
      contador++;
    }
 ```

<p> 
El bucle while imprimirá "Iteración #1" hasta "Iteración #5" porque la condición contador < 5 es verdadera en cada iteración. A medida que aumentamos el contador, eventualmente la condición será falsa y el bucle se detendrá. ** Importante si la condicion es verdadera sigue el bucle
</p>

## BUCLE DO WHILE <
//ejemplo 
 ```
    let contador = 0;
    
    do {
      console.log("Iteración #" + (contador + 1));
      contador++;
    } while (contador < 5);
 ```
<p> El bucle do...while es similar al while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición. </p>

### Diferencias 
<p>Ambos bucles son útiles en diferentes situaciones. El while se usa cuando no estás seguro de si la condición será verdadera desde el principio, mientras que el do...while se utiliza cuando deseas asegurarte de que el bloque de código se ejecute al menos una vez antes de verificar la condición.</p>

 ```

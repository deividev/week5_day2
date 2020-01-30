

//#### Dates######



//1. **Ejercicio** Realiza un script que escriba en el documento la fecha y hora actual


const date = new Date();



/*1. **Ejercicio** Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos.
Para pedir los datos se puede utilizar la forma `var nombre = prompt("Introduce el Nombre:");` que
guardará en `nombre` el nombre sacando por pantalla una ventana donde introducirlos.*/


var nombre = prompt("Introduce el Nombre:")
const dateNombre = new Date();
dateNombre.getUTCMilliseconds();
console.log(dateNombre);

var apellido = prompt("Introduce el Apellido:")
const dateApellido = new Date();
dateApellido.getUTCMilliseconds();
console.log(dateApellido);

const diferenceTime = dateApellido.setTime( dateApellido.getTime() - dateNombre.setTime(dateNombre.getTime() ));

console.log(diferenceTime + ' ' + 'segundos');

//1. **Ejercicio** Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 
//2(jueves), ...

/*var año = prompt("Introduce el Nombre:")
var mes = prompt("Introduce el Nombre:")*/

//const date = new Date(2018, 07, 31);

//getDate(): Devuelve el día del mes (1- 31)


//1. **Ejercicio** Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días.

const datePlus = new Date(05/02/1985);
console.log(datePlus);

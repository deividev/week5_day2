


//Construir mediante []:
//* **Ejercicio** Crea un array de 3 enteros
 const enteros = [5, 12, 15];
//* **Ejercicio** Crea un array de 3 strings
 const string = ['hola', 'señores', 'que tal'];
//* **Ejercicio** Crea un array con 2 enteros y un string 
 const mezcla = [2 ,7, 'Hello'];
//* Construir mediante new:
//* **Ejercicio** Crea un array de 3 enteros
const enteros2 = new Array(1, 2, 3); // segunda forma
//* **Ejercicio** Crea un array de 3 strings
const newstring = new Array('Hello', 'my', 'friend');
//* **Ejercicio** Crea un array con 2 enteros y un string
const mixture = new Array(2, 7, 'friend');
//* **Ejercicio** ¿ Qué diferencia hay entre `let e = [3]` y `let f = new Array(3)` ?
//*****  La forma de declarar el array pero seria lo mismo */

//1. **Ejercicio** Transformar el array de números 
//     multiplicando por 5 **( map )**
  const numberArrays = [1, 2, 3, 4, 5];
  const numbers = [1, 5, 10, 15];
  let xfive = numbers.map(function(elemen) {
      
   return  elemen *5 ;
   
});
console.log(xfive);
    

//1. **Ejercicio** Buscar el primer elemento mayor que 4 en el siguiente array


const found = numberArrays.find(element => element > 4);
console.log(found);

//1. **Ejercicio** Buscar el primer elemento que empieze por eva en el array 

const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];

miArray.forEach(element => element );




//1. **Ejercicio** Hacer el sumatorio de un array numérico **( reduce )**:

const miArray2 = ['pepe', 2, 'evaristo', 4, 'eva'];

const suma = miArray2.reduce((acc,elemen) => {

    if (typeof elemen === 'number'){
        return acc + elemen;
    }
    return acc + elemen;
}, 0);
console.log(suma);

// Filter

const result = miArray2.filter(elemen => typeof elemen === 'number');

console.log(result);


//1. **Ejercicio** Contar el numero de elementos que son string en el siguiente array **(reduce)**:

const searchString = ['pepe', 2, 'evaristo', 4, 'eva'];

console.log(
 miArray2.reduce((acc,elemen) =>  typeof elemen === 'string' ? acc + 1 : acc, 0)
    
);



//1. **Ejercicio** Modificar array usando **push**.
const arrayModifi = ['Manzanas', 'Peras', 'Castañas'];  //  ['Manzanas', 'Peras', 'Castañas', 'Nueces']` 
arrayModifi.push('nueces');
console.log(arrayModifi);


//1. **Ejercicio** Modificar array usando **concat**.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];  //['Manzanas', 'Peras', 'Castañas', 'Nueces']
const nuevoArray = arrayOriginal.concat(['nueces']);
console.log(nuevoArray);

//1. **Ejercicio** Modificar array usando **splice**.


const modifiArray = ['Manzanas', 'Peras', 'Castañas']; //a ['Manzanas', 'Peras', 'Nueces']

modifiArray.splice(2, 1,  'Nueces');

console.log(modifiArray); 

//2. **Ejercicio** Añadir elemento a un array usando **splice**

const addArray = ['Manzanas', 'Peras', 'Castañas']; //  a['Manzanas', 'Peras', 'Castañas', 'Nueces']` .
   
addArray.splice(3, 1,  'Nueces');

console.log(addArray); 

//### Set ###//

//1. **Ejercicio** Contruye un conjunto con tres frutas: Pera, Manzana y Naranja

const Fruits = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(Fruits);


//1. **Ejercicio** Comprueba si Naranja esta dentro del conjunto que has creado antes.

console.log(Fruits.has('Naranja'));
 

//1. **Ejercicio** Comprueba la longitud del conjunto.

console.log(Fruits.size);


//1. **Ejercicio** Añade una Granada al conjunto.

console.log(Fruits.add('Granada'));


//1. **Ejercicio** Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados.




//1. **Ejercicio** Borra la manzana.

Fruits.delete('Manzana');
console.log(Fruits);


// ***** Map *****//

//1. **Ejercicio** Contruye una guia telefonica con los compañeros de clase. Toma como clave el
//numero de teléfono y como valor el nombre del compañero.

let mapclass = new Map([['608484371', 'david'], ['647478513', 'edison' ],
['647478515', 'hugo'], ['647478512', 'maria'], ['647478511', 'claudia']]);


console.log(mapclass);


//1. **Ejercicio** Crea una función que compruebe que un número está dentro de la guía.

console.log(mapclass.has('608484371'));

//1. **Ejercicio** Crea una función que dado un nombre compruebe que la guia contiene algún 
//nombre que contenga el nombre pasado por parámetro.

function logMapElements(value, key, mapclass) {
    let name = 'david';

    console.log(name === mapclass);
}
mapclass.forEach(logMapElements);
// logs:
// "m[foo] = 3"
// "m[bar] = [object Object]"
// "m[baz] = undefined"

/*let name =  prompt('Buscar nombre en la agenda');


 forEach(mapclass.has(name));
console.log(verification);*/



//1. **Ejercicio** Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

mapclass.set([['608484372', '']]);
console.log(mapclass);
//Que se crea el nuevo compañero pero con el numero de telefono(Array1) y el valor undefined


//1. **Ejercio** Crea un array ordenado por nombre con valores { nombre, telefono } a partir de la guía.

/*function clear(params) {
    
}*/






// ***** Lodash *****//

//1. **Ejercicio** Dado los siguientes arrays:

/*const array1 = [1,3,5,7,9,10]
const array2 = [2,3,4,7,8,10]
const arra3 =_ . intersección ([ array1 ] ,  [ array2 ]);
console.log(array3);*/


//consigue un array intersección con valores únicos utilizando lodash.
//1. **Ejercicio**  Dado los siguientes arrays:



//const array1 = [1,3,5,7,9,10]
//const array2 = [2,3,4,7,8,10]
//```
//Devuelve el sumatorio  de los elementos pares.
//
//1. **Ejercicio** Dado los objetos 
//```
//const obj1 = {
//    prop1: 'value1',
//    prop2: 10,
//    prop3: 'value'
//}
//const obj2 = {
//    prop1: {
//        innerprop1: 'hola'
//    },
//}
//```
//Devuelve un objeto que sean ambos mezclados de la forma que obj2 prevalezca sobre obj1.
//
//1. **Ejercicio** ¿qué diferencia hay en _.merge y _.assign, dado _ como el objeto que representa lodash.
//
//1. **Ejercicio** Dado el array `[2,5,8,10,24]` calcula su media con lodash.
//
//1. **Ejercicio** Dado el objeto
//```
//const obj1 = {
//    prop1: 'value1',
//    prop2: 10,
//    prop3: 'value'
//}
//```
//Devuelve los valores de sus propiedades en un array.
//
//1. **Ejercicio** Dado el objeto
// ```
// const obj1 = {
//     prop1: 'value1',
//     prop2: 10,
//     prop3: 'value'
// }
//```
//Crea un nuevo objeto con solo las propiedades que tengan valores string.
//
//1. **Ejercicio** Dado el siguiente array `[[1,2,[4,5],[5,7]], [1,3,4,5]]` consigue un array aplanado.
//Es decir de la forma `[1,2,4,5,5,7,1,3,4,5]`
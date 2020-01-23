


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
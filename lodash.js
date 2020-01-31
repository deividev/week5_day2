

// #######  Lodash  ########//
const _ = window._;
console.log('lodash version', _.VERSION);



//1. **Ejercicio** Dado los siguientes arrays:


//  INTERSECCION 
const array1 = [1,3,5,7,9,10]
const array2 = [2,3,4,7,8,10]

array1.forEach(value1 =>{
    array2.forEach(value2 =>{
          
    })
})


const resLodash = _.intersection((array1, array2));

console.log(resLodash);






//consigue un array intersección con valores únicos utilizando lodash.
//1. **Ejercicio**  Dado los siguientes arrays:

//Devuelve el sumatorio  de los elementos pares.

let pairs1 = [1,3,5,7,9,10]
let pairs2 = [2,3,4,7,8,10]

 
 let intersectionPairs= _.intersection((pairs1), (pairs2));

console.log(intersectionPairs);





//1. **Ejercicio** Dado los objetos 
//```
const obj1 = {
    prop1: 'value1',
    prop2: 10,
    prop3: 'value'
}
const obj2 = {
   prop1: {
        innerprop1: 'hola'
    },
}
//Devuelve un objeto que sean ambos mezclados de la forma que obj2 prevalezca sobre obj1.

const objMerge =_.merge(obj1, obj2);
console.log(objMerge);

 const objAssign =_.assign({ }, obj1, obj2);
console.log(objAssign);


//1. **Ejercicio** ¿qué diferencia hay en _.merge y _.assign, dado _ como el objeto que representa lodash.





//1. **Ejercicio** Dado el array `[2,5,8,10,24]` calcula su media con lodash.


const media = _.mean([2,5,8,10,24]);
console.log(media);


//1. **Ejercicio** Dado el objeto
//```
const objArray = {
   prop1: 'value1',
   prop2: 10,
    prop3: 'value'
}

//Devuelve los valores de sus propiedades en un array.

console.log("Los valores del objeto:",_.values(objArray));



//1. **Ejercicio** Dado el objeto
// ```
 const objString = {
   prop1: 'value1',
   prop2: 10,
   prop3: 'value'
}

//Crea un nuevo objeto con solo las propiedades que tengan valores string.

console.log( _ . isString ( objString ));


//1. **Ejercicio** Dado el siguiente array `[[1,2,[4,5],[5,7]], [1,3,4,5]]` consigue un array aplanado.
//Es decir de la forma `[1,2,4,5,5,7,1,3,4,5]`


const arrayPlane = [[1,2,[4,5],[5,7]], [1,3,4,5]];
console.log(_.flattenDeep(arrayPlane));
// #####  Map  ######//

//1. **Ejercicio** Contruye una guia telefonica con los compañeros de clase. Toma como clave el
//numero de teléfono y como valor el nombre del compañero.

let mapclass = new Map([['608484371', 'david'], ['647478513', 'edison' ],
['647478515', 'hugo'], ['647478512', 'maria'], ['647478511', 'claudia']]);


console.log(mapclass);


//1. **Ejercicio** Crea una función que compruebe que un número está dentro de la guía.

function comprobacion(resultado) {
    console.log(mapclass.has('608484371'));
}
comprobacion();




//1. **Ejercicio** Crea una función que dado un nombre compruebe que la guia contiene algún 
//nombre que contenga el nombre pasado por parámetro.

let name = 'maria';



function search (name, map) {
    debugger
    let entry = map.entries();
    let it = entry.next();
    while (!it.done) {
        if (it.value[1] === name) {
            return it.value[0];
        }
        it = entry.next();
    }
    return null;
}

function search2 (name, map) {
    debugger
    for([key, value] of map.entries()) {
        if (value === name) {
            return key;
        }
    }
    return null;
}
console.log("search", search(name ,mapclass));
console.log("search2", search2(name ,mapclass));
//1. **Ejercicio** Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

mapclass.set([['608484372', '']]);
console.log(mapclass);
//Que se crea el nuevo compañero pero con el numero de telefono(Array1) y el valor undefined


//1. **Ejercio** Crea un array ordenado por nombre con valores { nombre, telefono } a partir de la guía.

let mapclassOrden = 
    { "david": "608484371", 
    'edison': '647478513'  ,
    'hugo': '647478515',
    'maria': '647478512' ,
    'claudia': '647478511' };


console.log(mapclassOrden);
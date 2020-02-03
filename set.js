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

ordenados
const miConjunto2 = new Set([]);
miConjunto2.add('manzanas');
miConjunto2.add('peras');
miConjunto2.add('limones');
miConjunto2.add('castanas');
console.log(miConjunto2.entries())
const miArray3 = Array.from(miConjunto2)
console.log('Mi array ordenado', miArray3.sort((a, b) => {
  /*if (a.length > b.length) {
    return 1;
  }
  if (a.length < b.length) {
    return -1;
  }
  return 0;*/
  return (a.length > b.length) ? 1 : ((a.length < b.length) ? -1 : 0)
}))


//1. **Ejercicio** Borra la manzana.

Fruits.delete('Manzana');
console.log(Fruits);

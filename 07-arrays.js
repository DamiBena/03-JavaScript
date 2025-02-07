let myArray = ["rojo", "verde","azul"];

console.log(myArray);

let arrayMixto = [9, "hola mundo",false, NaN, undefined];

console.log(arrayMixto);

let emptyArray = [];

console.log(emptyArray);

let myNewArray = [];
for ( let i = 0; i<10; i++){
    myNewArray[i] = i + 1 ;
}

console.log(myNewArray)

let array1 = ['a','b','c'];

let array2 = ['d','e','f'];

let array3 = array1.concat(array2);
console.log(array3);

let arrayJoin = new Array("Hola", "Mi nombre", "es", "Damaris");
let mystring = arrayJoin.join("");
console.log(mystring);

//El pop toma el ultimo elemento del array y quitarlo
let arr1 = [1,2,3,4,5,6,7,8,9];
let strinPop = arr1.pop()
console.log(strinPop);
console.log(arr1);

array2.reverse();
console.log(array2);

let arr2 = [5,2,3,4,1,6,7,8,9];
console.log(arr2)

//ordenar un array
arr2.sort();
console.log(arr2);


/*let arraylist= ["Juan","MAria,"Lucas", "Ester", "Raul"];

arraynombres.sort(arraynombres);

console.log(arraynombres);*/

//Eliminar el primer elemento del array


arr2.shift();
console.log(arr2);

//saber el indice de un elemnto

console.log(arr2.indexof7);

let position = arr2.indexof(7);
arr2.splice(position,2);
console.log(arr2);

arr2.splice(0,0,1)
console.log(arr2);

const months = ['Jan', 'March', 'April', 'June','June'];
let (months)

//cortar elementos de un array1

const animals = ['ant', 'bison', 'camel', 'duck',];

console.log(animals.slice (2));
console.log(animals.slice (2,4));




//Include en E7

let numbers = [1, 2, 3, 4, 8, 7];

if(numbers.includes(7)) {
    console.log('Si hay un valor 7');
} else {
    console.log('No hay un valor 7');
}


const array = [1, 2, 3, 4, 6, 5];
//array.includes(valor a buscar, indice del array)
console.log(array.includes(3,2)) //true
console.log(array.includes(5,6)) // false
//Si el indice el mayor mayor o igual a la longitud del array retornara false


//Elevar a una potencia un número usando **
let base = 4;
let exponent = 3;

let result = base ** exponent;
console.log(result);
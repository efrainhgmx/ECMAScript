let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));


let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = '    Hello     World';

console.log(hello);
console.log(hello.trimStart());


let saludo = ' Hola Mundo     ';

console.log(saludo);
console.log(saludo.trimEnd());

//Convierte un arreglo de 2 elementos a un objeto
let entries = [["name", "efra"], ["age", 32] ];
console.log(Object.fromEntries(entries));

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
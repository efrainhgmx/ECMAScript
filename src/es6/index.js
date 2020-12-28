//Definición de una Función antes E6 en JS
function newFunction(name, age, country) {
    var name = name || 'Efrain';
    var age = age || 25;
    var country = country ||'Mexico';
}


// Misma funcion pero en ECMASCRIPT 6

function newFunction2(name = 'Efrain', age = 25, country = 'Mexico') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', 52, 'Colombia');

//Template literals ``

//Antes de E6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;

//Con E6
let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase);
console.log(epicPhrase2);

//CLASE 2 SPREAD OPERATOR, LET Y CONST Y MULTILINEA

/*  EJERCICIO 1 */
//Antes de E6
let lorem = "Esta es una frase antes de E6 \n"
+ "Este es otro complemento de la frase anterior";

//Con E6
let lorem2 = `Esta es una frase mejor estructurada
que la anterior`;

console.log(lorem);
console.log(lorem2);

/* EJERCICIO 2 */


let person = {
    'name': 'efra',
    'age' : 25,
    'country': 'MX'
}
//Antes E6
console.log(person.name, person.age, person.country);

//Con E6
let { name, age , country } = person;
console.log(name, age, country);


/* EJERCICIO 3 */

let team1 = ['Oscar', 'Brenda', 'Daniela'];
let team2 = ['Valeria', 'Fernando', 'Camila'];
//Spread operator permite añadir todo el equipo 1 y 2 al nuevo equipo education
//al que pertenece david.
let education = ['David', ...team1, ...team2];
console.log(education);

//CLASE 3 ARROW FUNCTIONS, PROMESAS Y PARAMETROS PARA OBJETOS

/* EJERCICIO 1 */
let name = 'Efrain';
let age = 22;

obj = { name: name, age: age};
//E6
obj2 = { name, age };
console.log(obj);
console.log(obj2);

/* EJERCICIO 2 ARROW Functions */

const names = [
    { name: 'efra', age: 25 },
    { name: 'Jess', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})
//E6
let listOfNames2 = names.map(item => console.log(item.name));

/* EJERCICIO 3 PROMESAS */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!')
        } else {
            reject('UPS Algo salio mal!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


/* EJERCICIO 4 */
let numberX = 10;

const myPromise = () => {
    return new Promise((resolve, reject) => {
        if(numberX == 10) {
            resolve('The number is ten');
        } else {
            reject('Eror in the numberX');
        }
    })
}

myPromise()
    .then(response => console.log('Its OK: ' + response))
    .catch(error => console.log('Error type: ' + error));


/* EJERCICIO 5 */
let usuarios = [{
    id: 2,
    user: 'Dario'
},
{
    id: 3,
    user: 'Nadia'
}];

let telefonos = [{
    id: 2,
    number : 123456
},
{
    id: 3,
    number: 2585259
}];

const obtenterUsario = id => {
    return new Promise((resolve, reject) => {
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe');
            resolve(obtenterTelefono(id));
        } else {
            reject('El usuario no exitse con ese ID');
        }
    })
};

const obtenterTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)) {
            resolve('El número existe');
        } else {
            reject('El usuario no existe!');
        }
    })
}

obtenterUsario(2)
    .then(respuesta => respuesta)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));

//CLASE 4, CLASES, MÓDULOS Y GENERADORES

/* EJERCICIO 1 CLASES */
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

/* EJERCICIO 2 MODULOS module.js */
import { hello } from './module';

hello();


/* EJERCICIO 3 GENERADORES */
function* helloWorld() {
    if(true) {
        yield 'Hello,  ';
    }
    if(true) {
        yield 'World, ';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
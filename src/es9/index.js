const obj = {
    name: 'efra',
    age: 25,
    country: 'MX'
};

let { country, ...all } = obj;
console.log(all);

const obj = {
    name: 'oscar',
    age: 32
}

const obj2 = {
    ...obj,
    country: 'COL'
}

console.log(obj2);

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    })
    
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalzo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);
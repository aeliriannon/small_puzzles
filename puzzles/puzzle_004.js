// Выведите "Да"" если стрка полиндром и "Нет", если строка не является полиндромом. 

const string = 'Шалаш';

// v1

// const reversString = string.toLowerCase().split().reverse().join();

// if(string.toLowerCase() === reversString) {
//     console.log('Это полиндром');
// } else {
//     console.log('Это не полиндром');
// }

// v2

let state = false;

for (let i = 0; i <= Math.floor(string.length / 2); i++) {
    if (string.toLocaleLowerCase()[i] !== string[(string.length - 1) - i]) {
        state = false;
        break;
    } else {
        state = true;
    }
}

console.log(state ? 'Полиндром' : 'Не полиндром');




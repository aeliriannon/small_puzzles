const someNumber = 5;

function factorial(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num)) {
        return "Ошибка, проверьте данные";
    }
    return num ? num * factorial(num - 1) : 1;
}

console.log(factorial(someNumber));

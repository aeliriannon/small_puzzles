const sumStr = 'I love you';

function getReversString(str) {
    if(str.length === 0) {
        return 'Ошибка!';
    }
    return str.split(' ').reverse().map(i => i.split('').reverse().join('')).join(' ');
}

console.log(getReversString(sumStr));
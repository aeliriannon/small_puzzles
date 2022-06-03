//При заданном целом числе n посчитайте n + nn + nnn

let num = 84;

function sumRepeat(num, repeat) {
    let sum = null;
    for(let i = 1; i <= repeat; i++) {
        sum += num*i;
    }
    return sum;
}

console.log(sumRepeat(num, 3));
function getMaxNumber() {
    const array = [...arguments];
    if(array.length < 4) {
        return 'Введите 4 аргумента'
    }
    let max = array[0];
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) !== 'number') {
            return 0;
        } else if(max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

console.log(getMaxNumber(1, 35,  0, 8))

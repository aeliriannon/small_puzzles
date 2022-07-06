let number = 860;

function getTime(num) {
    if(typeof(num) !== 'number' || !Number.isInteger(num) || num <0) {
        return 'При вычислении произошла ошибка';        
    }
    let minute = num%60;
    let hour = Math.floor(num/60);

    if(hour === 1 || hour === 21) {
        return `${hour} час ${minute} минут`
    } else if(hour < 5 && hour > 1 || hour > 21 && hour < 25) {
        return `${hour} часа ${minute} минут`
    } else if(hour > 4 || hour < 21) {
        return `${hour} часов ${minute} минут`
    }
}

console.log(getTime(number));
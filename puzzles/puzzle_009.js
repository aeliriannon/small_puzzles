const numberPlace = 27;

function getNumberCoupe(place) {
    if(typeof(place) !== 'number' || !Number.isInteger(place)) {
        return 'Ошибка. Проверьте правильность введенного номера места';        
    } else if (place <= 0 || place > 36) {
        return 'Таких мест в вагоне нет';
    }

    return  Math.ceil(place/4);
}

console.log(getNumberCoupe(numberPlace))
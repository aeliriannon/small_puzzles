const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(array, missingCurr) {
    if (array.length <= 0) {
        return 'Нет доступных валют!';
    } else {
        let result = 'Доступные валюты:'
        array.filter(item => {
            return item !== missingCurr;
        }).forEach(i => {
            result += `\n ${i}`;
        })
        return result; 
    }
    
}


console.log(availableCurr(allCurrencies, 'USD'));
/*написать функцию, коорая возвращет сумму только положительных значений из каждого объекта */

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: 1000},
    {amount: 500},
    {amount: 10400},
    {amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
    console.log(data, 'data')
    return data.map(item => item.amount).filter(item => item > 0).reduce((sum, current) => sum + current);
};

const getTotalIncomeAmount = (data) => {    
    if(data.some(i => i.amount < 0)) {
        return data.map(i => i.amount).reduce((sum, current) => sum + current);
    } else {
        return getPositiveIncomeAmount(data)
    }
}

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));

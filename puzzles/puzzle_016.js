/* В каждой книге есть n страниц с номерами страниц от 1 до n.
Написать функцию amountOfPages, аргумент которой summary 
составляется путем сложения количества цифр всех номеров страниц.
Эта функция возвращает число - количество страниц n в книге.*/

const summaryPages = 95;

function amountOfPages(summary) {
    for(let i=1; ; i++) {
        if(summary <= 0) {
            return numberOfPages = i-1;
        } else {
            let x = String(i).length
            summary -= x;
        }
        
    }
}

console.log(amountOfPages(summaryPages));

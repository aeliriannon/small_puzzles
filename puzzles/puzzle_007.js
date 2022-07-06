/* Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
 Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
 Функция должна возвращать строку или число, 
где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 
Если второй аргумент не является числом, 
равен или меньше нуля - то возвращать просто первый аргумент.*/

const num = 5,
      countCurrent = 5;
      res = '';

function getMathResult(base, count) {
    if(typeof count !== 'number' || count <= 0) {
        return res = base;
    }

    for(let i = 1; i <= countCurrent; i++) {
        let baseCurrent = (base*i);
        if(i === countCurrent) {
            res += baseCurrent;
        } else {
            res += (baseCurrent + '---')
        }        
    }

    return res;
}

getMathResult(num, countCurrent);

console.log(res);
// Напишите код для вычисления факториала числа

const num = 5;
  function fuctorial(x) {  
  	if(x === 0) {
     return 1;     
    }
    return x * fuctorial(x-1);
	}	
  
  console.log(fuctorial(num))

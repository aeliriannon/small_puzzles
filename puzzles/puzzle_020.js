//Напишите код для вычисления факториала числа

const num = 5;
  function fuctorial(a) {  
  	if(a === 0) {
     return 1;     
    }
    return a * fuctorial(a-1);
	}	
  
  console.log(fuctorial(num))
//Напишите код, чтобы получить целые числа в диапазоне (x, y).

var range = function(start, end) {
  if (end - start === 2)   { 
    return [start + 1]; 
  } else   { 
    var list = range(start, end - 1);
    list.push(end - 1); 
    return list; 
  }
};
  
console.log(range(10, 18));

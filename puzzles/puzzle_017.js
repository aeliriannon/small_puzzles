/*Напишите функцию isPanagram,
 которая принимает в себя строку и возвращает логическое занчение.
 Если строка является панаграммой - вернется true, если нет  - false. */

 const someString = 'The quick brown fox jumps over the lazy dog'

 function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
  }

console.log(isPangram(someString));

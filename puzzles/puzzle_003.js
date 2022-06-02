// Отсортируйте массив по значению в порядке возрастания и убывания.


const array = [19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56]; 


// v1
// let max = null;

// for(let i = 0; i < array.length; i++) {
//     for(let j = i+1; j < array.length; j++) {
//         if(array[i] > array[j]) {
//             max = array[i];
//             array[i] = array[j];
//             array[j] = max;
//         }
//     }
// }

// v2

array.sort((a, b) => a - b);





console.log(array);
console.log(array.reverse());


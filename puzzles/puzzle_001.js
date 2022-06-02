// Есть массив a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].
// Выведите все элементы, которые меньше 5.



const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// v1
console.log(array.filter(i => i < 5));

// v2
// array.forEach(i => {
//     if(i < 5) {
//         console.log(i);
//     }
// });

// v3
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 5) {
//         console.log(array[i]);
//     }
// }


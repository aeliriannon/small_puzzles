// Даны массивы:
// a = [ 8, 13, 21, 34, 55, 89];
// b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
// Нужно вернуть массив, который состоит из элементов, общих для этих двух массивов.

const a = [8, 13, 21, 34, 55, 89];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const arrayJoint = [];

// v1
// a.forEach(i => {
//     b.forEach(j => {
//         if(i === j) {
//             arrayJoint.push(i)
//         }
//     })
// });

// v2

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            arrayJoint.push(a[i])
        }
    }
}



console.log(arrayJoint);
// let c = 4;
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
 
// const addThree = addX(3);
 
// let d = addThree(c);
// let res = addThree(c);
 
// console.log(res)

////////////////////////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve('foo');
//   }, 1000);
//   setTimeout(() => {
//       reject('bar');
//   }, 900);
// });

// promise.then((value) => {
//   console.log(value);
// }).catch((e) => console.log(e))

/*Обратите внимание на то, что reject запускается быстрее, чем resolve. 
Это значит, что код из блока catch выполняется и на этом работа промиса окончена. 
А в консоль выводится как раз то сообщение, которое было передано в эту функцию. */


//////////////////////////////////////////////////////////////////////
// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function one() {
//     const promises = [a(), b(), c()];
//     const [outpu1, outpu2, outpu3] = await Promise.all(promises);
//     return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
// }
 
// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
 
// one().then(console.log);
// two().then(console.log);
// three().then(console.log);



// if (0) {
//   console.log('first')
// } else if (NaN) {
//   console.log('second');
// } else if (' ') {
//   console.log('third');
// } else if (null) {
//   console.log('fourth');
// }

let arr = [1, 2, 3, 4, 5];
let summmer = sum(arr);
console.log(summmer);

function sum(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }  
  return res;
}


console.log(9/0)

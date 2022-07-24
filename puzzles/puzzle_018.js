/*Напишите функцию, которя принимает массив фильмов и возвращает массив объектов с фильмами, 
у которых рейтинг выше 8 */
/*Напишите функцию, которая вернет названия всех фильмов в виде строки, через запятую */
/** Напишите новую функцию, которя возвращет тот же массив, 
 но у каждого поля будет новое свойство id */

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

const showGoodFilms = films.filter(i => i.rating > 8);
const showListOfFilm = films.map(i => i.name).reduce((sum, current) => `${sum}, ${current}`);
const setFilmsIds = films.map((i, key) => {
    i.id = key
    return i;
});
const checkFilms = setFilmsIds.every(i => i.id || i.id === 0);

console.log(showGoodFilms);
console.log(showListOfFilm);
console.log(setFilmsIds);
console.log(checkFilms);

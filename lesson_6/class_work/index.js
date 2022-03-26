// const user = {
//     name: 'Ivan',
//     age: 18,
//     goToUniversity: () => console.log('Иду в Универ! Хэхэй'),
    
// };

// user.goToUniversity


// const nameKey = "name"
// const user = {
//     [nameKey]: 'Ivan',
//     age: 18,
// };

// const myFavoriteFilm ={
//     filmTitle : "Груз 200",
//     releaseDates : "2007",
//     filmmaker : "Алексей Балабанов",
//     countryRelease : "Россия"
// }

// myFavoriteFilm.income = '592673$'

// delete myFavoriteFilm.releaseDates

// myFavoriteFilm.outputFilmTitle = () => console.log(myFavoriteFilm.filmTitle)

// console.log(myFavoriteFilm)

// const myNumber = 23e4;
// console.log(myNumber)

// const myString = "строка"

// 1
const randomNumber = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1)) + min
}

console.log(randomNumber(1, 10))

// 2 

// const myFunc = (str, pos) =>{
//     if (str[(pos-1)] ===  str[(pos-1)].toUpperCase()) console.log(true)
//     else console.log (false)
// }

// const myString = ("СТРОКА")
// myFunc(myString, 4)

// 3

// const myFunc = (str, find, replace) => {
//     str.indexOf(find)
// }


const resheto = (number) =>{
    let limit = Math.sqrt(number)
    const array = []
    const result = []
    for(let i = 2; i <= number; i++){
        array.push(true)
    }
    for(let i = 2; i <= limit; i++){
        if(array[i]){
            for(let a = i * i; a <= number; a+=i){
                array[a] = false
            }
        }
    }
    for (let i = 2; i < number; i++){
        if(array[i]){
            result.push(i)
        }
    }
    return result
}

console.log(resheto(77))
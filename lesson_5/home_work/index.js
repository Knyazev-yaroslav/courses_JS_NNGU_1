
// Напишите стрелочную функцию, которая будет возвращать
//  true если строка является палиндромом и false в противном случае.


// const myFunction = polindrom => {
//     let charValue = polindrom.length / 2
//     let firstHalf = "";
//     let secondHalf = "";
//     for (let i = 0; i < charValue; i++){
//         firstHalf += polindrom[i]
//     }
//     for (let a = (polindrom.length - 1); a >= (charValue - 1); a -= 1){
//         secondHalf += polindrom[a]
//     }
//     if (firstHalf === secondHalf) {
//         console.log('True')
//     } else console.log('False')
// }

// const myWord = "летелетел"

// myFunction(myWord)


// const myFunction = polindrom => {
//     if (!(typeof polindrom === "string")) {
//         return console.log("Это не слово")
//     }
//     let charValue = polindrom.length
//     let reversedWord = "";
//     for (let i = charValue - 1; i >= 0; i -= 1){
//         reversedWord += polindrom[i]
//     } 
//     polindrom === reversedWord ? console.log(true) : console.log(false)
// }

// const myWord = "серегаагерес"

// myFunction(myWord)

// const myFunction = polindrom => {
//     if (!(typeof polindrom === "string")) {
//         return console.log("Это не слово")
//     }
//     (polindrom === polindrom.split("").reverse().join("")) ? console.log(true):console.log(false)
// }
// const myWord = "серегаагерес"

// myFunction(myWord)



// 1

// let myFunc = (number) => console.log(number**2)

// myFunc(3)

//2 

// let myFunc = (a, b) => console.log(a + b)

// myFunc(10, 20)

// 3

// let myFunc = (a, b, c) => console.log((a-b)/c)

// myFunc(10, 6, 2)

// 4

// let myFunc = (dayNumber) => {
//     if(dayNumber >= 1 && dayNumber <= 7){
//         switch (dayNumber){
//             case 1:
//                 console.log('Понедельник')
//                 break
//             case 2:
//                 console.log('Вторник')
//                 break
//             case 3:
//                 console.log('Среда')
//                 break
//             case 4:
//                 console.log('Четверг')
//                 break
//             case 5:
//                 console.log('Пятница')
//                 break
//             case 6:
//                 console.log('Суббота')
//                 break
//             case 7:
//                 console.log('Воскресенье')
//                 break
//             default:
//                 console.log('Введите число от 1 до 7')
//                 break
//         }
//     } 
// }

// myFunc(3)

// 5

// let myFunc = (a, b) => (a === b) ? console.log(true) : console.log(false)

// myFunc(10, 10)

// 6

// let myFunc = (a, b) => {
//     ((a + b) > 10) ? console.log(true) : console.log(false)
// }

// myFunc(5, 2)

// 7 

// let myFunc = a => (a < 0) ? console.log(true): console.log(false)

// myFunc(-10)

// 8

// let isNumberInRange = a => (a > 0 && a < 10) ? console.log(true) : console.log(false)

// isNumberInRange(4)

// 9 

// const isNumberInRange = a => (a > 0 && a < 10) ? true : false

// const myArray = [1, 2, 3 , 10, 30, 50 ]

// const arrayReforge = (array, filterFunc) => {
//     const filteredArray = []
//     for (let i = 0; i < array.length; i++){
//         if(filterFunc(array[i])){
//             filteredArray.push(array[i]) 
//         }
//     }
//     return filteredArray
// }



// console.log(arrayReforge(myArray,isNumberInRange))


// const myMap = (array, func) => {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++){
//         newArray.push(func(array[i]))
//     } return newArray
// }


// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray.reduce((prev, item) => prev + item))

// const res = [43, 1, 2, 3, 4].reduce(function(previousValue, currentValue) {
//     if (currentValue % 2 === 0) previousValue.even++;
//     else previousValue.odd++;
//     return previousValue ;
// }, {even : 0, odd : 0});

// console.log(res);


// const myArray = [
//     {serega : "horosh"},
//     {serega : "ploh"},
//     {sergey : "megahorosh"}
// ];

// let myValue = myArray.reduce(function(previousValue, currentValue){
//     const myObj = {...previousValue, ...currentValue};
//     return myObj
// });

// console.log(myValue)


// const myArray = ['hello my dear friend', 'andrey52 52 52', '', 'sergey123']

// console.log(myArray.flatMap(x => x.split('')))

// const myArray =  [[1,2,3], [3,4,5],[6,7]]

// const myFlatMap = (array, func) => {

// }


// 10 


// const getDigitsSum = digit => {
//     let sum = 0;    
//     digit = String(digit);
//     for (let i = 0; i < digit.length; i++){
//         sum += +digit[i]
//     }
//     return sum
// }

//

// let iters = 0
// for(let i = 0; i <=2020; i++){
//     if(getDigitsSum(i) === 13){
//         // console.log(i)
//         iters += 1
//     } 
// }
// console.log(iters)


// Нужно сгенерировать массив рандомных чисел
// Причем генерация рандомного числа должны быть отдельной функцией, принимающей промежуток, из которого взять рандомное число
// Типа (min, max) => rand_number в интервале [min, max]**


// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }

// const getArray = (howMany, min, max) => {
//     const myArray = [];
//     for (let i = 0; i < howMany; i++){
//         myArray.push(getRandomInt(min, max))
//     }
//     return myArray
// }

// const myNumb = getArray(10, 10, 50)
// console.log(myNumb)

// 12


// const isEven = (number) => number % 2 === 0

// console.log(isEven(11))

// 13

// const myArray = [10, 20, 3, 4, 8, 75];
// const evenArray = [];
// for(let i = 0; i < myArray.length; i++){
//     if(isEven(myArray[i])) evenArray.push(myArray[i])
// }

// const myArray = [10, 20, 3, 4, 8, 75];
// const result = myArray.filter(isEven)
// console.log(result)

// console.log(evenArray)

// 14

// const getDivisors = (number) =>{
//     const myArray = [];
//     for(let i = 1; i <= number; i++){
//         if (number % i === 0) myArray.push(i)
//     }
    
//     return myArray
// }
// console.log(getDivisors(10))

// 15

// const myFunc = (number) => {
//     const myNumber = number.toString()
//     let myValue = 0
//     for(let i = 0; i < myNumber.length; i++){
//         myValue += +(myNumber[i])
//     }
//     return (myValue <= 9) ? myValue : myFunc(myValue) 
// }

// const test = 123432

// console.log(myFunc(test))


// 16


























// const primeNumber = number => {
    
// }






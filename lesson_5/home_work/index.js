
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
//     polindrom === reversedWord ? console.log("true") : console.log("false")
// }

// const myWord = "серегаагерес"

// myFunction(myWord)

// const myFunction = polindrom => {
//     if (!(typeof polindrom === "string")) {
//         return console.log("Это не слово")
//     }
//     (polindrom === polindrom.split("").reverse().join("")) ? console.log('true'):console.log('false')
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
//         }
//     } else console.log('Введите число от 1 до 7')
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

// let isNumberInRange = a => (a > 0 && a < 10) ? true : false

// const myArray = [1, 4, 6, 10, 32, 4, 5]

// let arrayReforge = (array, filteredArray) => {
//     for (i = 0; i < (array.length); i++){
//         if(isNumberInRange(array[i])){
//             filteredArray.push(array[i]) 
//         }
//     }
// }

// let newArray = []
// arrayReforge(myArray, newArray)

// console.log(newArray)


// Работа с if-else

// 1

// let a = 0

// if (a === 0) {
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 2

// let a = 1

// if (a > 0){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 3

// let a = 0

// if (a < 0){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 4

// let a = 0 

// if (a >= 0){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 5

// let a = 0

// if (a <= 0){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 6

// let a = 0;

// if (a != 0){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 7

// let a = 'test'

// if (a === 'test'){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 8

// let a = "1"

// if (a === '1'){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }




// Работа с логическими переменными

// 1

// let test = false

// if (test == true){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// let result = (test == true) ? "Верно":"Неверно"
// console.log(result)

// 2   

// let test = false

// if (test != true ){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// let result = (test != true) ? "Верно" : "Неверно"
// console.log(result)



// Работа с && (и) и || (или)

// 1
// let a = -2

// if (a > 0 && a < 5){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// 2

// let a = 2

// if (a === 0 || a === 2) {
//     a += 7
//     console.log(a)
// } else {
//     a /= 10
//     console.log(a)
// }

// 3

// let a = 3
// let b = 5

// if (a <= 1 && b >= 3){
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }

// 4 

// let a = 5
// let b = 2

// if((a > 2 && a < 11) || (b >= 6 && b < 14)){
//     console.log("верно")
// } else {
//     console.log('неверно')
// }

// На switch-case

// 1 

// let num = 1
// switch (num) {
//     case 1 : 
//         result = "Зима"
//         break
//     case 2 : 
//         result = "Весна"
//         break
//     case 3 :
//         result = "Лето"
//         break
//     case 4 :
//         result = "Зима"
//         break
//     default :
//         result = "Введите число от 1 до 4х"
// }
// console.log(result)

// Общие задачи

// 1

// let day = 15

// if (day <= 10 && day > 0) {
//     console.log("первая декада")
// } else if (day > 10 && day <= 20){
//     console.log("вторая декада")
// } else if (day > 20 && day <= 31) {
//     console.log("третья декада")
// } else {
//     console.log("в месяце может быть только 31 день")
// }

// 2

// let month = 12

// if (month <= 2 || month === 12){
//     console.log("Зима")
// } else if (month <= 5) {
//     console.log("Весна")
// } else if (month <= 8) {
//     console.log("Лето")
// } else if (month <= 11){
//     console.log("Осень")
// } else console.log('в году 12 месяцев')

// 3 

// let mySring = "abcde"

// console.log(mySring[0] === "a" ? "Верно" : "Неверно")

// 4 

// const myString = "12345"

// if (mySring[0] == 1 || mySring[0] == 2 || mySring[0] == 3){
//     console.log("да")
// } else console.log("нет")

// if ([1,2,3].includes(+myString[0])) console.log("да") 
// else console.log("нет")

// 5 

// const myString = "123"

// console.log(Number(myString[0]) + Number(myString[1]) + Number(myString[2]))


// console.log((+myString[0]) + (+myString[1]) + (+myString[2]))

// 6 

// const myString = "654456"

// let sumFirst = (+myString[0]) + (+myString[1]) + (+myString[2]);
// let sumSecond = (+myString[3]) + (+myString[4]) + (+myString[5]);

// if (sumFirst === sumSecond){
//     console.log("Да")
// } else {
//     console.log("Нет")
// }

// Циклы while и for

// 1 

// for(myNumber = 1; myNumber <= 100; ++myNumber){
//     console.log(myNumber)
// }

// 2 

// for(myNumber = 11; myNumber <= 33; ++myNumber){
//     console.log(myNumber)
// }

// 3 

// for(myNumber = 0; myNumber <= 100; ++myNumber){
//     if (myNumber % 2 === 0){
//         console.log(myNumber)
//     }
// }

// 4

// let sum = 0

// for(myNumber = 0; myNumber <= 100; ++myNumber){
//     sum += myNumber;
// }
// console.log(sum)
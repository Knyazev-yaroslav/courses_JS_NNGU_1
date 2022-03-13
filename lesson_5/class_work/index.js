// Fuction Decloration - объявление функции
// Fuction Expression - функциональное выражение
// Arrow Function - стрелочная функция

// function showMassage() {
//     console.log("hello")
// }

// showMassage();

// const user = "Vasya"

// function greetUser(name) {
//     console.log(`Hello ${name}`)
// }

// const user = {
//     name: "Vasya",
//     age : 18,
// };

// function checkAccess(age) {
//     age < 18 ? showDeniedMsg() : showAllowedMsg()
// }

// function showAllowedMsg(){
//     console.log('Доступ разрешен');
// }

// function showDeniedMsg() {
//     console.log('Доступ запрещен');
// }

// checkAccess(user.age)

//Function Expression

// const showAllowedMsg = function(){
//     console.log("Доступ разрешен")
// }

// Деректива return

// function calcValue(a, b){
//     return a + b
// }

// const result = calcValue(5 , 10)

// console.log(result)

// const user = {
//     name : "Vasya"
// }

// function getName(user){
//     return user.name || 'гость'
// }

// const greetMsg = 'Привет'
// console.log(getName(user));

// function sayHi(text, name = getName()){
//     console.log(`${text}, ${name}`)
// }

// sayHi(greetMsg, getName(user))

// Функция, используемая внутри функции, называется callback

// const name = 'vasya'

// function showMsg(){
//     console.log(name)
// }

// Практика

// 1 

// const name = "Vasya";

// function greetUser(user = 'гость'){
//     console.log(`Привет, ${user}`)
// };

// greetUser(name)

// 2 

// function power(a, b = 1){
//     return a ** b
// }

// let myResult = power(10, 3)
// console.log(myResult)

// 3
// const myArray = [1, 2, 3, 4, 5]

// function average(array){
//     if (!myArray.length ){
//         return 'Пустой массив'
//     }

//     let myResult = 0;

//     for (i = 0; i < array.length; ++i){
//         myResult += array[i]
//     }

//     return myResult /= array.length
// }


// const myAverage = average(myArray)
// console.log(myAverage)

// Arrow function

// const calcValue = (a, b) => {
//     const result = a + b;
//     return result
// }

// calcValue(3, 5);
// console.log(result)

// Напишите стрелочную функцию которая будет выводить
//  переданную строку в консоль n раз.

// const myFunction = (myStr, repeatings) =>{
//     for (let = i = 1; i <= repeatings; i++){
//         console.log(myStr)
//     }
// }

// myString = "Сообщение"

// myFunction(myString, 5)

// Напишите стрелочную функцию, которая будет принимать 
// в качестве параметра букву и если она гласная, функция
//  будет  возвращать true, в противном случае false . 

// const myChar = "а";


// const isMyCharVowel = (char) => {
//     const vowels = "ауоыэяюёие"

//     if(vowels.includes(char)){
//         return "Гласная!"
//     }

//     return "Не гласная!";
// }

// console.log(isMyCharVowel(myChar))


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

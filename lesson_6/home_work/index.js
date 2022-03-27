//1
// const stringToarray = (str) => str.replaceAll(",", "").split(' ')
// console.log(stringToarray('Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов'))

//2

// const deleteСharacters = (str, length) =>{
//     let myStr = ""
//     for(let i = 0; i < length; i++){
//         myStr += str[i]
//     }
//     return myStr
// }

// console.log(deleteСharacters('Добрый день', 6))

// 3

// Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и
// вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const insertDash = (str) => str.replaceAll(" ", "-").toUpperCase()

// console.log(insertDash('Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента'))

// 4

// const myFunc = (str) => {
//     if (str[0] === str[0].toLowerCase()){
//         str = str.split('');
//         str[0] = str[0].toUpperCase();
//         str = str.join('')
//     }
//     return str
// }

// console.log(myFunc('Добрый день'))

// 5

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const capitalize = (str) =>{
//     const words = str.split(' ')
//     const result = [];
//     for (let i = 0; i < words.length; i++){
//         const arr = []
//         arr = words[i].split('');
//         arr[0] = arr[0].toUpperCase();
//         result.push(arr.join(''));
//     }
//     return result.join(' ')
// }

// console.log(capitalize('добрый день, как ваши дела'))

// 6

// Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет
// регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const changeRegister = (str) => {
//     const chars = str.split('');
//     const result = []
//     for(let i = 0; i < chars.length; i++){
//         if(chars[i] === chars[i].toUpperCase()){
//             chars[i] = chars[i].toLowerCase()
//         } else chars[i] = chars[i].toUpperCase()
//         result.push(chars[i])
//     }
//     return result.join('')
// }

// console.log(changeRegister("АбВгДеЁ"))

// 7

// Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
// function removeChar(str) {
//     return str
//         .split(" ")
//         .map((words) =>
//             words
//                 .split("")
//                 .filter((char) => char >= "А" && char <= "я")
//                 .join("")
//         )
//         .join(" ");
// }

// 8

// Напишите функцию zeros(num, len), которая дополняет нулями до указаной
// длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len) => +(num + '0'.repeat(len - num.toString().length))

// console.log(zeros(13, 10))

// 9

// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => str1.toUpperCase() === str2.toUpperCase()

// console.log(comparison('bbb', 'aaa'))

// 10

// Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitiveSearch = (str1, str2) => str1.toLowerCase().search(str2.toLowerCase())

// console.log(insensitiveSearch('Расцветали яблони и груши', 'ЯБЛОНИ'))

// 11

// Напишите функцию initCap(str), которая преобразует стиль написания
// составных слов строки в CamelCase, при котором несколько слов пишутся слитно без
// пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const initCap = (str) =>{
//     const words = str.split(' ')
//     let chars = []
//     let result = ''
//     for(let i = 0; i < words.length; i++){
//         chars = words[i].split('')
//         chars[0] = chars[0].toUpperCase()
//         result += chars.join('')
//     }
//     return result
// }

// console.log(initCap("Расцветали яблони и груши"))

// 12

// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов
// строки из CamelCase в snake_case, при котором несколько слов разделяются символом
// подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const initSnake = (str) =>{
//     const chars = str.split('');
//     let result = ''
//     for (let i = 0; i < chars.length; i++){
//         if(chars[i] === chars[i].toUpperCase()){
//             chars[i] = '_' + chars[i].toLowerCase()
//         }
//     }
//     return result = chars.join('').slice(1)
// }

// console.log(initSnake("РасцветалиЯблониИГруши"))

// 13

// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const repeatStr = (str, n) => str.repeat(n)

// console.log(repeatStr('Яблоня', 7))

// 14

// Напишите функцию path(pathname), которая возвращает имя
// файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const path = (pathname) => pathname.split("/").pop()

// console.log(path('/lesson_6/home_work/index.js'))

// 15

// Создайте метод объекта String endsWith(), который сравнивает
// подстроку str1 с окончанием исходной строки str и определяет
// заканчивается ли строка символами подстроки.

// const endsWith = (str ,str1) => {
//     const words = str.split('')
//     const endsString = []
//     const charIndex = (words.length - str1.length)
//     for (let i = charIndex; i < words.length; i++){
//         endsString.push(words[i])
//     }
//     const result = (endsString.join('') === str1 ? true : false)
//     return result
// }

// const myString = 'Расцветали яблони и груши'
// console.log(endsWith(myString, 'ши'))

// 16

// Напишите функцию getSubstr(str, char, pos), которая возвращает
// часть строки, расположенную после или до указанного символа char
// в зависимости от параметра pos.

// const getSubstr = (str, char, pos) => {
//     let result
//     const charIndex = str.indexOf(char);
//     if(!pos){
//         result = str.substring(0, charIndex)
//     } else {
//         result = str.substring(charIndex + 1)
//     }
//     return result
// }

// let myStr = 'часть строки, расположенную * после или до указанного символа'

// console.log(getSubstr(myStr, "*", true))

//17

// Напишите функцию insert(str, substr, pos), которая вставляет подстроку
//  substr в указанную позицию pos строки str. По умолчанию подстрока
//   вставляется в начало строки.

// const insert = (str, substr, pos) =>{
//     const chars = str.split('')
//     chars.splice(pos - 1, 0, substr)
//     const result = chars.join('')
//     return result
// }
// let myStr = 'в указанную позицию pos строки str'
// console.log(insert(myStr, ' ивааааааааан', 12))

//18

// Напишите функцию limitStr(str, n, symb), которая обрезает строку, 
// если она длиннее указанного количества символов n. Усеченная строка 
// должна заканчиваться троеточием «...» (если не задан параметр symb) 
// или заданным символом symb.

// const limitStr = (str, n, symb = '...') => {
//     const charsArr = str.split('')
//     const deleteLimit = (charsArr.length - n)
//     charsArr.splice(n, deleteLimit, symb)
//     let result = charsArr
//     return result.join('')
// }


// const limitStr = (str, n, symb = '...') => {
//     let result;
//     if (str.length > n) result = str.substring(0, n)
//     result += symb
//     return result
// }

// const myStr = '0123456789'
// console.log(limitStr(myStr, 4))

//19

//Напишите функцию count(str, stringsearch), которая возвращает количество
//  символов stringsearch в строке str.

// const count = (str, stringsearch) => {
//     const charsArray = str.split('');
//     let counter = 0
//     for(let i = 0; i < str.length; i++){
//         if(charsArray[i].toLowerCase() === stringsearch.toLowerCase()){
//             counter++
//         }
//     }
//     return counter
// }

// const myStr = 'АаааУУууЧчччч'
// console.log(count(myStr, 'ч'))

//20

// Напишите функцию strip(str), которая удаляет 
// все лишние пробелы из строки str.

// const strip = (str) => {
//     wordsArray = str.split(' ')
//     let result = []
//     for(let i = 0; i < wordsArray.length; i++){
//         if(wordsArray[i]){
//             result.push(wordsArray[i])
//         }
//     }
//     return result.join(' ')
// }

// const myStr = '   Иван      Ван     Ан   Н    '

// console.log(strip(myStr))

//21

// Напишите функцию cutString(str, n), которая удаляет лишние слова из 
// строки str, оставив в ней n слов.

// const cutString = (str, n) =>{
//     const wordsArray = str.split(' ')
//     const deleteLimit = wordsArray.length - n
//     for(let i = 0; i < deleteLimit; i++){
//         wordsArray.pop()
//     }
//     return wordsArray.join(' ')
// }

// const myStr = 'которая удаляет лишние слова из'
// console.log(cutString(myStr, 3))

//22


// Напишите функцию findWord(word, str), которая проверяет, существует
//  ли в строке str слова word.

// const findWord = (str, word) => str.includes(word)

// console.log(findWord('Иван вышел погулять на Азерот', "вышел"))


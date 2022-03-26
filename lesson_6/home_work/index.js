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

// const removeChar = (str) => {
//     const symbols = str.split('');
//     for(let i = 0; i < symbols.length; i++){
//         if(typeof(symbols[i]) != "string" && typeof(symbols[i]) != 'number'){
//             symbols.splice(i, 1)
//         }
//     }
//     return symbols.join('')
// }

// console.log(removeChar('Напишите функцию, которая возвращает строку, очищенную от всех не буквенно-цифровых символов.'))

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

// 16

// Напишите функцию getSubstr(str, char, pos), которая возвращает 
// часть строки, расположенную после или до указанного символа char 
// в зависимости от параметра pos.



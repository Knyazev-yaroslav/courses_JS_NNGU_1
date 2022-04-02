// Практика

// 1 

// Написать функцию, которая будет принимать массив чисел, 
// содержащий целые положительные и целые отрицательные 
// числа, в качестве результата возвращать сумму четных
// положительных элементов переданного массива.


const evenPositiveSum = (array) =>{
    const filteredArray = array.filter((element) => element % 2 === 0 && Math.sign(element) === 1)
    const result = filteredArray.reduce((accum, current) => accum +current)
    return result
}

const myArray = [1, 2, 3, 4, 5, -1, -5, -10, -12]

console.log(evenPositiveSum(myArray))

// 2 

// Написать функцию, которая будет принимать массив чисел,
// и будет убирать повторяющиеся значения из переданного 
// массива, в качестве результата возвращать новый массив 
// с уникальными значениями из исходного.

// const uniqueValues = (array) => {
//     const result = [];
//     for(let i = 0; i < array.length; i++){
//         if(!result.includes(array[i])){
//             result.push(array[i])
//         }
//     }
//     return result
// }

// const myArray = [1, 1, 1, 2, 3, 4, 4, 2, 3, 100]

// console.log(uniqueValues(myArray))

// 3

// Написать функцию  которая будет принимать два массива,
// и будет сравнивать их, если они идентичны (элементы 
// совпадают по значению и по индексу) то функция возвращает
// true, в противном случае false.

// const compArray = (array1, array2) =>{
//     let biggestArrayLength
//     if (array1.length >= array2.length){
//         biggestArrayLength = array1.length 
//     } else biggestArrayLength = array2.length 
//     for(let i = 0; i < biggestArrayLength; i++){
//         if(!(array1[i] === array2[i])){
//             return false
//         }
//     }
//     return true
// }

// const arr1 = [1, 2, 3, 4, 5]

// const arr2 = [1, 2, 3, 4, 5]

// console.log(compArray(arr1, arr2))

// 4

// Создайте объект и скопируйте данный объект с 
// помощью: Object.assign() и spread оператора. 
// Изменить любое свойство в копии объекта, и проверить 
// не изменился ли исходный.

// const myObj = {
//     'a' : 1,
//     'b' : 2,
//     'c' : 3,
// }

// const newObj1 = Object.assign({}, myObj)
// const newObj2 = {...myObj}

// newObj1["d"] = 4
// newObj2["e"] = 5

// console.log(myObj, newObj1, newObj2)

// 5

// Написать функцию  которая будет принимать n-ое 
// количество аргументов, в качестве результата 
// функция будет возвращать сумму всех четных элементов. 
// Для решения использовать цикл for (... of …).

// const sumNumbers = (...args) => {
//     let result = 0;
//     for(number of args){
//         if(number % 2 === 0){
//             result += number
//         }
//     }
//     return result
// }

// console.log(sumNumbers(1, 2, 3, 5, 12, 7, 4))

// 6

// Написать функцию  которая будет принимать два массива, 
// и в качестве результата будет возвращать только  те 
// значения которые есть и в первом и во втором массиве.

// const doubleVallues = (arr1, arr2) => {
//     const result = [];
//     const valuesArray = [...arr2];
//     let myIndex;
//     for(value of arr1){
//         if (valuesArray.includes(value)){
//             myIndex = valuesArray.indexOf(value)
//             valuesArray.splice(myIndex, 1)
//             result.push(value)
//         }  
//     }
//     return result
// }

// const myArr1 = [1, 1, 2, 3, 4, 20]
// const myArr2 = [1, 1, 1, 2, 3, 4]

// console.log(doubleVallues(myArr1, myArr2))



// Основные задачи

// 1

// Используя метод map() напишите код, который получает из массива 
// строк новый массив, содержащий их длины.

// const myArray = ['Используя', 'метод', 'напишите', 'код'];

// const arrayLength = myArray.map((elem) => elem.length);

// console.log(arrayLength);


// 2

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), которая
// возвращает новый массив из такого же числа элементов, в котором на каждой
// позиции будет находиться сумма элементов массива numbers до этой позиции
// включительно.



// const currentSums = (numbArray) => {
//     const counterArray = []
//     const result = []
//     for (numb of numbArray){
//         counterArray.push(numb)
//         result.push(counterArray.reduce((accum, current) => accum + current))
//     }
//     return result
// }
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// console.log(currentSums(numbers))


// 3

// Напишите код, который получает из массива чисел новый массив, содержащий
// пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.


// const pairOfNumbers = (arr) =>{
//     const arrayCopy = [...arr];
//     const result = [];
//     for(numb of arrayCopy){
//         for(elem of arrayCopy){
//             if(numb + elem === 7){
//                 result.push([numb, elem])
//         }
//     }
//     return result
// }


// const pairOfNumbers = (arr, pairSum) =>{
//     const arrayCopy = [...arr];
//     const result = []
//     for(let i = 0; i < arrayCopy.length; i++){
//         if(arrayCopy[i] > pairSum) continue
//         for(let j = 0; j < arrayCopy.length; j++){
//             if(arrayCopy[j] > pairSum) continue
//             if(arrayCopy[i] + arrayCopy[j] === pairSum){
//                 result.push([arrayCopy[i], arrayCopy[j]])
//                 arrayCopy[i] = pairSum + 1
//                 arrayCopy[j] = pairSum + 1
//             }
//         }
//     }
//     return result
// }

// const numbersArray = [2, 0, 3, 1, 5, 6, 4, 7]

// console.log(pairOfNumbers(numbersArray, 7))

// 4

// Напишите код, создающий массив, который будет состоять из первых букв слов
// строки str.

// const firstChar = (str) => str.split(' ').map((elem) => elem[0])

// const myArray = 'Напишите код, создающий массив, который будет состоять из первых букв слов строки str'

// console.log(firstChar(myArray))

// 5

// Напишите код, создащий массив, который будет состоять из строк, состоящих 
// из предыдущего, текущего и следующего символа строки str.

// const str = 'hello';

// const result = [];

// for(let i = 0; i < str.length; i++){
//     result.push(str.substring(i - 1, i + 2))
// }

// console.log(result)

// 6

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, 
// в массив цифр расположенных по убыванию их значений.

// const numbersArray = [1, 4, 7, 2, 6, 8, 10, 12]

// console.log(numbersArray.sort((a, b) => b - a))

// 7

// Напишите код, объединяющий три массива цифр, и располагающий цифры, 
// в полученном массиве, в порядке убывания их значений через пробел.

// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6, 7];
// const thirdArray = [8, 9];

// const allArrays = [...firstArray, ...secondArray, ...thirdArray];

// allArrays.sort((a, b) => b - a);

// const result = allArrays.join(' ');

// console.log(result);

// 8

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может 
// быть произвольным.


// Вариант 1
// const arraysSum = (array) =>{
//     const result = []
//     for(elem of array){
//         result.push(...elem)
//     }
//     return result.reduce((accum, current) => accum + current)
// }

// const twoDimensionalArray = [[1, 2, 3], [4, 5], [6]]

// Вариант 2
// console.log(twoDimensionalArray.reduce((arr1, arr2) => arr1.concat(arr2)).reduce((accum, current) => accum + current))

// console.log(arraysSum(twoDimensionalArray))

// 9

// Дан массив с числами. Не используя метода reverse переверните его 
// элементы в обратном порядке.

// const reversFunc = (arr) =>{
//     const arrayCopy = [...arr]
//     const result = []
//     for(let i = 0; i < arr.length; i++){
//         result.push(arrayCopy.pop())
//     }
//     return result
// }

// const numbArray = [2, 4, 1, 3, 5, 7]

// console.log(reversFunc(numbArray))

// 10

// Дан массив с числами. Узнайте сколько элементов с начала массива 
// надо сложить, чтобы в сумме получилось больше 10-ти.

// const arrayOfNumbers = [1, 2, 3, 4, 5, 1, 2, 5]
// let sum = 0;
// let result;
// for(let i = 0; i < arrayOfNumbers.length; i++){
//     sum += arrayOfNumbers[i]
//     if(sum > 10){
//         result = i + 1
//         break
//     }
// }
// console.log(result)

// 11

// Напишите функцию arrayFill, которая будет заполнять массив заданными 
// значениями. Первым параметром функция принимает значение, которым 
// заполнять массив, а вторым - сколько элементов должно быть в массиве. 
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (value, any) =>{
//     const result = []
//     for(let i = 0; i < any; i++){
//         result.push(value)
//     }
//     return result
// }



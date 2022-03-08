// let myVar1 = 5;

// let myVar2 = 10;

// if (myVar1 > myVar2) {
//     console.log(`Верно, ${myVar1} > ${myVar2}`)
// } else if (myVar1 < myVar2) {
//     console.log(`${myVar1} меньше ${myVar2}`)
// } else {
//     "end"
// };

// let myVar = myVar1 > myVar2 ? console.log("true") : console.log("false")

// let userRole = 'admin';

// switch(userRole) {
//     case 'student' :
//         console.log("Текущий пользователь student");
//         break
//     case 'admin' :
//         console.log("Текущий пользователь admin");
//         break;
//     case "normal_user":
//         console.log("Текущий пользователь normal_user")
//         break
//     default:
//         console.log('нет такого типа пользователя');
//         break;
// }

// Логичекие операторы:
// && - логическое И - возвращает первое false
// || - логическое ИЛИ - возвращает первое true
// ! - логическое Не

// console.log(0 || 0 || "");
// console.log(1 && 2 && "строка" && 0 && 1)

// console.log(1 && 2) || (4 && 0)

// let a = 0;
// let b = 1;

// Логическое НЕ:

// let myVar = 5

// if(myVar){
//     console.log("True")
// }

// console.log(null || 0 || "" || undefined);

// console.log(null  ||  0  ||  ""  ||  undefined)
// console.log("яблоко"  &&  true  &&  null  &&  1 )
// console.log (0  ||  true  &&  "false"  ||  null)
// console.log(0  &&  true  ||  "false"  &&  null)
// console.log (!0 && !!1)
// console.log (!(null || !"апельсин" && true)  )

// let intervalOne = 2;
// let intervalTwo = 1;
// let intervalThree = 4;

// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//     console.log(intervalOne);
// } else if (intervalTwo > intervalThree) {
//     console.log(intervalTwo);
// } else {
//     console.log(intervalThree);
// }

// Реализовать систему рекомендаций для пользователя опираясь на значение переменной, хранящей значение температуры в градусах Цельсия.
// ниже -30:  “Оставайтесь дома!”;
// от -30 до -10 включительно: “Сегодня холодно”;
// от -10 до +5 включительно: “Не холодно”;
// от +5 до +15 включительно: “Тепло”;
// от +15 до +25 включительно: “Очень тепло”;
// от +25 до +35: “Жарко”;
// выше либо равно +35: “Пекло!”;

// let currentTemp = 12

// if (currentTemp <= -30) {
//     console.log("Оставайтесь дома");
// } else if (-30 < currentTemp && currentTemp <= -10) {
//     console.log("Сегодня холодно");
// } else if (-10 < currentTemp && currentTemp <= 5) {
//     console.log("Не холодно");
// } else if (5 < currentTemp && currentTemp <= 15) {
//     console.log("Тепло");
// } else if (15 < currentTemp && currentTemp <= 25) {
//     console.log("Жарко");
// } else {
//     console.log("Пекло");
// }






// Задача 1
// Вывести в консоль заданную строку N раз. 

// myString = "string"
// myNumber = 8
// while (myNumber > 0){
//     console.log(myString)
//     myNumber -= 1
// }

// do {
//     console.log(myString)
//     myNumber -= 1
// } while (myNumber > 0)

// for (myNumber; myNumber > 0; myNumber -=1) {
//     console.log(myString)
// }

// Задача 2
// Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. Выяснить, 
// на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, 
// что в первый день продаж всего было N автомобилей.

// let carsAmount = 60;
// const minCarsAmount = 10;
// let day = 1
// while (carsAmount > minCarsAmount) {
//     day += 1
//     carsAmount /= 2
//     console.log(`В ${day} день осталось ${carsAmount} машин`)
// }

// Задача 3

// Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
// Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
// Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска. 

const startYear = 1800;
const endYear = 2020;

let leapYearsAmount = 0;
const firstSpaceTripYear = 1962;

for (let i = startYear; i <= endYear; ++i) {
    leapYearsAmount += 1
    if (i === 1962) console.log(`${i} год - именно тогда человек впервые полетел в космос. Количество итераций для поиска - ${leapYearsAmount}`)
    if (i % 400 === 0){
        console.log(`${i} год високосный. Колличество итераций - ${leapYearsAmount}`)
    } else if (i % 100 === 0) {
        continue
    } else if (i % 4 === 0) {
        console.log(`${i} год високосный. Колличество итераций - ${leapYearsAmount}`)
    } else continue
}


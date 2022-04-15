// 1

// Реализуйте класс Worker (Работник), который будет
// иметь следующие свойства: name (имя), surname
// (фамилия), rate (ставка за день работы), days
// (количество отработанных дней). Также класс должен
// иметь метод getSalary(), который будет выводить
// зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных
// дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//     constructor(options) {
//         this.name = options.name,
//         this.surname = options.surname,
//         this.rate = options.rate;
//         this.days = options.days;
//     }

//     getSalary() {
//         return this.rate * this.days;
//     }

//     getFullName() {
//         return this.name + " " + this.surname;
//     }
// }

// const sergey = new Worker({
//     name: "Sergey",
//     surname: "Sergeev",
//     rate: 7500,
//     days: 24,
// });

// console.log(sergey.getSalary());
// console.log(sergey.getFullName());

// 2

// Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается
// по другому: произведение (умножение) ставки rate на
// количество отработанных дней и на количество работников.

// class Boss extends Worker {
//     constructor(options) {
//         super(options);
//         this.workers = options.workers;
//     }
//     getSalary() {
//         return super.getSalary() * this.workers;
//     }
// }

// const andrey = new Boss({
//     name: "Andrey",
//     surname: "Kudimov",
//     rate: 1000,
//     days: 24,
//     workers: 3,
// });

// console.log(andrey.getSalary());

// 3

// Модифицируйте класс Worker из предыдущей задачи следующим
// образом: сделайте все его свойства приватными, а для их
// чтения сделайте методы-геттеры.

// class Worker {
//     #name;
//     #surname;
//     #rate;
//     #days;
//     constructor(options) {
//         this.#name = options.name,
//         this.#surname = options.surname,
//         this.#rate = options.rate;
//         this.#days = options.days;
//     }
//     get name(){
//         return this.#name
//     }
//     get surname(){
//         return this.#surname
//     }
//     get rate(){
//         return this.#rate
//     }
//     get days(){
//         return this.#days
//     }
//     getSalary() {
//         return this.#rate * this.#days;
//     }
//     getFullName() {
//         return this.#name + " " + this.#surname;
//     }
// }

// const sergey = new Worker({
//     name: "Sergey",
//     surname: "Sergeev",
//     rate: 7500,
//     days: 24,
// });
// console.log(sergey.name)

// console.log(sergey.getFullName())

// 4

// Модифицируйте класс Worker из предыдущей задачи следующим
// образом: для свойства rate и для свойства days сделайте еще
// и методы-сеттеры.

// class Worker {
//     #name;
//     #surname;
//     #rate;
//     #days;
//     constructor(options) {
//         (this.#name = options.name),
//             (this.#surname = options.surname),
//             (this.#rate = options.rate);
//         this.#days = options.days;
//     }

//     get name() {
//         return this.#name;
//     }
//     get surname() {
//         return this.#surname;
//     }
//     get rate() {
//         return this.#rate;
//     }
//     get days() {
//         return this.#days;
//     }

//     set rate(rate) {
//         this.#rate = rate;
//     }
//     set rays(days) {
//         this.#days = days;
//     }

//     getSalary() {
//         return this.#rate * this.#days;
//     }
//     getFullName() {
//         return this.#name + " " + this.#surname;
//     }
// }

// const sergey = new Worker({
//     name: "Sergey",
//     surname: "Sergeev",
//     rate: 7500,
//     days: 24,
// });
// console.log(sergey.name);

// console.log(sergey.getFullName());

// sergey.rate = 100

// console.log(sergey.getSalary())

// 5

// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку, а возвращает
// ее в перевернутом виде, метод ucFirst(), который параметром
// принимает строку, а возвращает эту же строку, сделав ее первую
// букву заглавной и метод ucWords, который принимает строку и
// делает заглавной первую букву каждого слова этой строки.

// class MyString{
//     constructor(){
//     }

//     reverse(str){
//         return str.split('').reverse().join('')
//     }

//     ucFirst(str){
//         let upperCaseFirst = str.split('');
//         upperCaseFirst[0] = upperCaseFirst[0].toUpperCase();
//         return upperCaseFirst.join('')
//     }

//     ucWords(str){
//         let upperCaseWords = str.split(' ').map(element => {
//             element = element.split('')
//             element[0] = element[0].toUpperCase()
//             return element = element.join('');
//             });
//         return upperCaseWords.join(' ')
//     }
// }

// const myStr = new MyString()
// console.log(myStr.ucWords('доброе утро'))

// 6

// Реализуйте класс Validator, который будет проверять строки. К примеру,
// у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает
// true, если не является - то false. Кроме того, класс будет иметь
// следующие методы: метод isDomain для проверки домена, метод isDate
// для проверки даты и метод isPhone для проверки телефона.

// class Validator{
//     constructor(){
//     }
//     isEmail(email){
//     if (email === )
//     }
// }

// 7

// Реализуйте класс Student (Студент), который будет наследовать от класса
// User, подобно тому, как это сделано в теоретической части урока. Этот
// класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User), с помощью
// которого можно вывести одновременно имя и фамилию студента. Также класс
// должен иметь метод getCourse(), который будет выводить текущий курс
// студента (от 1 до 5). Курс вычисляется так: нужно от текущего года
// отнять год поступления в вуз. Текущий год получите самостоятельно.

// class User{
//     constructor(options){
//         this.name = options.name;
//         this.surname = options.surname;
//     };
//     getFullName(){
//         return this.name + ' ' + this.surname
//     }
// }

// class Student extends User{
//     constructor(options){
//         super(options);
//         this.year = options.year
//     }
//     getCourse(){
//         return (new Date()).getFullYear() - this.year
//     }
// }

// const andrey = new Student({
//     name : 'Andrey',
//     surname : 'Andreev',
//     year : 2018
// })

// console.log(andrey.getCourse())
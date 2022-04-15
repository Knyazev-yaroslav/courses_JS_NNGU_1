// Object.prototype.sayHi = function () {
//     console.log(`Hello, I am robor ${this.model}`)
// }
// const robot = {
//     model: "R2D2",
//     created : 2150,
//     move: function () {
//         console.log(`${this.model} just moved!`)
//     }
// }

// const terminator = {
//     model: 'T-800',
//     sayHi: function() {
//         console.log('I will be back')
//     }
// }

// Реализовать функцию конструктор для создания открыток. Функция
// должна создавать объект открытки со свойствами from, to и метод
// show(). Метод должен возвращать строку в которой будут указаны
// значения свойств  from и to.
// Добавить в prototype создаваемого объекта метод заменяющий
// текущее значение  свойства from на новое переданное значение.

// function Card (from, to) {
//     this.from = from;
//     this.to = to;
// };

// Card.prototype.show = function () {
//     console.log(`Открытка от ${this.from} для ${this.to}`)
// };
// Card.prototype.replaceFrom = function(from) {
//     this.from = from
// };
// const andreyCard = new Card('Вася', 'Andrey Kudimov');

// andreyCard.show();

// andreyCard.replaceFrom('Никита');

// andreyCard.show();

// class Animal {
//     #name = "";

//     static type = "ANIMAL";

//     constructor(props) {
//         this.#name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     }

//     voice() {
//         console.log("I am animal");
//     }

//     get getName() {
//         console.log(this.#name);
//     }

//     set setName(newName) {
//         this.#name = newName;
//     }
// }

// const myAnimal = new Animal({
//     name: "Animal",
//     age: 5,
//     hasTail: true,
// });

// class Cat extends Animal {
//     constructor(props) {
//         super(props);
//         this.color = props.color;
//     }
//     voice() {
//         console.log("I am cat");
//     }
// }

// const myCat = new Cat({
//     name: "Cat",
//     age: 8,
//     hasTail: true,
//     color: "blue",
// });

// myCat.getName;
// myCat.setName = "Dog";

// console.log(myCat);

// Создайте класс People, он должен содержать свойства
//   name (имя), surname (фамилия) и метод getFullName()
//    (возвращает полное имя человека). Создайте класс Worker
//     который будет наследоваться от класса People. Класс 
//     Worker должен содержать свойства name, surname 
//     унаследованные от родительского класса, и свойства 
//     rate (ставка по которой происходит оплата руб/день), 
//     day (количество отработанных дней) и метод getSalary() 
//     (возвращает заработную плату сотрудника).
// Создать несколько экземпляров класса Worker с различными 
// данными и проверить корректность работы.

// class People {
//     constructor(props){
//         this.name = props.name;
//         this.surname = props.surname;
//     }

//     getFullName(){
//         return this.name + ' ' + this.surname
//     }
// }

// class Worker extends People{
//     constructor(props){
//         super(props)
//         this.rate = props.rate
//         this.day = props.day
//     }

//     getSalary(){
//         return(`Работник ${this.getFullName()} заработал за месяц ${this.rate * this.day} рублей`)
//     }
// }

// const andreyKudimov = new Worker({name : 'Andrey', surname : 'Kudimov', rate : 0, day : 0})

// console.log(andreyKudimov.getSalary())


// const sergey = new Worker({name : 'Sergey', surname : 'Baranov', rate : 7500, day : 24})

// console.log(sergey.getSalary())
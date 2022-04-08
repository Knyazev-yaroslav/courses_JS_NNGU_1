// const myCity = {
//     cityName: 'Niznhy Novgorod',
//     population : 1500000,
//     callCityName : function(){
//         console.log(this.cityName)
//     },
//     callPopulation: function(){
//         console.log(this.population)
//     },
//     newValue : function(key, value){
//         switch (key) {
//             case 'cityName':
//                 this.cityName = value;
//                 return;
//             case  'population':
//                 this.population = value;
//                 return;
//             default:
//                 console.log('Ключи не найден');
//                 return;
//         }
//     },
// };


// const myCity2 = {
//     cityName: 'Moscow',
//     population: 10000000
// }
// myCity.callCityName.call(myCity2)
// myCity.callPopulation.apply(myCity2)

// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// const newCity = {
//     name: "NN",
//     population: 1500000,
// };

// myCity.showName.call(newCity);
// myCity.showPopulation.call(newCity);
// myCity.changeKeyValue.call(newCity, "name", "NY");
// myCity.changeKeyValue.apply(newCity, ["population", 5000]);

// const boundFunc = myCity.changeKeyValue.bind(newCity, "name", "LA");
// boundFunc();

// console.log(newCity);

// const myFunc = (a) =>{
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         };
//     };
// };

// console.log(myFunc(2)(3)(10));


// const myFunc = (b) =>{
//     const a = 10;
//     return (c) => {
//         return a*b*c
//     }
// }

// console.log(myFunc(5)(5))

// const myFunc1 = (a) =>{
//     return (b) => {
//         return (c) =>{
//             return a*b*c
//         }
//     }
// }


// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users";

const URL = "https://jsonplaceholder.typicode.com/users";

const xhr= new XMLHttpRequest();

xhr.open('get', URL);

xhr.send()
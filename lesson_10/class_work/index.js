// DOM

//Навигация

// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");
// console.log(block2.parentElement); // узел-родитель у block2
// console.log(block2.previousElementSibling); // предыдущий элемент на том же уровне
// console.log(block2.nextElementSibling); // следующий элемент на том же уровне
// console.log(block2.firstElementChild); // первый дочерний элемент
// console.log(block2.lastElementChild); // первый дочерний элемент

//поиск элементов в DOM

document.body.style.margin = "0";

const header = document.createElement("header");
header.className = "page-header";
header.innerHTML = "это header";
header.style.background = "blue";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";
header.style.height = "50px";
header.style.color = "red";
header.style.fontSize = "50px";

document.body.prepend(header);

const container = document.createElement("container");
container.className = "container";
container.innerHTML = "это контейнер";
// container.style.background = "gold";
// container.style.display = "flex";
// container.style.alignItems = "center";
// container.style.justifyContent = "center";
// container.style.height = "100px";
container.style.color = "purple";
container.style.fontSize = "30px";
// container.style.flexWrap = "wrap"

document.body.append(container);

const input = document.createElement("input");
input.className = "input";

container.append(input);

const ul = document.createElement("ul");
ul.className = "ul";
container.append(ul);

const button = document.createElement("button");
button.className = "todos-button";
button.innerText = "Add Todo";
button.addEventListener("click", () => {
    const li = document.createElement('li')
    li.innerHTML = `${input.value}`
    ul.append(li)
    input.value = ''
});
input.after(button);

const newUl = document.createElement("ul");
newUl.className = "todos-list";
button.after(newUl);

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.className = `li ${i}`;
    li.innerText = `${i} элемент`;
    ul.append(li);
}

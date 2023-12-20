const mainContainer = document.getElementById('main-container');
let children = [["Илья", "Коньки с клюшкой"], ["Максим", "Новый телефон"]];
let inputName = document.getElementById('inputName');
let inputWant = document.getElementById('inputWant');

const resetMainContainer = () => {
    mainContainer.innerHTML = "";

    for (let i = 0; i < children.length; i++) {
        let newElement = document.createElement("div")
        if (i === children.length - 1) {
            newElement.innerHTML = `<div id="for-animation" class="card"><div class="name-container"><h3 class="name">Имя:</h3><h3 class="name-value">${children[i][0]}</h3></div><div class="want-container"><h3 class="want">Пожелания:</h3><p class="want-value">${children[i][1]}</p></div></div>`;
        }
        else {
            newElement.innerHTML = `<div class="card"><div class="name-container"><h3 class="name">Имя:</h3><h3 class="name-value">${children[i][0]}</h3></div><div class="want-container"><h3 class="want">Пожелания:</h3><p class="want-value">${children[i][1]}</p></div></div>`;
        }
        mainContainer.appendChild(newElement);
    }
}
const addChild = () => {
    if (inputName.value === ""){
        alert("Вы не ввели имя!");
        return;
    }
    else if (inputWant.value === "") {
        alert("Вы не ввели пожелание!");
        return;
    }
    else if (inputName.value.length > 11) {
        alert("Имя слишком большое!");
        return;
    }
    else if (inputWant.value.length > 50) {
        alert("Пожелание слишком большое!");
        return;
    }

    children.push([inputName.value, inputWant.value]);
    inputName.value = "";
    inputWant.value = "";

    resetMainContainer();
}

document.getElementById('buttonAdd').addEventListener("click", addChild);
resetMainContainer();
const DATA_ROUTE = "http://localhost:3000/children";

const mainContainer = document.getElementById('main-container');
const inputName = document.getElementById('inputName');
const inputWant = document.getElementById('inputWant');
const comment = document.getElementById('comment');
const button = document.getElementById('button');

const getData = async () => {
    try {
        const response = await fetch(DATA_ROUTE);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        alert("Технические неполадки");
    }
}

const displayHeroes = (data) => {
    mainContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let newElement = document.createElement("div");
        
        newElement.innerHTML = `
            <div ${i === data.length - 1 ? "id=\"for-animation\"" : ""} class="card">
                <div class="name-container">
                    <h3 class="name">Имя:</h3>
                    <h3 class="name-value">${data[i].name}</h3>
                </div>
                <div class="want-container">
                    <h3 class="want">Пожелания:</h3>
                    <p class="want-value">${data[i].wish}</p>
                </div>
            </div>`

        mainContainer.appendChild(newElement);
    }

    if (data.length === 0) {
        let newElement = document.createElement("div");
        
        newElement.innerHTML = `
            <h2 class="title2">Здесь пока ничего нет. Создай!</h2>
            <div class="card example">
                <div class="name-container">
                    <h3 class="name">Имя:</h3>
                    <h3 class="name-value">Имя</h3>
                </div>
                <div class="want-container">
                    <h3 class="want">Пожелания:</h3>
                    <p class="want-value">Пожелание</p>
                </div>
            </div>`

        mainContainer.appendChild(newElement);
    }
}
const addChild = async () => {
    if (inputName.value === "" || inputWant.value === ""){
        showComment("Заполните все поля!");
        return;
    }
    else if (inputName.value.length > 11) {
        showComment("Имя слишком большое!");
        return;
    }
    else if (inputWant.value.length > 50) {
        showComment("Пожелание слишком большое!");
        return;
    }

    const newChild = {name: inputName.value, wish: inputWant.value};
    const response = await fetch("http://localhost:3000/children", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify(newChild)
    });
    const updatedData = await response.json();

    inputName.value = "";
    inputWant.value = "";

    displayHeroes(updatedData);
}

const showComment = text => {
    comment.innerHTML = `<h3 class="comments">${text}</h3>`;
    button.disabled = true;

    setTimeout(() => {
        comment.innerHTML = "";
        button.disabled = false;
    }, 2000)
}

button.addEventListener("click", addChild);

getData().then(displayHeroes);
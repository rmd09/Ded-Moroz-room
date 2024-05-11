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
    }
}
const updateCardsEvents = (data) => {
    data.forEach(child => {
        document.getElementById(`card${child.id}`).addEventListener("click", () => openPopup(child.id));
    });
}

getData().then(data => {
    displayHeroes(data);
    updateCardsEvents(data);
});

const displayHeroes = (data) => {
    mainContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let newElement = document.createElement("div");
        
        newElement.innerHTML = `
            <div id="card${data[i].id}" class="card">
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
const addChild = () => {
    if (inputName.value === "" || inputWant.value === ""){
        showComment("Заполните все поля!");
        return;
    }
    else if (inputName.value.length > 20) {
        showComment("Имя слишком большое!");
        return;
    }
    else if (inputWant.value.length > 100) {
        showComment("Пожелание слишком большое!");
        return;
    }

    createNewChild(inputName.value, inputWant.value);
    
    inputName.value = "";
    inputWant.value = "";
}

const createNewChild = async (name, wish) => {
    const newChild = {
        id: -1, //Определяется на сервере
        name: name,
        wish: wish
    };

    const response = await fetch(DATA_ROUTE, {
        method: "PUT",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify(newChild)
    });
    const updatedData = await response.json();

    displayHeroes(updatedData);
    updateCardsEvents(updatedData);
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
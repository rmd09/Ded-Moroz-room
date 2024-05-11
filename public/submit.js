const popupBack = document.getElementById("popup__back");
const popupForm = document.getElementById("form");
const popupContainer = document.getElementById("popup__container");
const popupDelete = document.getElementById("popup__delete");
const popupX = document.getElementById("popup__x");
const popupName = document.getElementById("popup-inputName");
const popupWant = document.getElementById("popup-inputWant");
let currentId;

const closePopup = () => {
    popupBack.className = "popup__back-none";
    popupContainer.className = "popup__back-none";
}
const openPopup = async (id) => {
    currentId = id;
    const children = await getData();
    const child = children.find((item) => {
        return item.id == currentId;
    })
    popupName.value = child.name;
    popupWant.value = child.wish;

    popupBack.className = "popup__back";
    popupContainer.className = "popup__container";
}

popupForm.onsubmit = async (e) => {
    e.preventDefault();
    
    const newChild = {
        id: currentId,
        name: popupName.value,
        wish: popupWant.value
    };

    const response = await fetch(`${DATA_ROUTE}/${currentId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify(newChild)
    });
    const updatedData = await response.json();

    displayHeroes(updatedData);
    updateCardsEvents(updatedData);

    closePopup();
}

popupDelete.onclick = async () => {
    if (!confirm("Вы действительно хотите удалить эту карточку?")) return;

    const response = await fetch(`${DATA_ROUTE}/${currentId}`, {
        method: "DELETE"
    });
    const updatedData = await response.json();

    displayHeroes(updatedData);
    updateCardsEvents(updatedData);

    closePopup();
}

popupBack.addEventListener("click", closePopup);
popupX.addEventListener("click", closePopup);


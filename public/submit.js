const popupBack = document.getElementById("popup__back");
const popupForm = document.getElementById("form");
const popupContainer = document.getElementById("popup__container");
const popupDelete = document.getElementById("popup__delete");
const popupX = document.getElementById("popup__x");

const closePopup = () => {
    popupBack.className = "popup__back-none";
    popupContainer.className = "popup__back-none";
}
const openPopup = () => {
    popupBack.className = "popup__back";
    popupContainer.className = "popup__container";
}

//openPopup();

popupBack.addEventListener("click", closePopup);
popupX.addEventListener("click", closePopup);


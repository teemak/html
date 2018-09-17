let frontendFrontOne = document.getElementsByClassName("card-front")[0];
let frontendBackOne = document.getElementsByClassName("card-back")[0];
let cardOne = document.getElementById("frontend-card-one");

frontendFrontOne.addEventListener("click", () => {
    frontendBackOne.classList.add("active");
    frontendFrontOne.classList.remove("active");
});

cardOne.addEventListener("click", () => {
    frontendFrontOne.classList.add("active");
    frontendBackOne.classList.remove("active");
});

let backendFrontOne = document.getElementsByClassName("card-front")[1];
let backendBackOne = document.getElementsByClassName("card-back")[1];
let cardTwo = document.getElementById("backend-card-one");

backendFrontOne.addEventListener("click", () => {
    backendBackOne.classList.add("active");
    backendFrontOne.classList.remove("active");
});

cardTwo.addEventListener("click", () => {
    backendFrontOne.classList.add("active");
    backendBackOne.classList.remove("active");
});

let backendFrontTwo = document.getElementsByClassName("card-front")[2];
let backendBackTwo = document.getElementsByClassName("card-back")[2];
let cardThree = document.getElementById("backend-card-two");

backendFrontTwo.addEventListener("click", () => {
    backendBackTwo.classList.add("active");
    backendFrontTwo.classList.remove("active");
});

cardThree.addEventListener("click", () => {
    backendFrontTwo.classList.add("active");
    backendBackTwo.classList.remove("active");
});

let fullstackFrontOne = document.getElementsByClassName("card-front")[3];
let fullstackBackOne = document.getElementsByClassName("card-back")[3];
let cardFour = document.getElementById("fullstack-card-one");

fullstackFrontOne.addEventListener("click", () => {
    fullstackBackOne.classList.add("active");
    fullstackFrontOne.classList.remove("active");
});

cardFour.addEventListener("click", () => {
    fullstackFrontOne.classList.add("active");
    fullstackBackOne.classList.remove("active");
});

let fullstackFrontTwo = document.getElementsByClassName("card-front")[4];
let fullstackBackTwo = document.getElementsByClassName("card-back")[4];
let cardFive = document.getElementById("fullstack-card-two");

fullstackFrontTwo.addEventListener("click", () => {
    fullstackBackTwo.classList.add("active");
    fullstackFrontTwo.classList.remove("active");
});

cardFive.addEventListener("click", () => {
    fullstackFrontTwo.classList.add("active");
    fullstackBackTwo.classList.remove("active");
});

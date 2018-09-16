let natFront = document.getElementsByClassName("card-front")[0];
let natBack = document.getElementsByClassName("card-back")[0];
let natInfo = document.getElementById("nat-info");

natFront.addEventListener("click", () => {
    natBack.classList.add("active");
    natFront.classList.remove("active");
});

natInfo.addEventListener("click", () => {
    natFront.classList.add("active");
    natBack.classList.remove("active");
});

let nexFront = document.getElementsByClassName("card-front")[1];
let nexBack = document.getElementsByClassName("card-back")[1];
let nexInfo = document.getElementById("nex-info");

nexFront.addEventListener("click", () => {
    nexBack.classList.add("active");
    nexFront.classList.remove("active");
});

nexInfo.addEventListener("click", () => {
    nexFront.classList.add("active");
    nexBack.classList.remove("active");
});

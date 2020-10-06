const move = document.querySelector(".rect");
const changer = document.querySelector(".close");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");



const shows = () => {
move.classList.add("show");
changer.classList.toggle("burger");
}


changer.addEventListener("click",shows);

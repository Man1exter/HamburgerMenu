const move = document.querySelector(".rect");
const changer = document.querySelector(".close");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");



const shows = () => {
changer.classList.add("burger");
move.classList.add("show");
bars.classList.remove("hide");
};

const hides = () => {
changer.classList.remove("burger");
bars.classList.add("hide");
times.classList.add("show");
};


bars.addEventListener("click",shows);
times.addEventListener("click",hides);


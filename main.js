const move = document.querySelector(".rect");
const changer = document.querySelector(".close");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");



const shows = () => {
changer.classList.add("burger");
move.classList.add("show");
bars.classList.add("hide");
times.classList.add("sekt");
};

const hides = () => {
changer.classList.remove("burger");
times.classList.remove("sekt");
bars.classList.remove("hide");
move.classList.remove("show");
};


bars.addEventListener("click",shows);
times.addEventListener("click",hides);


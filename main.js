const move = document.querySelector(".rect");
const changer = document.querySelector(".close");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");



const shows = () => {
bars.classList.add("burger");
}
const hides = () => {
    bars.classList.remove("burger");
    }


bars.addEventListener("click",shows);
times.addEventListener("click",hides);


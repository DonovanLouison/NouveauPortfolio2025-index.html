let menuBarre = document.getElementById("container2");
let menu = document.querySelector(".menuBarre");
let liBarre = document.querySelectorAll(".li");
let returnBarre = document.querySelectorAll(".return");
let menuB2 = document.querySelector(".header1");
const button = document.getElementById('but');
console.log(menuB2);

let lastScroll = 10


window.addEventListener('load', ()=> {
    // S'assurer que le header est en top: 0 quand la page se charge
    menuB2.style.setProperty("--top"+ 0 + "px");
});
window.addEventListener('scroll', ()=>{
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollPosition / docHeight) * 100;
    console.log(scrollPercent);
    console.log(lastScroll);
    
    if (scrollPercent < lastScroll){
        menuB2.style.setProperty("--top", 0 + "px")
    }
    else {
        menuB2.style.setProperty("--top", -100 + "px")
    }
    if (scrollPercent >= 10){
lastScroll = scrollPercent}
}
)

menuBarre.addEventListener("click", (e)=>{
    e.stopPropagation();
  menu.style.display = "flex";
})

liBarre.forEach((res)=> {addEventListener("click", (e)=>{
    e.stopPropagation();
  menu.style.display = "none";
})})

returnBarre.addEventListener("click", (e)=>{
    e.stopPropagation();
    menu.style.display = "none";
})

function lien () {
    window.open('categorie.html', '_blank');
}

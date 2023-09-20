const heart = document.querySelector("i");
const container = document.querySelector("#container");
container.addEventListener("dblclick",()=>{

    heart.style.transform = "translate(-50%,-50%) scale(1)";
    setTimeout( function (){
        heart.style.transform ="translate(-50%,-50%) scale(0)";
    },1000)
})
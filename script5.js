var toggleMenu = document.querySelector(".fas");
var nav = document.querySelector(".navs")
var icon = document.querySelector("i");
let btn = document.querySelector(".upe");
toggleMenu.addEventListener("click", function(){
    if(nav.style.right !== "0px"){
       nav.style.right = "0px";
        toggleMenu.style.right = "170px"; 
        toggleMenu.classList.remove("fa-bars");
        toggleMenu.classList.add("fa-times")
    }
        

    else{
        nav.style.right = "-200px";
        toggleMenu.style.right = "20px"; 
        toggleMenu.classList.add("fa-bars");
        toggleMenu.classList.remove("fa-times")
    }
})
window.onscroll = function(){
    if(window.scrollY >= 200) {
        btn.style.opacity = 0.5;
        if(window.scrollY >= 300){btn.style.opacity = 1;}
    }
    
    else {
        btn.style.opacity = 0;
    }
}
btn.onclick = function() {window.scrollTo(
    {
        left:0,
        top:0,
        behavior: "smooth",
    }
);}
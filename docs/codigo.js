
// Efecto scroll para mostrar texto
let efectoAparecer = document.querySelectorAll(".efecto-java");

function efectoScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i =0;i < efectoAparecer.length ; i++){
        let distanciaAltura =  efectoAparecer[i].offsetTop;
        if(distanciaAltura - 600 < scrollTop){
            efectoAparecer[i].style.opacity=1;  
        }
    }
}
window.addEventListener("scroll",efectoScroll);
//


// Menu responsive
const linitasHorizontal = document.querySelector(".icono-menu");
const navMenu = document.querySelector(".menu");
const foto = document.querySelector(".logo");

linitasHorizontal.addEventListener("click",(e)=>{
    document.body.style.overflow = "hidden"
    navMenu.classList.toggle("active");
    foto.classList.toggle("ocultar-foto");
});

const cruzMenu = document.querySelector(".cruz-responsive");
        cruzMenu.addEventListener("click",()=>{
        document.body.style.overflow = "initial"
        navMenu.classList.toggle("active");
        foto.classList.toggle("ocultar-foto");
});











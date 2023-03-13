const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const menubars = document.querySelector("#menubars");

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

menubars.addEventListener("click", function(){
    menu.classList.toggle("mostrar"); 
});



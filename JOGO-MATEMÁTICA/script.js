
//constantes para os botões
const btnGame = document.querySelector("#abrir-game");
const btnMenu = document.querySelector("#btn-menu");
const btnProfile = document.querySelector("#abrir-perfil")


//abrir o jogo
function abrirGame() {
    window.location = "salaDeJogo.html";

}

//abrir a area de login
function abrirPerfil(){
setTimeout(function(e){
    window.location = "login.html";}, 3000
)}



//ativar o menu
function ativarMenu() {
    document.getElementById("menu-active").style.width="250px";
    document.getElementById("main").style.marginLeft="250px";
    document.getElementById("menu-active").style.fontSize="20px";

}






//adicionar a funcão do botão
btnMenu.addEventListener("click", ativarMenu)
btnGame.addEventListener("click", abrirGame)
btnProfile.addEventListener("click", abrirPerfil)
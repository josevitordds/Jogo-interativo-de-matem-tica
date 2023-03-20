var senha = document.querySelector("#password").value;
var senhaConf = document.querySelector("#password-conf").value;
const btnEntrar = document.querySelector(".btn")
const btnLogin = document.querySelector("#btnLogin")


function confirmarSenha(){
    if(senha != senhaConf){
       alert("senha e confirmar senha diferentes")
    }else{
        alert("tudo certo")
    }
}

function ativarColorLogin(){
     document.getElementById("#btnLogin").style.backgroundColor="red";
}


btnLogin.addEventListener("click", ativarColorLogin)
btnEntrar.addEventListener("click", confirmarSenha)
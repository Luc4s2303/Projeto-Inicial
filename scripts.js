var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome")
var saida = document.getElementById("saida-de-dados")
var email = document.getElementById("email")
var tel = document.getElementById("tel")
var cep = document.getElementById("cep")
var logra = document.getElementById("logra")
var num = document.getElementById("num")
var comple = document.getElementById("comple")
var bairro = document.getElementById("bairro")
var cidade = document.getElementById("cidade")
var estado = document.getElementById("estado")


function alertar(){

    //alert("O nome inserido foi "+ nome.value);

    saida.innerText = "Nome: " + nome.value +
     "\n E-mail: " + email.value +
     "\n Telefone: " + tel.value + 
     "\n CEP: " + cep.value +
     "\n Logradouro: " + logra.value +
     "\n Número: " + num.value +
     "\n Complemento: " + comple.value +
     "\n Bairro: " + bairro.value +
     "\n Cidade: " + cidade.value +
     "\n Estado: " + estado.value;
      
    
}
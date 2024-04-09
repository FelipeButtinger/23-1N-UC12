var botaoIgual = document.querySelector("#btIgual");

botaoIgual.addEventListener("click", function() {

    funcaoBotaoIgual();
});
//var inputTexto = document.getElementById("#conta");


//var textoInserido = inputTexto.value;


var botao1 = document.querySelector("#bt1");
botao1.addEventListener("click", function() {

    funcaoBotao1();
});
var botao2 = document.querySelector("#bt2");
botao2.addEventListener("click", function() {

    funcaoBotao2();
});
var botao3 = document.querySelector("#bt3");
botao3.addEventListener("click", function() {

    funcaoBotao3();
});
var botao4 = document.querySelector("#bt4");
botao4.addEventListener("click", function() {

    funcaoBotao4();
});
var botao5 = document.querySelector("#bt5");
botao5.addEventListener("click", function() {

    funcaoBotao5();
});
var botao6 = document.querySelector("#bt6");
botao6.addEventListener("click", function() {

    funcaoBotao6();
});
var botao7 = document.querySelector("#bt7");
botao7.addEventListener("click", function() {

    funcaoBotao7();
});
var botao8 = document.querySelector("#bt8");
botao8.addEventListener("click", function() {

    funcaoBotao8();
});
var botao9 = document.querySelector("#bt9");
botao9.addEventListener("click", function() {

    funcaoBotao9();
});
var botaoAC = document.querySelector("#AC");
botaoAC.addEventListener("click", function() {

    funcaoBotaoAC();
});
var botaoDividir = document.querySelector("#barra");
botaoDividir.addEventListener("click", function() {

    funcaoBotaoDividir();
});
var botaoMultiplicar = document.querySelector("#btMultiplicar");
botaoMultiplicar.addEventListener("click", function() {

    funcaoBotaoMultiplicar();
});
var botaoSomar = document.querySelector("#btSomar");
botaoSomar.addEventListener("click", function() {

    funcaoBotaoSomar();
});
var botaoSubtrair = document.querySelector("#btSubtrair");
botaoSubtrair.addEventListener("click", function() {

    funcaoBotaoSubtrair();
});
var botaoVirgula = document.querySelector("#btVirgula");
botaoVirgula.addEventListener("click", function() {

    funcaoBotaoVirgula();
});
var botao0 = document.querySelector("#bt0");
botao0.addEventListener("click", function() {

    funcaoBotao0();
});




function funcaoBotaoIgual() {
    var inputTexto = document.getElementById("conta");
    var expressao = inputTexto.value;

    try {
        
        var resultado = eval(expressao);
        conta.value=resultado;
        
    } catch (error) {
        alert("Erro ao calcular a expressão, não insira letras: ");
    }
}
function funcaoBotao0(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "0";
    conta.value=expressao;
}
function funcaoBotao9(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "9";
    conta.value=expressao;
}
function funcaoBotao8(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "8";
    conta.value=expressao;
}
function funcaoBotao7(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "7";
    conta.value=expressao;
}
function funcaoBotao6(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "6";
    conta.value=expressao;
}
function funcaoBotao5(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "5";
    conta.value=expressao;
}
function funcaoBotao4(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "4";
    conta.value=expressao;
}
function funcaoBotao3(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "3";
    conta.value=expressao;
}
function funcaoBotao2(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "2";
    conta.value=expressao;
}
function funcaoBotao1(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "1";
    conta.value=expressao;
}

function funcaoBotaoAC(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao = "";
    conta.value=expressao;
}
function funcaoBotaoSubtrair(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "-";
    conta.value=expressao;
}
function funcaoBotaoDividir(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "/";
    conta.value=expressao;
}
function funcaoBotaoMultiplicar(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "*";
    conta.value=expressao;
}
function funcaoBotaoSomar(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += "+";
    conta.value=expressao;
}
function funcaoBotaoVirgula(){
    var inputTexto = document.getElementById("conta");
    let expressao = inputTexto.value;

    expressao += ".";
    conta.value=expressao;
}
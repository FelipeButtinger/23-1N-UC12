


function validaBusca(){
    if(document.querySelector('#q').value ==""){
        alert("Não deixe o campo de busca em branco");
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["./img/jojos.png", "./img/viloes.png"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 2000);
var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.classList.contains('pause')) {
        clearInterval(timer);
        controle.classList.remove('pause');
        controle.classList.add('play');
        controle.style.color = 'red'; 
    } else {
        timer = setInterval(trocaBanner, 2000);
        controle.classList.remove('play');
        controle.classList.add('pause');
        controle.style.color = 'blue'; 
    }
    return false;
};


function calculate() {

}

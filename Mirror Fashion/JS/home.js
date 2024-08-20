

//Verifica se a texto antes de fazer a busca
document.querySelector('#form-busca').onsubmit = function(){
    if(document.querySelector("#q").value == ""){
        alert('Não podia ter deixado em branco a busca!');
        document.querySelector('#form-busca').style.background = 'red';
        return false;
    }
 
};

//array de imagens de destaque
var banners = ["../img/destaque-home.png", "../img/destaque-home-2.png"];

//Banner que está sendo mostrado
bannerAtual = 0;

//Função que troca a imagem do banner
function TrocarBanner(){
    bannerAtual = (bannerAtual+1)%2;
    document.querySelector('.destaque img').src = banners[bannerAtual];

}

//Variavel de timer que ativa a funçaõ de trocar o banner
var timer = setInterval(TrocarBanner,4000); 

//Variavel de controle de pause
var controle = document.querySelector(".pause");


//Controla a função de trocar banner atravez de um botão
controle.onclick = function(){
    if(controle.className == 'pause'){
        clearInterval(timer);
        controle.className = 'play';
    }
    else{
        timer = setInterval(TrocarBanner,4000);
        controle.className = 'pause';
    }
    return false;
}


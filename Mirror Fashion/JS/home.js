
function validaBusca(){

    if(document.querySelector('#q').value == ''){
        alert('Não podia ter deixado em branco a busca!');
        document.querySelector('#form-busca').style.background = 'red';
        return false;
    }
}


document.querySelector('#form-busca').onsubmit = validaBusca;

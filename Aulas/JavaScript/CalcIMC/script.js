var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    resultado = document.getElementById("resultado");

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado.innerHTML = "<br/> O resultado é: " + imc.toFixed(2) + ". <br/> Você está muito abaixo do peso."
    }else if(imc <= 18.49){
        resultado.innerHTML = "<br/> O resultado é: " + imc.toFixed(2) + ". <br/> Você está abaixo do peso."
    }else if(imc <= 24.99){
        resultado.innerHTML = "<br/> O resultado é: " + imc.toFixed(2) + ". <br/> Você está com o peso normal."
    }else{
        resultado.innerHTML = "<br/> O resultado é: " + imc.toFixed(2) + ". <br/> Você está acima do peso."
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
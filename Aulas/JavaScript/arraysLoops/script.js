// WHILE = ENQUANTO
// var x = 0;

// while(x <= 10){
//     document.write("<br> O valor de X é " + x);

//     // Aumentando o valor de X
//     x++;
// }


// // FOR = PARA
// for(a = 0; a <= 10; a++){
//     document.write("<br> Valor de A é: " + a);
// }


// SWITCH = CASO

function pedir(){
    var valor = prompt("Escolha alguma coisa: ")

    switch(Number(valor)){
        case 1:
            alert("Você escolheu o Suco!")
            break;
        case 2:
            alert("Você escolheu a Água Gelada!")
            break;
        case 3:
            alert("Você escolheu o Sorvete!")
            break;
        case 4:
            alert("Você escolheu chamar o Garçom!")
            break;
        default:
            alert("Você não escolheu nada! Escolha algo!!")
            break;
    }
}

// Tem como fazer sem converte o numero, ou seja, seria reconhecido como uma string!!

var valor = 2;

if(valor === 1){
    console.log("SIM, O VALOR É IGUAL A 1!!")
}else{
    console.log("Não, ESTE VALOR NÃO É IGUAL A 1!!")
}

//  == valor
// === valor e tipo
// a varias formas de comparar


// TEM COMO COMPARAR TEXTOS/STRING

var nome = "Matheus";

if(nome === "Matheus"){
    console.log("Este é o Matheus")
}else{
    console.log("Este não é o Matheus")
}

//  TEM COMO COMPARAR BOOLEANOS

var userOnline = true;

if(userOnline === true){
    console.log("Ele está ONLINE");
}else{
    console.log("Ele está OFFLINE");
}

// OPERADOR TERNÁRIO

var numero = 10;

numero === 10 ? console.log("Este é o numero 10") : console.log("Este não é o numero 10");
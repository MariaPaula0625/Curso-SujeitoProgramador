var area = document.getElementById("area");

function apertar(){
    var nome = prompt("Qual seu nome?");

    if(nome === '' || nome === null){
        alert("Erro!! Não a nenhuma informação.");
        area.innerHTML = ("Aperte no botão e digite algo...")
    }else{
        area.innerHTML = ("Seu nome é " + nome + "! ");

        let botaoSair = document.createElement("button");
        botaoSair.innerHTML = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até mais!")
    area.innerHTML = "Você saiu!!";
}

function mediaAluno (nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if (media >= 6){
        console.log(media);
        console.log("Você está aprovado!!")
    }else if (media < 6){
        console.log(media);
        console.log("Você foi reprovado!!");
    }
}

function aluno(nome, curso){
    var completo = "Seu nome é " + nome + " e você cursa " + curso;
    console.log(completo);
}
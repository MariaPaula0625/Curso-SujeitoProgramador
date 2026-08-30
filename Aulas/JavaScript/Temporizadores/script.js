function acao(){
    document.write("Executando...<br/>");
}

setInterval(acao, 1000);

setTimeout(()=>{
    document.write("Concluido...<br/>");

}, 3000);

clearInterval(time);
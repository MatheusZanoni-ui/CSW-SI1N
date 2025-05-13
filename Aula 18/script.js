/*Script de Java */

document.getElementById("Titulo").innerHTML = "Bem vindo ao Menos Foco mais Anciedade"
/*window.prompt("Olá, estamos tentando entrar com contato com você para discutir esse seu problema com alcoolismo");*/
document.getElementById("resposta").innerHTML = "Sua resposta foi: " + window.prompt("Você gostaria de assinar a nossa revista mensal?");  
function enviarResposta() {
    var IU = document.getElementById("inputUsuario").value;
    window.alert("Foi digitado: " + IU);
}
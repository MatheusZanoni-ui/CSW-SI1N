function enviaDados() {
    document.getElementById("inputusuario").innerHTML = "Nome enviado foi: " + window.prompt ("Digite seu nome: ") + " Nome Legal";
}
function exibeDados() {
    window.alert("Nome enviado foi: " + document.getElementById("nome").value)
}
function Calcular() {
    var valor1 = Number(document.getElementById("numero_a").value)
    var valor2 = Number(document.getElementById("numero_b").value)
    var operador = (document.getElementById("operador").value)
    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
    }
    document.getElementById("resultadocalc").innerText = resultado;
}
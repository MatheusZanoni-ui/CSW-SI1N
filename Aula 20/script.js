
var cars= ['corolla','uno','brasilia','sandeiro','ka','gol']; 
var text = ""; 
/*
for (let i =0 ; i < cars.length; i++) {
    text += "carro: " + cars[i] + "<br>";   
} 
*/
document.getElementById("carros").innerHTML = text;

// while (condition) {
    // codigo }
let i = 0; 
while (i < cars.lenght) {
    text += "carro: " + cars[i] + "<br>"; 
    i ++
}
document.getElementById("carros").innerHTML = text 
alert (text)



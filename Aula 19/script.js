/* JavaScript */ 
function enviarIdade() {
    var idade = document.getElementById("idade").value; 
    
   idade = parseInt(idade);
   
    if (idade == 1) {
        alert('Idade Invalida'); 
    }
    else if (idade == 0 || idade <= 10) {
        alert('É uma cariança');
    }
    else if (idade == 9 || idade <= 15) {
        alert('É uma adolescente');
    } 
    else if (idade == 14 || idade <= 25) {
        alert('É um jovem');
    }
    else if (idade == 24 || idade <= 60) {
        alert('É um Adulto');
    }
    else if (idade == 59 || idade <=100) {
        alert('É um idoso');
    }
    else {
        alert('Sistema Errou'); 
    } 
}





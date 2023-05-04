function procesarRespuestasFlexBox () {
    let total = 5;
    let puntos = 0;

    let myFrom = document.forms["formulario"];
    let respuestasCorrectas = ["a","b","c","a","a"];

    for (let i = 1; i <= total; i++) {
        if (myFrom["r" + i].value == null || 
            myFrom["r" + i].value == "") {
            alert("Por favor responda todas las preguntas antes de continuar ");
            return false;
        } else { 
            if (myFrom["r" + i].value === respuestasCorrectas[i - 1])
                puntos++;
        }
          
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML=" Obtuviste"+ puntos +"puntos de "+ total +" Posibles ";
}
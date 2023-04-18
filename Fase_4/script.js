function procesarRespuestasFlexBox () {
    let total = 3;
    let puntos = 0;

    let myFrom = document.forms["formulario"];
    let respuestasCorrectas = ["c","a","b"];

    for (let i = 1; i <= total; i++) {
        if (myFrom["r" + i].value == null || 
            myFrom["r" + i].value == "") {
            alert("por favor responda todas las preguntas");
            return false;
        } else { 
            if (myFrom["r" + i].value === respuestasCorrectas[i - 1])
                puntos++;
        }
          
    }

    //let resultado = document.getElementById('resultado');
    //resultado.innerHTML=" Obtuviste"+ puntos +"puntos de "+ total +" Posibles ";
    if (puntos == 1) {
        alert(" Obtuviste "+ puntos +" punto de "+ total +" Posibles ");
    } else {
        alert(" Obtuviste "+ puntos +" puntos de "+ total +" Posibles "); 
    }
    return false;
}   
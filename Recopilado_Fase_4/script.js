function procesarRespuestasFlexBox () {
    let total = 5;
    let puntos = 0;

    let myFrom = document.forms["formulario"];
    let respuestasCorrectas = ["c","a","a","a","a"];

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

    //let resultado = document.getElementById('resultado');
    //resultado.innerHTML=" Obtuviste"+ puntos +"puntos de "+ total +" Posibles ";
    let Rstd = window.confirm('Está seguro de enviar el cuestionario con las respuestas dadas ?');
    if (Rstd === true){
        if (puntos == 1) {
            alert(" Obtuviste "+ puntos +" punto de "+ total +" Posibles ");
        } else {
            alert(" Obtuviste "+ puntos +" puntos de "+ total +" Posibles ");
        }
        return false;
    } else { 
        window.alert('¡Cambia las opciones de respuestas que desees, antes de enviar el cuestionario ¡');
    }
    
}   
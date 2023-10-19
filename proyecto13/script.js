function calcularNivel() {
    const totalPreguntas = parseInt(document.getElementById("totalPreguntas").value);
    const preguntasCorrectas = parseInt(document.getElementById("preguntasCorrectas").value);
    
    const porcentaje = (preguntasCorrectas / totalPreguntas) * 100;

    if (porcentaje >= 90) {
        document.getElementById("resultado").innerText = "Nivel máximo";
    } else if (porcentaje >= 75 && porcentaje < 90) {
        document.getElementById("resultado").innerText = "Nivel medio";
    } else if (porcentaje >= 50 && porcentaje < 75) {
        document.getElementById("resultado").innerText = "Nivel regular";
    } else if (porcentaje >= 25 && porcentaje < 50) {
        document.getElementById("resultado").innerText = "Nivel muy bajo";
    } else {
        document.getElementById("resultado").innerText = "Fuera de nivel";
    }
}

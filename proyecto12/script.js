function calcularCalificacion() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    
    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 7) {
        document.getElementById("resultado").innerText = "Promocionado";
    } else if (promedio >= 4 && promedio < 7) {
        document.getElementById("resultado").innerText = "Regular";
    } else {
        document.getElementById("resultado").innerText = "Reprobado";
    }
}

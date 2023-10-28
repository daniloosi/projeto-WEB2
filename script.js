
function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (!isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);

        const resultadoIMC = document.getElementById("resultado-imc");
        resultadoIMC.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

        let classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do Peso";
        } else if (imc < 24.9) {
            classificacao = "Peso Normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc < 34.9) {
            classificacao = "Obesidade Grau 1";
        } else if (imc < 39.9) {
            classificacao = "Obesidade Grau 2";
        } else {
            classificacao = "Obesidade Grau 3";
        }

        resultadoIMC.innerHTML += `<br>Sua classificação é: ${classificacao}`;
    } else {
        const resultadoIMC = document.getElementById("resultado-imc");
        resultadoIMC.innerHTML = "Por favor, insira valores válidos para altura e peso.";
    }
}

const imcForm = document.getElementById("imc-form");
imcForm.addEventListener("submit", function (event) {
    event.preventDefault();
    calcularIMC();
});


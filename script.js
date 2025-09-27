const form = document.getElementById('form');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const parcela = parseFloat(document.getElementById('parcela').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseInt(document.getElementById('tempo').value);

    if (isNaN(parcela) || parcela <= 0 || isNaN(taxa) || taxa < 0 || isNaN(tempo) || tempo <= 0) {
        resultadoDiv.style.display = "block";
        resultadoDiv.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const valorFuturo = parcela * (((Math.pow(1 + taxa, tempo)) - 1) / taxa);

    resultadoDiv.style.display = "block";
    resultadoDiv.textContent = "Valor Futuro: " + valorFuturo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
});

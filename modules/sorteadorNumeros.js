function validarValores() {
    const quantidade = document.getElementById("quantidade").value;
    const comecoNum = document.getElementById("comecoNum").value;
    const finalNum = document.getElementById("finalNum").value;
    const botaoSortear = document.getElementById("botaoSortear");

    if (!quantidade || !comecoNum || !finalNum || Number(comecoNum) >= Number(finalNum)) {
        botaoSortear.disabled = true; 
    } else {
        botaoSortear.disabled = false; 
    }
}

function sortearNumeros() {
    const quantidade = document.getElementById("quantidade").value;
    const comecoNum = document.getElementById("comecoNum").value;
    const finalNum = document.getElementById("finalNum").value;

    const resultados = [];
    for (let i = 0; i < quantidade; i++) {
        const numeroSorteado = Math.floor(Math.random() * (finalNum - comecoNum + 1)) + Number(comecoNum);

        if (!resultados.includes(numeroSorteado)) {
            resultados.push(numeroSorteado);
        } else {
            i--; 
        }
    }
    alert(`Números sorteados: ${resultados.join(", ")}`);
}

document.getElementById("quantidade").addEventListener("input", validarValores);
document.getElementById("comecoNum").addEventListener("input", validarValores);
document.getElementById("finalNum").addEventListener("input", validarValores);

document.getElementById("botaoSortear").addEventListener("click", sortearNumeros);

validarValores();

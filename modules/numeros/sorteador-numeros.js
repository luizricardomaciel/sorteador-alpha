import { obterValores } from "./sorteador-numeros-handler.js";

let numerosSorteados = new Set();

export function sortearNumeros() {
  const { quantidade, comecoNum, finalNum, naoRepetir } = obterValores();
  const resultadoDiv = document.getElementById("resultado-numeros");

  if (!resultadoDiv) {
    console.error("Div de resultados não encontrada!");
    return;
  }

  const numerosDisponiveis = (finalNum - comecoNum + 1) - numerosSorteados.size;

  if (numerosDisponiveis < quantidade) {
    document.getElementById("botaoSortear").disabled = true;
    return;
  }

  const resultados = [];

  for (let i = 0; i < quantidade; i++) {
    let numeroSorteado;
    do {
      numeroSorteado = Math.floor(Math.random() * (finalNum - comecoNum + 1)) + comecoNum;
    } while (naoRepetir && numerosSorteados.has(numeroSorteado));

    resultados.push(numeroSorteado);
    numerosSorteados.add(numeroSorteado);
  }

  resultados.forEach((numero) => {
    const newDiv = document.createElement("div");
    newDiv.className = "resultado-numero";
    newDiv.textContent = numero;

    resultadoDiv.appendChild(newDiv);
  });
}

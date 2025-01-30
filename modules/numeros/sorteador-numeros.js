import { obterValores } from "./sorteador-numeros-handler.js";

// Conjunto que armazena números já sorteados (caso a opção de não repetir esteja ativada)
let numerosSorteados = new Set();

/**
 * Realiza o sorteio de números com base nos valores obtidos.
 * Os números sorteados são exibidos na interface do usuário.
 */
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

  // Adiciona os números sorteados na interface sem sobrescrever os anteriores
  resultados.forEach((numero) => {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    newDiv.className = "resultado-numero";
    newP.textContent = numero;
    newDiv.appendChild(newP);
    resultadoDiv.appendChild(newDiv);
  });
}
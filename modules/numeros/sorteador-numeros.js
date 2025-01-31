import { obterValores } from "./sorteador-numeros-handler.js";

/**
 * Sorteia números com base nos valores obtidos da função obterValores().
 * Os números são exibidos na div de resultados e podem ser gerados com ou sem repetição.
 */
export function sortearNumeros() {
  const { quantidade, comecoNum, finalNum, naoRepetir } = obterValores();
  const resultadoDiv = document.getElementById("resultado-numeros");
  const botaoSortear = document.getElementById("botaoSortear");

  if (!resultadoDiv) {
    console.error("Div de resultados não encontrada!");
    return;
  }

  // Obtém todos os números já sorteados na div
  const numerosSorteadosAnteriormente = Array.from(resultadoDiv.children)
    .map(div => parseInt(div.textContent, 10));

  // Gera todos os números possíveis dentro do intervalo
  const todosNumeros = Array.from(
    { length: finalNum - comecoNum + 1 }, 
    (_, i) => comecoNum + i
  );

  /**
   * Se a opção "não repetir" estiver ativada, filtramos os números
   * já sorteados para garantir que não sejam escolhidos novamente.
   */
  const numerosDiponiveis = naoRepetir
    ? todosNumeros.filter(num => !numerosSorteadosAnteriormente.includes(num))
    : todosNumeros;

  // Verifica se há números suficientes disponíveis para sortear
  if (naoRepetir && numerosDiponiveis.length < quantidade) {
    botaoSortear.disabled = true;
    return;
  }

  /** @type {number[]} Armazena os números sorteados. */
  const resultados = [];
  for (let i = 0; i < quantidade; i++) {
    // Sorteia um número aleatório do conjunto disponível
    const indiceAleatorio = Math.floor(Math.random() * (naoRepetir ? numerosDiponiveis.length : todosNumeros.length));
    const numeroSorteado = naoRepetir 
      ? numerosDiponiveis.splice(indiceAleatorio, 1)[0] // Remove o número sorteado do array
      : todosNumeros[Math.floor(Math.random() * todosNumeros.length)];
    
    resultados.push(numeroSorteado);
  }

  // Exibe os números sorteados na interface
  resultados.forEach((numero) => {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    newDiv.className = "resultado-numero";
    newP.textContent = numero;
    newDiv.appendChild(newP);
    resultadoDiv.appendChild(newDiv);
  });

  // Sempre habilita o botão quando "não repetir" está desativado
  botaoSortear.disabled = false;
}
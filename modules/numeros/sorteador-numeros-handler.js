/**
 * Obtém os valores inseridos pelo usuário nos campos do sorteador.
 * @returns {Object} Objeto contendo os valores necessários para o sorteio.
 */
export function obterValores() {
  return {
    quantidade: parseInt(document.getElementById("quantidade").value, 10),
    comecoNum: parseInt(document.getElementById("comecoNum").value, 10),
    finalNum: parseInt(document.getElementById("finalNum").value, 10),
    naoRepetir: document.getElementById("toggle-switch1")?.checked || false,
    botaoSortear: document.getElementById("botaoSortear")
  };
}

/**
* Valida os valores de entrada para garantir que o sorteio possa ocorrer corretamente.
* Desativa o botão de sorteio se os valores forem inválidos.
*/
export function validarValores() {
  const { quantidade, comecoNum, finalNum, botaoSortear, naoRepetir } = obterValores();

  // Verifica se os valores são válidos antes de habilitar o botão
  if (!quantidade || !comecoNum || !finalNum || comecoNum >= finalNum || 
      (quantidade > (finalNum - comecoNum + 1) && naoRepetir)) {
    botaoSortear.disabled = true;
  } else {
    botaoSortear.disabled = false;
  }
}
import { pegarNumeroAleatorioListaNomes, criarDivNome } from "./sorteador-nomes.js";

/**
 * Realiza o sorteio de nomes de uma lista e exibe os resultados.
 * 
 * @param {number} sorteados - Número total de sorteios já realizados.
 * @param {string[]} listaNomes - Lista de nomes disponíveis para sorteio.
 * @param {number} quantidade - Quantidade de nomes a serem sorteados.
 * @param {boolean} naoRepetir - Se `true`, evita que nomes já sorteados sejam sorteados novamente.
 * @param {HTMLElement} nomesSorteados - Elemento HTML onde os nomes sorteados serão exibidos.
 * @param {HTMLElement} erroMaximoNomes - Elemento HTML onde a mensagem de erro será exibida se a lista de nomes estiver vazia.
 * @param {HTMLElement} sortear - Elemento HTML do botão de sorteio, que será desativado (bloqueado) ao atingir o limite de nomes disponíveis.
 * 
 * @returns {number} - O número total de sorteios realizados até o momento. Retorna o valor atualizado de `sorteados`.
 */
export function sortearNomes(sorteados, listaNomes, quantidade, naoRepetir, nomesSorteados, erroMaximoNomes, sortear) {
  for (let i = 0; i < quantidade; i++) {
      if (listaNomes.length === 0) {
        erroMaximoNomes.style.display = "block";
        sortear.classList.add("botao-bloqueado");
        return sorteados;
      }
  
      const numeroAleatorio = pegarNumeroAleatorioListaNomes(listaNomes);
      const sorteado = listaNomes[numeroAleatorio];
  
      if (naoRepetir) {
        listaNomes.splice(numeroAleatorio, 1);
        console.log(listaNomes);
      }
      
      nomesSorteados.appendChild(criarDivNome(sorteado));
      sorteados += 1;
    }
  
  if (listaNomes.length === 0) {
    erroMaximoNomes.style.display = "block";
    sortear.classList.add("botao-bloqueado");
  }
  return sorteados;
}
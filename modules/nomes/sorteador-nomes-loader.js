import { pegarNumeroAleatorioListaNomes, criarDivNome } from "./sorteador-nome.js";

/**
 * Realiza o sorteio de nomes de uma lista e exibe os resultados.
 * 
 * @param {number} sorteados - Número total de sorteios já realizados.
 * @param {string[]} listaNomes - Lista de nomes disponíveis para sorteio.
 * @param {number} quantidade - Quantidade de nomes a serem sorteados.
 * @param {boolean} naoRepetir - Se `true`, evita que nomes já sorteados sejam sorteados novamente.
 * @param {HTMLElement} nomesSorteados - Elemento HTML onde os nomes sorteados serão exibidos.
 * @param {HTMLElement} totalNumerosSorteados - Elemento HTML onde será exibida a quantidade de sorteios realizados.
 */
export function sortearNomes(sorteados, listaNomes, quantidade, naoRepetir, nomesSorteados, totalNumerosSorteados) {
  for (let i = 0; i < quantidade; i++) {
      if (listaNomes.length === 0) {
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
  return sorteados;
}
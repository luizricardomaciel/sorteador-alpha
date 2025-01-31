import { pegarNumeroAleatorioListaNomes, criarDivNome } from "./sorteador-nome.js";

/**
 * Realiza o sorteio de nomes de uma lista e exibe os resultados.
 * 
 * @param {number} sorteados - Número total de sorteios já realizados.
 * @param {string[]} listaNomes - Lista de nomes disponíveis para sorteio.
 * @param {number} quantidade - Quantidade de nomes a serem sorteados.
 * @param {boolean} naoRepetir - Se `true`, evita que nomes já sorteados sejam sorteados novamente.
 * @param {HTMLElement} nomesSorteados - Elemento HTML onde os nomes sorteados serão exibidos.
 */
export function sortearNomes(sorteados, listaNomes, quantidade, naoRepetir, nomesSorteados, erroMaximoNomes) {
  for (let i = 0; i < quantidade; i++) {
      if (listaNomes.length === 0) {
        console.log("teste");
        erroMaximoNomes.style.display = "block";
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
    console.log("teste");
    erroMaximoNomes.style.display = "block";
  }
  return sorteados;
}
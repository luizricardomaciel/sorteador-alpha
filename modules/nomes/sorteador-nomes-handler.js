import { sortearNomes } from "./sorteador-nomes-loader.js";
import { validarTextarea } from "./sorteador-nome.js";

let primeiraVez = true;
let quantidadeNomes = 0;
let naoRepetir = false;
let listaNomes = [];
let sorteados = 0;

/**
 * Inicializa o processo de sorteio de nomes.
 * Esta função configura os eventos para interagir com os elementos da interface,
 * validar a entrada de dados, e realizar o sorteio de nomes com base na quantidade
 * selecionada pelo usuário.
 */
export const initSorteioNomes = () => {
  const quantidadeSortear = document.getElementById("quantidade-sortear");
  const textarea = document.querySelector(".textarea");
  const sortear = document.getElementById("sortear");
  const show_hide = document.getElementById("show-hide");
  const divTotalNomes = document.getElementById("divTotalNomes");
  const quantidadeNomesSorteados = document.getElementById(
    "quantidadeNomesSorteados"
  );
  const inputNaoRepetir = document.getElementById("toggle-switch");
  const voltar = document.getElementById("voltar");
  const nomesSorteados = document.getElementById("nomesSorteados");
  const totalNumerosSorteados = document.getElementById("sorteados");

  /**
   * Valida e atualiza a classe do textarea durante a digitação.
   * Adiciona a classe 'textarea-foco-erro' caso a entrada seja inválida.
   */
  textarea.addEventListener("input", function() {
    const validar = validarTextarea(textarea.value);
    if (!validar) {
      textarea.classList.add('textarea-foco-erro');
    } else {
      textarea.classList.remove('textarea-foco-erro');
    }
  })

   /**
   * Inicia o sorteio de nomes ao clicar no botão de sortear.
   * Valida a entrada e faz o sorteio dos nomes conforme a quantidade definida.
   */
  sortear.addEventListener("click", function () {
    const validar = validarTextarea(textarea.value);

    if (!validar) {
      textarea.classList.add('textarea-foco-erro');
      return;
    }

    // Exibe as áreas de sorteio e esconde os elementos anteriores
    nomesSorteados.style.display = "flex";
    show_hide.style.display = "None";
    voltar.style.display = "block";
    divTotalNomes.style.display = "flex";

    naoRepetir = inputNaoRepetir.checked;

     // Primeira vez que o sorteio é feito, processa os nomes da textarea
    if (primeiraVez == true) {
      divTotalNomes.style.display = "flex";
      primeiraVez = false;

      const valorTextarea = textarea.value;

      listaNomes = valorTextarea
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "" && item !== null);
      
      listaNomes = [...new Set(listaNomes)];

      quantidadeNomesSorteados.innerText = listaNomes.length; 
    }

    // Se a lista de nomes estiver vazia, não faz o sorteio
    if (listaNomes.length == 0) {
      return;
    }

    // Obtém a quantidade de nomes a serem sorteados
    const quantidade = quantidadeSortear.value;

    // Realiza o sorteio e o constrói na tela
    sorteados = sortearNomes(sorteados, listaNomes, quantidade, naoRepetir, nomesSorteados, totalNumerosSorteados);

     // Atualiza o total de nomes sorteados
    totalNumerosSorteados.innerHTML = sorteados;
  });

  /**
   * Restaura o estado inicial do sorteio, ocultando os elementos e limpando os dados.
   */
  voltar.addEventListener("click", function () {
    show_hide.style.display = "block";
    voltar.style.display = "none";
    nomesSorteados.innerHTML = "";
    nomesSorteados.style.display = "none";
    divTotalNomes.style.display = "none";
    listaNomes = [];
    primeiraVez = true;
    quantidadeNomes = 0;
    sorteados = 0;
  });
};
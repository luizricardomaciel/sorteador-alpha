import {
  pegarNumeroAleatorioListaNomes,
  criarDivNome,
} from "./sorteador-nome.js";

let primeiraVez = true;
let quantidadeNomes = 0;
let naoRepetir = false;
let listaNomes = [];

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

  sortear.addEventListener("click", function () {
    nomesSorteados.style.display = "flex";
    show_hide.style.display = "None";
    voltar.style.display = "block";
    divTotalNomes.style.display = "flex";
    if (inputNaoRepetir.checked) {
      naoRepetir = true;
    } else {
      naoRepetir = false;
    }

    if (primeiraVez == true) {
      divTotalNomes.style.display = "flex";
      primeiraVez = false;

      const valorTextarea = textarea.value;

      listaNomes = valorTextarea
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      console.log(listaNomes);
    }

    if (listaNomes.length == 0) {
      return;
    }

    listaNomes.forEach((nome) => {
      criarDivNome(nome);
    });

    const quantidade = quantidadeSortear.value;

    for (let i = 0; i < quantidade; i++) {
      if (listaNomes.length == 0) {
        return;
      }
      const numeroAletorio = pegarNumeroAleatorioListaNomes(listaNomes);
      const sorteado = listaNomes[numeroAletorio];

      if (naoRepetir == true) {
        listaNomes.splice(numeroAletorio, 1);
        console.log(listaNomes);
      }

      nomesSorteados.appendChild(criarDivNome(sorteado));
      quantidadeNomes += 1;
      quantidadeNomesSorteados.innerText = quantidadeNomes;
    }
  });

  voltar.addEventListener("click", function () {
    show_hide.style.display = "block";
    voltar.style.display = "none";
    nomesSorteados.innerHTML = "";
    nomesSorteados.style.display = "none";
    divTotalNomes.style.display = "none";
    listaNomes = [];
    primeiraVez = true;
    quantidadeNomes = 0;
  });
};



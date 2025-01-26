import { criarSorteadorNomePage } from "./pages/sorteador-nomes-page.js";
import {pegarNumeroAleatorioListaNomes, criarDivNome} from "./modules/sorteador-nome.js"

document.getElementById("root").appendChild(criarSorteadorNomePage());

const quantidadeSortear = document.getElementById("quantidade-sortear");
const textarea = document.querySelector(".textarea");
const sortear = document.getElementById("sortear");

sortear.addEventListener("click", function() {
    const quantidade = quantidadeSortear.value;
    const valorTextarea = textarea.value;

    const listaNomes = valorTextarea
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    console.log(listaNomes);

    listaNomes.forEach(nome => {
        criarDivNome(nome);
    });

    const numeroAletorio = pegarNumeroAleatorioListaNomes(listaNomes);

    console.log(listaNomes[numeroAletorio]);

    const sorteado = listaNomes[numeroAletorio];

    
});
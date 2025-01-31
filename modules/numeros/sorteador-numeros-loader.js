import { conteudoNumeros } from "../../pages/sorteador-numeros-page.js";  
import { validarValores } from "./sorteador-numeros-handler.js";
import { sortearNumeros } from "./sorteador-numeros.js";

/**
 * Carrega o sorteador de números na página e adiciona os eventos necessários.
 */
export function carregarSorteadorNumeros() {
  const root = document.getElementById("root");
  root.innerHTML = conteudoNumeros;

  document.getElementById("quantidade").addEventListener("input", validarValores);
  document.getElementById("comecoNum").addEventListener("input", validarValores);
  document.getElementById("finalNum").addEventListener("input", validarValores);
  document.getElementById("botaoSortear").addEventListener("click", sortearNumeros);

  validarValores();
}
import { conteudoNumeros } from "../../pages/sorteador-numeros-page.js";  
import { validarValores } from "./sorteador-numeros-handler.js";
import { sortearNumeros } from "./sorteador-numeros.js";

/**
 * Carrega o conteúdo do sorteador de números na página e adiciona os eventos necessários.
 */
export function carregarSorteadorNumeros() {
  const root = document.getElementById("root");
  root.innerHTML = conteudoNumeros;

  // Adiciona eventos para validar os valores de entrada conforme o usuário digita
  document.getElementById("quantidade").addEventListener("input", validarValores);
  document.getElementById("comecoNum").addEventListener("input", validarValores);
  document.getElementById("finalNum").addEventListener("input", validarValores);
  
  // Adiciona evento para o checkbox "não repetir"
  document.getElementById("toggle-switch1").addEventListener("change", validarValores);
  
  // Adiciona evento para o botão de sortear números
  document.getElementById("botaoSortear").addEventListener("click", sortearNumeros);

  // Valida os valores iniciais ao carregar a página
  validarValores();
}
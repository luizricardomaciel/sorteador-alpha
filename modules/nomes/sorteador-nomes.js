/**
 * Gera um número aleatório baseado no tamanho da lista de nomes.
 * 
 * @param {string[]} listaNomes - Lista de nomes disponíveis para sorteio.
 * @returns {number} - Índice aleatório dentro da lista de nomes.
 */
export function pegarNumeroAleatorioListaNomes(listaNomes) {
  const numeroAleatorio = Math.floor(Math.random() * listaNomes.length);

  return numeroAleatorio;
}

/**
 * Cria um elemento `<div>` contendo um nome sorteado.
 * 
 * @param {string} nome - O nome a ser exibido dentro da div.
 * @returns {HTMLDivElement} - Elemento `<div>` com um `<h2>` contendo o nome.
 */
export function criarDivNome(nome) {
  const div = document.createElement("div");
  div.classList.add("divNome");

  const h2 = document.createElement("h2");
  h2.innerText = nome;

  div.appendChild(h2);

  return div;
}

/**
 * Valida se o texto do textarea contém pelo menos um nome válido.
 * 
 * @param {string} texto - O conteúdo digitado no textarea.
 * @returns {boolean} - Retorna `true` se houver pelo menos um nome válido, caso contrário, retorna `false`.
 */
export function validarTextarea(texto) {
  const listaNomes = texto
  .split(",")
  .map((item) => item.trim())
  .filter((item) => item !== "");

return listaNomes.length > 0;
}

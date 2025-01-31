/**
 * Estrutura HTML do sorteador de nomes como uma string para ser injetada no DOM.
 * @constant {string}
 */
export function criarSorteadorNomePage() {
  const container = document.createElement("div");

  container.innerHTML = `
  <div class="container" id="spa-nomes">
    <div class="spa-result">
        <div class="title">
          <div class="icon">
            <h3>Abc</h3>
          </div>
          <h2>Sorteio de nomes</h2>
        </div>
        <div id="divTotalNomes">
          <p>Total de nomes: <span id="quantidadeNomesSorteados"></span></p>
          <p>Sorteados: <span id="sorteados"></span></p>
          <p id="erroMaximoNomes">Máximo de nomes atingidos</p>
        </div>
        <div id="show-hide">
        <div class="sorteador nomes">
          <p>Sortear</p>
          <input type="number" name="" id="quantidade-sortear" value="1" />
          <p>nome</p>
        </div>
        <div class="text">
          <textarea
            class="textarea"
            name=""
            placeholder="Separe os nomes por vírgulas"
          ></textarea>
        </div>
        <div class="opcoes-checkbox">
          <div class="opcoes">
            <div class="toggle-switch">
              <input type="checkbox" class="toggle-checkbox" id="toggle-switch" />
              <label class="toggle-label" for="toggle-switch"></label>
            </div>
            <p>Não repetir nome</p>
          </div>
        </div>
        </div>
        <button class="btn-primario" id="sortear">Sortear</button>
        <button class="btn-primario" id="voltar">Voltar</button>
        <div id="nomesSorteados"></div>
      </div>
  <div>
    `;

  return container;
}

export const conteudoNumeros = `
<div class="container" id="spa-numeros">
  <div class="spa-result">
    <div class="title">
      <div class="icon">
        <h3>123</h3>
      </div>
      <h2>Sorteio de Números</h2>
    </div>
    <div class="sorteador">
      <div class="input-sorteador">
        <p>Sorteador</p>
        <input type="number" id="quantidade" value="1" />
      </div>
      <div class="input-sorteador">
        <p>número entre</p>
        <input type="number" id="comecoNum" value="1" />
        <p>e</p>
        <input type="number" id="finalNum" value="100" />
      </div>
    </div>
    <div class="opcoes-checkbox">
      <div class="opcoes">
        <div class="toggle-switch">
          <input type="checkbox" class="toggle-checkbox" id="toggle-switch1" />
          <label class="toggle-label" for="toggle-switch1"></label>
        </div>
        <p>Não repetir número</p>
      </div>
      <button class="btn-primario" id="botaoSortear">Sortear</button>
      <div id="resultado-numeros"></div>
    </div>
  </div>
</div>
`;

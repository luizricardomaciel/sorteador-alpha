export function criarSorteadorNomePage() {
    const container = document.createElement("div");

    container.innerHTML = `
    <div class="spa-result">
        <div class="title">
            <div class="icon">
                <h3>Aa</h3>
                </div>
                <h2>Sorteio de nomes</h2>
            </div>
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
                <p>Não repetir número</p>
                </div>
            </div>
            <button class="btn-primario" id="sortear">Sortear</button>
            </div>`
            
    return container;
}
const root = document.getElementById("root");

const conteudoNumeros = `
  <div class="spa-result">
    <div class="title">
      <div class="icon">
        <h3>123</h3>
      </div>
      <h2>Sorteio de Números</h2>
    </div>
    <div class="sorteador">
      <p>Sorteador</p>
      <input type="number" id="quantidade" value="1" />
      <p>número entre</p>
      <input type="number" id="comecoNum" value="1" />
      <p>e</p>
      <input type="number" id="finalNum" value="100" />
    </div>
    <div class="opcoes-checkbox">
      <div class="opcoes">
        <div class="toggle-switch">
          <input type="checkbox" class="toggle-checkbox" id="toggle-switch1" />
          <label class="toggle-label" for="toggle-switch1"></label>
        </div>
        <p>Não repetir número</p>
      </div>
      <div id="resultado-numeros"></div>
    </div>
    <button class="btn-primario" id="botaoSortear">Sortear</button>
  </div>
`;

function carregarConteudo() {
    root.innerHTML = conteudoNumeros;

    document.getElementById("quantidade").addEventListener("input", validarValores);
    document.getElementById("comecoNum").addEventListener("input", validarValores);
    document.getElementById("finalNum").addEventListener("input", validarValores);
    document.getElementById("botaoSortear").addEventListener("click", sortearNumeros);

    validarValores();
}

function obterValores() {
    return {
        quantidade: parseInt(document.getElementById("quantidade").value, 10),
        comecoNum: parseInt(document.getElementById("comecoNum").value, 10),
        finalNum: parseInt(document.getElementById("finalNum").value, 10),
        naoRepetir: document.getElementById("toggle-switch1")?.checked || false,
        botaoSortear: document.getElementById("botaoSortear"),
    };
}

function validarValores() {
    const { quantidade, comecoNum, finalNum, botaoSortear, naoRepetir } = obterValores();

    if (!quantidade || !comecoNum || !finalNum || comecoNum >= finalNum || (quantidade > (finalNum - comecoNum + 1) && naoRepetir.checked)) {
        botaoSortear.disabled = true;
    } else {
        botaoSortear.disabled = false;
    }
}

function sortearNumeros() {
    const { quantidade, comecoNum, finalNum, naoRepetir } = obterValores();

    const resultados = [];
    const resultadoDiv = document.getElementById("resultado-numeros");

    resultadoDiv.innerHTML = '';

    if (quantidade > (finalNum - comecoNum + 1)) {
        const aviso = document.createElement("p");
        aviso.textContent = `A quantidade de números que você deseja sortear é maior que
        o intervalo dos dois números selecionados`;
        resultadoDiv.appendChild(aviso);
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        const numeroSorteado = Math.floor(Math.random() * (finalNum - comecoNum + 1)) + comecoNum;

        if (naoRepetir) {
            if (!resultados.includes(numeroSorteado)) {
                resultados.push(numeroSorteado);
            } else {
                i--;
            }
        } else {
            resultados.push(numeroSorteado);
        }
    }

    resultados.forEach((numero) => {
        const numResultado = document.createElement("p");
        numResultado.textContent = numero;
        resultadoDiv.appendChild(numResultado);
    });
}

carregarConteudo();
export function obterValores() {
    return {
      quantidade: parseInt(document.getElementById("quantidade").value, 10),
      comecoNum: parseInt(document.getElementById("comecoNum").value, 10),
      finalNum: parseInt(document.getElementById("finalNum").value, 10),
      naoRepetir: document.getElementById("toggle-switch1")?.checked || false,
      botaoSortear: document.getElementById("botaoSortear"),
    };
  }
  
  export function validarValores() {
    const { quantidade, comecoNum, finalNum, botaoSortear, naoRepetir } = obterValores();
  
    if (!quantidade || !comecoNum || !finalNum || comecoNum >= finalNum || (quantidade > (finalNum - comecoNum + 1) && naoRepetir)) {
      botaoSortear.disabled = true;
    } else {
      botaoSortear.disabled = false;
    }
  }
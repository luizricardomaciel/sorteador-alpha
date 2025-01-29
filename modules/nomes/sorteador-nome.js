export function pegarNumeroAleatorioListaNomes(listaNomes){
    const numeroAleatorio = Math.floor(Math.random() * listaNomes.length);

    return numeroAleatorio;
}

export function criarDivNome(nome){
    const div = document.createElement("div");
    div.classList.add("divNome");

    const h2 = document.createElement("h2");
    h2.innerText = nome;

    div.appendChild(h2);

    return div;
}
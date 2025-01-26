export function pegarNumeroAleatorioListaNomes(listaNomes){
    const numeroAleatorio = Math.floor(Math.random() * listaNomes.length);

    return numeroAleatorio;
}

export function criarDivNome(nome){
    const div = document.createElement("div");

    const p = document.createElement("p");
    p.innerText = nome;

    div.appendChild(p);
}
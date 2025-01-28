export function pegarNumeroAleatorioListaNomes(listaNomes){
    const numeroAleatorio = Math.floor(Math.random() * listaNomes.length);

    return numeroAleatorio;
}

export function criarDivNome(nome) {
    const listaNomes = valorTextarea
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    console.log(listaNomes);

    listaNomes.forEach(nome => {
        criarDivNome(nome);
    });

    const numeroAletorio = pegarNumeroAleatorioListaNomes(listaNomes);

    console.log(listaNomes[numeroAletorio]);

    
};

function pegarNumeroAleatorioListaNomes(listaNomes){
    const numeroAleatorio = Math.floor(Math.random() * listaNomes.length);

    return numeroAleatorio;
}

function criarDivNome(nome){
    const div = document.createElement("div");
    div.classList.add("divNome");

    const h2 = document.createElement("h2");
    h2.innerText = nome;

    div.appendChild(h2);

    return div;
}
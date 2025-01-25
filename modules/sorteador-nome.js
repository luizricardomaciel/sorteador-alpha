const quantidadeSortear = document.getElementById("quantidade-sortear");
const textarea = document.getElementById("textarea");
const sortear = document.getElementById("sortear");
const adicionarNomes = document.getElementById("adicionarNomes");

sortear.addEventListener("click", function() {
    adicionarNomes.innerHTML = "";
    const quantidade = quantidadeSortear.value;
    const valorTextarea = textarea.value;

    const listaNomes = valorTextarea
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    console.log(listaNomes);

    listaNomes.forEach(nome => {
        criarDivNome(nome);
    });
});

function criarDivNome(nome){
    const div = document.createElement("div");

    const p = document.createElement("p");
    p.innerText = nome;

    div.appendChild(p);
    adicionarNomes.appendChild(div);
}
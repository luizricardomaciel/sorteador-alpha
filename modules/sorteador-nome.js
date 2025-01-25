const quantidadeSortear = document.getElementById("quantidade-sortear");
const textarea = document.getElementById("textarea");
const sortear = document.getElementById("sortear");

sortear.addEventListener("click", function() {
    const quantidade = quantidadeSortear.value;
    const valorTextarea = textarea.value;

    const listaNomes = valorTextarea
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    console.log(listaNomes);
});
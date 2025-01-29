import { criarSorteadorNomePage } from "./pages/sorteador-nomes-page.js";
import { carregarConteudo } from "./modules/numeros/sorteadorNumeros.js";
import { initSorteioNomes } from "./modules/nomes/sorteador-nomes-handler.js";

const root = document.getElementById("root");

const init = () => {
    window.addEventListener("hashchange", function() {
        root.innerHTML = "";
        switch(this.window.location.hash) {
            case " ":
                root.appendChild(carregarConteudo());
                break;
            case "#SorteioNomes":
                root.appendChild(criarSorteadorNomePage());
                initSorteioNomes();
                break;
            default:
                root.appendChild(carregarConteudo());
        }
    })
}

window.addEventListener("load", function() {
    init();
});
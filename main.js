import { criarSorteadorNomePage } from "./pages/sorteador-nomes-page.js";
import { carregarSorteadorNumeros } from "./modules/numeros/sorteador-numeros-loader.js";
import { initSorteioNomes } from "./modules/nomes/sorteador-nomes-handler.js";

const root = document.getElementById("root");

/**
 * Inicializa o sistema de roteamento SPA baseado no hash da URL.
 * Adiciona um evento para monitorar mudanças na URL e carregar o conteúdo correto.
 */
const init = () => {
    window.addEventListener("hashchange", function() {
        root.innerHTML = ""; 
        
        switch (window.location.hash) {
            case "#SorteioNomes":
                root.appendChild(criarSorteadorNomePage());
                initSorteioNomes();
                break;
            case "#SorteioNumeros":
                carregarSorteadorNumeros();
                break;
            default:
                carregarSorteadorNumeros();
        }
    });
};

// Inicia a aplicação e dispara um evento para carregar o conteúdo correto na primeira carga
window.addEventListener("load", function() {
    init();
    window.dispatchEvent(new Event("hashchange"));
});
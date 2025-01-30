import { criarSorteadorNomePage } from "./pages/sorteador-nomes-page.js";
import { carregarSorteadorNumeros } from "./modules/numeros/sorteador-numeros-loader.js";
import { initSorteioNomes } from "./modules/nomes/sorteador-nomes-handler.js";

const root = document.getElementById("root");

const init = () => {
    window.addEventListener("hashchange", function() {
        // Limpar o conteúdo existente no root
        root.innerHTML = ""; 
        
        // Verificar qual página foi escolhida e carregar a correspondente
        switch (window.location.hash) {
            case "#SorteioNomes":
                // Adiciona o conteúdo de nomes sem sobrescrever o root
                root.appendChild(criarSorteadorNomePage());
                initSorteioNomes();
                break;
            case "#SorteioNumeros":
                // Carregar o sorteio de números
                carregarSorteadorNumeros();
                break;
            default:
                carregarSorteadorNumeros();
        }
    });
};

// Iniciar o carregamento ao carregar a página
window.addEventListener("load", function() {
    init();
    window.dispatchEvent(new Event("hashchange"));
});

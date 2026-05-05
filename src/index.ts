import { exercicio01 as cond01 } from "./exercicios/condicional/exercicio01.js";
import { exercicio02 } from "./exercicios/condicional/exercicio02.js";
import { exercicio03 } from "./exercicios/condicional/exercicio03.js";
import { exercicio04 } from "./exercicios/condicional/exercicio04.js";
// import { exercicio01 as rep01 } from "./exercicios/repeticao/exercicio01.js";
// import { exercicio02 as rep02 } from "./exercicios/repeticao/exercicio02.js";
// import { exercicio03 as rep03 } from "./exercicios/repeticao/exercicio03.js";
// import { exercicio04 as rep04 } from "./exercicios/repeticao/exercicio04.js";
// import { exercicio05 as rep05 } from "./exercicios/repeticao/exercicio05.js";
// import { exercicio01 as fun01 } from "./exercicios/funcoes/exercicio01.js";
// import { exercicio02 as fun02 } from "./exercicios/funcoes/exercicio02.js";
// import { exercicio03 as fun03 } from "./exercicios/funcoes/exercicio03.js";
// import { exercicio04 as fun04 } from "./exercicios/funcoes/exercicio04.js";
// import { exercicio05 as fun05 } from "./exercicios/funcoes/exercicio05.js";
// import { exercicio06 as fun06 } from "./exercicios/funcoes/exercicio06.js";
// import { exercicio07 as fun07 } from "./exercicios/funcoes/exercicio07.js";
// import { exercicio08 as fun08 } from "./exercicios/funcoes/exercicio08.js";
// import { exercicio09 as fun09 } from "./exercicios/funcoes/exercicio09.js";
// import { exercicio10 as fun10 } from "./exercicios/funcoes/exercicio10.js";
// import { exercicio01 as arr01 } from "./exercicios/arrays/exercicio01.js";
// import { exercicio02 as arr02 } from "./exercicios/arrays/exercicio02.js";
// import { exercicio03 as arr03 } from "./exercicios/arrays/exercicio03.js";
// import { exercicio04 as arr04} from "./exercicios/arrays/exercicio04.js";
// import { exercicio05 as arr05 } from "./exercicios/arrays/exercicio05.js";
// import { exercicio06 as arr06 } from "./exercicios/arrays/exercicio06.js";
// import { exercicio07 as arr07 } from "./exercicios/arrays/exercicio07.js";
// import { exercicio08 as arr08 } from "./exercicios/arrays/exercicio08.js";
// import { exercicio09 as arr09 } from "./exercicios/arrays/exercicio09.js";


   // Mapeamento dos Exercícios (Relaciona o data-ex com a função importada)
const listaExercicios: Record<string, Function> = {
    // Condicionais
    "ex-cond-01": cond01,
    "ex-cond-02": exercicio02,
    "ex-cond-03": exercicio03,
    "ex-cond-04": exercicio04,

    // // Repetição
    // "ex-rep-01": rep01,
    // "ex-rep-02": rep02,
    // "ex-rep-03": rep03,
    // "ex-rep-04": rep04,
    // "ex-rep-05": rep05,

    // // Funções
    // "ex-fun-01": fun01,
    // "ex-fun-02": fun02,
    // "ex-fun-03": fun03,
    // "ex-fun-04": fun04,
    // "ex-fun-05": fun05,
    // "ex-fun-06": fun06,
    // "ex-fun-07": fun07,
    // "ex-fun-08": fun08,
    // "ex-fun-09": fun09,
    // "ex-fun-10": fun10,
    

    // // Arrays
    // "ex-arr-01": arr01,
    // "ex-arr-02": arr02,
    // "ex-arr-03": arr03,
    // "ex-arr-04": arr04,
    // "ex-arr-05": arr05,
    // "ex-arr-06": arr06,
    // "ex-arr-07": arr07,
    // "ex-arr-08": arr08,
    // "ex-arr-09": arr09,
};



document.querySelectorAll('.btn-run').forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const exId = target.getAttribute('data-ex') || "";
        const codeId = target.getAttribute('data-code') || "";
        
        // PEGAR O ID DO TERMINAL AQUI
        const terminalId = target.getAttribute('data-terminal') || "";

        if (exId && listaExercicios[exId]) {
            // 1. MOSTRA O CÓDIGO
            const codeElement = document.getElementById(codeId);
            if (codeElement) {
                codeElement.innerText = listaExercicios[exId].toString();
            }

            // 3. EXECUTA O EXERCÍCIO
            // Limpa o terminal antes de rodar (opcional, mas recomendado)
            const terminal = document.getElementById(terminalId);
            if (terminal) terminal.innerHTML = "";

            // PASSE O terminalId AQUI DENTRO!
            listaExercicios[exId](terminalId); 
        }
    });
});
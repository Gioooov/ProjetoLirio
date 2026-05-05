// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.
export function exercicio04(outputId: string): void {
    const terminal = document.getElementById(outputId);
    
    const print = (msg: string) => {
        if (terminal) {
            terminal.innerHTML += `<div>> ${msg}</div>`;
        
            terminal.scrollTop = terminal.scrollHeight;
        }
    };



    let n1 = Number(prompt('Diga o primeiro numero:'))
    let n2 = Number(prompt('Digite o segundo:'))
    if (isNaN(n1 || n1)) {
        print("Erro: E valido apenas numeros.")
    }

    let resultado: string =
        n1 === n2 ? "Números iguais" : n1 > n2 ? "Primeiro numero é maior." : "Segundo numero é maior."
    print(resultado) //:n1< n2
}
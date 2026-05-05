// Crie um programa que solicite dois números e simule
//  um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

export function exercicio03(outputId: string): void {
    const terminal = document.getElementById(outputId);
    
    const print = (msg: string) => {
        if (terminal) {
            terminal.innerHTML += `<div>> ${msg}</div>`;
        
            terminal.scrollTop = terminal.scrollHeight;
        }
    };

    let n1: number = Number(prompt('Diga um numero para fazer seu calculo: '))
    let n2: number = Number(prompt('Diga outro numero:'))

    let entrada:number = Number(prompt('1 - Soma' +
        '\n 2 - Subtração' +
        '\n 3 - Multiplicação' +
        '\n 4 - Divisão'))

    let menu = Number(entrada)

    if (isNaN(n1 || n2 || menu)) {
        print("Erro: E aceito apenas numeros.")
    }

    let cal: number


    switch (menu) {
        case 1:
            cal = n1 + n2
            print(`Resultado: ${cal}`)
            break
        case 2:
            cal = n1 - n2
            print(`Resultado: ${cal}`)
            break
        case 3:
            cal = n1 * n2
            print(`Resultado: ${cal}`)
            break
        case 4:
            cal = n1 / n2
            print(`Resultado: ${cal}`)
            break
        default:
            print('Opção inválida.')
    }


}

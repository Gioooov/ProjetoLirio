// Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
// export function exercicio02(): void {
export function exercicio02(outputId: string): void {
    const terminal = document.getElementById(outputId);
    
    const print = (msg: string) => {
        if (terminal) {
            terminal.innerHTML += `<div>> ${msg}</div>`;
        
            terminal.scrollTop = terminal.scrollHeight;
        }
    };

let entrada = String(prompt('Diga uma mês (em numero) para saber sua estação.'))
let mes:number = Number(entrada)

let estacao:string = "" // TypeScript não reclama que a variável pode estar sem valor.

    if(isNaN(mes) || mes < 1 || mes> 12){  // poderia ser um default??
        print("Erro: digite um mês válido entre 1 e 12")
        return        
    }

switch (mes){
    case 1:
    case 2:
    case 3:
        estacao ='Verão'
        break
    case 4:
    case 5:
    case 6:
        estacao ='Outono'
        break   
    case 7:
    case 8:
    case 9:
        estacao ='Inverno'
        break
    case 10:
    case 11:
    case 12:
        estacao ='Primavera'
        break

    
}
print(`A estação do ano correspondente ao mês ${mes} é ${estacao}`)
}
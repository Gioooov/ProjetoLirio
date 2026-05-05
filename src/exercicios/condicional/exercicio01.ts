// Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
export function exercicio01(outputId: string): void {
    const terminal = document.getElementById(outputId);
    
    const print = (msg: string) => {
        if (terminal) {
            terminal.innerHTML += `<div>> ${msg}</div>`;
          
            terminal.scrollTop = terminal.scrollHeight;
        }
    };


let numero: number= Number(prompt("Diga um numero:"))
    if(isNaN(numero)){
        print('Erro: isso não é um número')
        return
    }
    if (numero % 2 == 0){
        print('Seu numero é par!')
    }else{
        print('Seu numero é impar!')
    }
    if(numero >= 0){
        print('E positivo.')
    }else{
        print('E negativo.')
    }

 }
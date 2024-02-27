//cria uma funcao sortear usando de funcao seta
const sortear = () => {

// uma variavel chamada nomes, tem 5 elementos
    let nomes = ["SARINHA", "MARIAZINHA", "VIVIANE", "BELLA", "LAURINHA"];

//declara uma var chamada h1nome, q guarda no documento do html um id chamado "nome"
    let h1Nome = document.getElementById("nome");

//cria uma variavel chamada achouNumero com valor de 0
    let achouNumero = false; 

//variavel chamada numeroSorteado sem valor
    let numeroSorteado;

//algoritmo de um lop para gerar um numero aleatorio de 0  a 99 ate q esse numero seja menor q o array "achouNomes"
    while (achouNumero == false) { 
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }
    switch (numeroSorteado) {  //switch = trocar em caso de zero
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

        default: //caso nao tenha numero, ele da uma mensagem padrao
            h1Nome.innerText = "Ops! nome nao consta na lista.";
            break;
    }
    h1Nome.innerText += "O numero sorteado foi: " + numeroSorteado; // += recebe a propria variavel com o proprio metodo, mais oq eu qro q apareça.
}
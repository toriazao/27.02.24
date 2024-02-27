//declaracao de variavel, nome somente leitura
const variavel1 = "valor somente leitura";  

//var - declaracao de variavel, denominada variavel2 com valor editavel
var variavel2 = "valor editavel";           

//algoritimo, transformar a variavel em um valor nao permitido
try { 

//acoes do aloritmo try (linha 5,6)
    variavel1 = "valor nao permitido"; 

// para enviar uma mensagem de erro no console do navegador, da variavel1
    console.log("A variavel foi alterada para: ", variavel1);

// e = variavel do erro, tudo q esta em parenteses e parametro
} catch (e) {  

// para enviar uma mensagem de erro no console do navegador
    console.error("Ops! Ocorreu um erro: ", e);
}

// e usado para envolver o código que pode potencialmente lançar uma exceção
try {

// uma variavel que o nome e "valor permitido" e encerra com ;
    variavel2 = "valor permitido";

//imprime o texto no Console como uma mensagem de log, da variavel2
    console.log("A variavel2 foi alterada para: ", variavel2);

// ja coloquei
} catch (e) {

// ja coloquei
    console.error("Ops! Ocorreu um erro: ", e);
}
// e uma variavel, chamada ""tempoFilme" e o valor e de 60, terminado em ;
var tempoFilme = 60; // em segundos

// e uma variavel, chamada ""tempoFilme" e o valor e de 0, terminado em ;
var inicioFilme = 0; // em segundos

// for (usada para lop) a variavel domina o "t" e recebe valor de 0, se ela for menor q tempo filme 't++' adiciona t a cada lop ate q seja tempofilme
    for (var t = 0; t < tempoFilme; t++) {

// função: A função que você deseja executar após o tempo definido. tempo: O tempo, em milissegundos, que você deseja aguardar antes de executar a função
        setTimeout(function() {

// limpa o console, se o ambiente permitir.           
            console.clear();

// imprime no console uma mensagem dizendo q o filme esta sendo assistido
            console.log("assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos.");

// esta aumentando 1 segundo na variavel inicio filme
            inicioFilme++;

//esta relacionada a funcao setTimeout
        },t*1000);
    }
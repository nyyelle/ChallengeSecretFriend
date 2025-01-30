//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Adicionar nomes
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo').value;

    if (input == '') {
        exibirTexto('p', 'Por favor, insira um nome.');
    } else {
        let nomeAmigo = document.querySelector('input').value;
        listaAmigos.push(nomeAmigo);
        console.log(listaAmigos);
    }
    console.log('Nome adicionado com sucesso!')
    limparNome();
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Adicionar nomes
let listaAmigos = [];

function adicionarAmigo() {
    if (verificarNome()) {
        atualizarLista();
        console.log('Nome adicionado com sucesso!');
        exibirTexto('mensagem-erro', '');
    }
    limparNome();
}

// Método de verificação de nomes duplicados
function verificarNome() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == '') {
        exibirTexto('mensagem-erro', 'Por favor, insira um nome.');
        return false;
    }  

    if (listaAmigos.includes(nomeAmigo)) {
        exibirTexto('mensagem-erro', 'Esse nome já foi adicionado.')
        return false;
    }

    if(!isNaN(nomeAmigo)) {
        exibirTexto('mensagem-erro', 'Digite um nome válido (não use número).')
        return false;
    }

    listaAmigos.push(nomeAmigo);
    return true;
}

// Método para exibir texto
function exibirTexto(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
} 

// Método para limpar o campo de entrada
function limparNome() {
    nome = document.getElementById('amigo');
    nome.value = ''; 
}


// Atualizar lista de amigos
function atualizarLista() {
     let listaAmigosElemento = document.getElementById('listaAmigos');
     listaAmigosElemento.innerHTML = '';

     listaAmigos.forEach(nomeAmigo => {
        let novoItem = document.createElement('li');
        novoItem.innerText = nomeAmigo;
        listaAmigosElemento.appendChild(novoItem);
     });  
}

let ultimoSorteado = null;

// Metodo para sortear amigo
function sortearAmigo() {
    // let nomesLista = document.querySelector('amigo').value;
    if (listaAmigos.length === 0) {
        exibirTexto('mensagem-erro', 'A lista está vazia. Por favor, adicione um nome.');
        return;  
    }  

    if (listaAmigos.length === 1) {
        exibirTexto('mensagem-erro', 'Adicione mais nomes para sortear novamente.')
    }

    let indiceAleatorio;

    do {
            indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    } while (listaAmigos[indiceAleatorio] === ultimoSorteado && listaAmigos.length > 1); 
    

    ultimoSorteado = listaAmigos[indiceAleatorio];
    let resultadoNomeAmigo = listaAmigos[indiceAleatorio];
        
    let nomeEscolhido = document.getElementById('resultado');
    nomeEscolhido.innerHTML = `O amigo escolhido foi: ${resultadoNomeAmigo}`;
}

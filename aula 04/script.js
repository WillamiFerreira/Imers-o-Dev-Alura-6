/*Criar um botão para remover um filme na tela;
Além de colocar a imagem do filme, também adicionar o nome por meio de outro input;
Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme.*/

var listaImagens = [];
var listaTitulos = [];
function adicionarFilme() {
    var containerImagens = document.querySelector("#listaFilmes");

    //Obtendo e atribuindo à variáveis o link da imagem e título.
    var linkImagem = document.querySelector("#filme").value;
    var titulo = document.querySelector("#titulo").value;

    //adicionando a nova imagem e titulo em suas respectivas listas.
    listaImagens.push(linkImagem);
    listaTitulos.push(titulo);

    //adicionando a última imagem da lista dentro do container de imagens
    containerImagens.innerHTML += "<img src="+ listaImagens[listaImagens.length-1] + ">";
    //imagemFilme = "0";

    //limpando os campos
    document.querySelector('#filme').value = "";
    document.querySelector('#titulo').value = "";
}
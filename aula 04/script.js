/*Criar um botão para remover um filme na tela;
Além de colocar a imagem do filme, também adicionar o nome por meio de outro input;
Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme.*/

var listaImagens = [];
var listaTitulos = [];
var listaTreilers = [];
var listaFilmes = [];

var containerImagens = document.querySelector("#listaFilmes");

function adicionarFilme() {
    //limpando o container de imagens para que elas não se repetirem.
    containerImagens.innerHTML = "";
    listaFilmes = []

    //Obtendo e atribuindo à variáveis o link da imagem e título.
    var linkImagem = document.querySelector("#filme").value;
    var titulo = document.querySelector("#titulo").value;
    var linkTrailer = document.querySelector('#trailer').value;

    //tratamento de erro 
    var novaFrase = []
    var palavras = titulo.split(" ");

    for (var i = 0; i < palavras.length; i++) {
        var novaPalavra = palavras[i][0].toUpperCase() + palavras[i].substr(1).toLowerCase();
        novaFrase.push(novaPalavra)
    }
    novaFrase = novaFrase.join(" ");

    //adicionando a nova imagem e titulo em suas respectivas listas.
    listaImagens.push(linkImagem);
    listaTreilers.push(linkTrailer);
    listaTitulos.push(novaFrase);

    //adicionando a última imagem da lista dentro do container de imagens
    for (var i = 0; i < listaImagens.length; i++) {
        var newBannerContainer = document.createElement("div"); //cria um elemento div

        newBannerContainer.setAttribute("class", "banner-container"); // adiciona uma class

        newBannerContainer.innerHTML = ` ${listaTitulos[i]} <a href="${listaTreilers[i]}" target="_blank"><img src="${listaImagens[i]}"></a>`; //usando o innerHTML, é atribuido o nome é imagem ao container criado 
        
        listaFilmes.push(newBannerContainer) //adicionando o novo filme no final da lista de itens.
        containerImagens.appendChild(newBannerContainer) //adiciona o novo filme na lista
    }

    //console.log(listaFilmes)

    //limpando os campos
    document.querySelector('#filme').value = "";
    document.querySelector('#titulo').value = "";
    document.querySelector('#trailer').value = "";

}

function removerFilme() {
    //Obtendo o nome do filme que deseja excluir
    var filmeParaExcluir = document.querySelector("#filmeaexcluir").value;

    containerImagens.innerHTML = "";
    //istaFilmes = []

    /*Tratamento de erro - deixando a primeira letra da cada parava em caixa alta*/
    var novaFrase = []
    var palavras = filmeParaExcluir.split(" ");

    for (var i = 0; i < palavras.length; i++) {
        var novaPalavra = palavras[i][0].toUpperCase() + palavras[i].substr(1).toLowerCase();
        novaFrase.push(novaPalavra)
    }
    novaFrase = novaFrase.join(" ");

    //Excluindo elementos
    for (var i = 0; i < listaImagens.length; i++) {
        if (novaFrase == listaTitulos[i]){
            listaImagens.splice(i, 1)
            listaTitulos.splice(i, 1)
            listaFilmes.splice(i, 1)
        }
    }

    for(item of listaFilmes){
        containerImagens.appendChild(item)
    }



    //limpando o campo
    document.querySelector('#filmeaexcluir').value = "";
}
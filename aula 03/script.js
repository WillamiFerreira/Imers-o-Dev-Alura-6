//criar duas listas, uma com banners de filmes e outra com seus nomes.
var moviesContainer = document.querySelector(".movies-container");
var moviesList = ["https://www.shoppingvilaolimpia.com.br/sites/svo/files/cinema/tudo-em-todo-o-lugar-ao-mesmo-tempo_1.jpg", "https://upload.wikimedia.org/wikipedia/pt/0/06/Bird_Box_-_filme_p%C3%B4ster.jpeg"];
var moviesNames = ["Tudo em todo lugar ao mesmo tempo", "Bird Box"];


var i = 0

while (i < moviesList.length){
    if (moviesList[i].includes("jpg")){
        "<img src="+moviesList[i]+">";
    } else {
        moviesContainer.write('Formato inválido')
    }
    i++
}


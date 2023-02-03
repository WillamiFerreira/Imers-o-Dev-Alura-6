var moviesContainer = document.querySelector(".movies-container");
var bannerContainer = document.querySelectorAll(".banner-container");
var moviesList = [
    "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/0/06/Bird_Box_-_filme_p%C3%B4ster.jpeg",
    "https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_FMjpg_UX1000_.jpg",
    "https://cinemas.nos.pt/_layouts/15/Handlers/RenderImage.ashx?file=52936.jpg",
    "https://blogger.googleusercontent.com/img/a/AVvXsEjTQn3JHV-BAezcgkir1UG2yPI3HtagWK3rXD6m_16It8z0d27E_o6b0KXreQyypAD8WP6AIx49QqDH6hjkd4fRQI3jxad9kLi2Ht3TVVsft0Wj11ppc24OhTeW7RB-DwQlgi0NZqybLcpj",
    "https://www.beiramarshopping.com.br/fmanager/beiramar2017/filmes/t/imagem_capa1782_3.jpg",
    "https://images-americanas.b2w.io/produtos/01/00/item/7245/0/7245097GG.jpeg",
    "https://br.web.img3.acsta.net/pictures/22/10/14/11/42/0892176.jpg",
    "https://wucomsvisualliteracy.files.wordpress.com/2020/03/mv5bztlinwjhm2ytndc1mc00ytk1lwe2mgytzme4m2y5oddlnzqzxkeyxkfqcgdeqxvymzy0mte3nzu40._v1_-1-568x900-1.jpg?w=568"
];

var moviesNames = ["Midsommar", "Bird Box", "Glass Onion", "X", "Marcas da Maldição", "Sorria", "Halloween", "Piggy", "Nós"];


var i = 0

while (i < moviesList.length) {
    var newBannerContainer = document.createElement("div");
    newBannerContainer.setAttribute("class", "banner-container");
    if (moviesList[i].includes("jpg")) {
        var newBanner = moviesList[i];
        newBannerContainer.innerHTML = ` ${moviesNames[i]} <img src="${newBanner}">`;
        moviesContainer.appendChild(newBannerContainer);

    } else {
        newBannerContainer.innerHTML = `${moviesNames[i]}<img src="https://lh3.googleusercontent.com/pw/AMWts8BTVndnmuCgLeyqcfhtRpHFF9SDORJeZOXj_JeoEP-tFiwotjBADaMbYjuwYUK8-cVPqiiK_I8pUgwAl10-qt8rhukBjl74Xf4TC9edDMJvrcA07AG1LPAMHTXFZfQcyOWVv1fqknE9J447IIqiRYFrYw=w170-h250-no?authuser=0" title="Apenas imagens com extensão jpg são válidas">`
        moviesContainer.appendChild(newBannerContainer);
    }
    i++
}
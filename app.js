    let apiMooviePopular = "movie/popular";
    let urlMoviePop ="https://api.themoviedb.org/3/"+apiMooviePopular+"?api_key=3d976d0316fc7765939b6e028d8ae96f&language=pt-BR";


    let apiMoovieUltimoLancamento = "movie/upcoming";
    let urlUltimoLancamento ="https://api.themoviedb.org/3/"+apiMoovieUltimoLancamento+"?api_key=3d976d0316fc7765939b6e028d8ae96f&language=pt-BR";


    let apiMoovieCartaz = "movie/now_playing";
    let urlCartaz ="https://api.themoviedb.org/3/"+apiMoovieCartaz+"?api_key=3d976d0316fc7765939b6e028d8ae96f&language=pt-BR";

function showPopularMovies(){
    let sectionTela = document.getElementById('divListaFilmes');
    let texto = '';

    let dados = JSON.parse(this.responseText);

    for(i = 0; i<dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;
        texto = texto + `
        <div class="card col-12 col-lg-3 col-md-4 col-sm-12">
                 <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" width="200" alt="FilmeXPTO">
                 <div class="card-body">
                     <h5 class="card-title">${filme.title}</h5>
                     <p class="card-text">${filme.overview}</p>
                     <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary">Veja mais</a>
                 </div>
             </div>
        `;
    }
    sectionTela.innerHTML = texto;
}

function showUpcomingMovies(){
    let sectionTela = document.getElementById('divListaFilmesUltimo');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    console.log(dados);
    for(i = 0; i<dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;
        texto = texto + `
        <div class="card col-12 col-lg-3 col-md-4 col-sm-12 ">
                 <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" width="200" alt="FilmeXPTO">
                 <div class="card-body VejaMais">
                     <h5 class="card-title">${filme.title}</h5>
                     <p class="card-text">${filme.overview}</p>
                     <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary btnVejaMais">Veja mais</a>
                 </div>
             </div>
        `;
    }
    sectionTela.innerHTML = texto;
}

function showNowPlayingMovies(){
    let sectionTela = document.getElementById('divListaFilmesCartaz');
    let texto = '';

    let dados = JSON.parse(this.responseText);
   
    for(i = 0; i<dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;
        texto = texto + `
        <div class="card col-12 col-lg-3 col-md-4 col-sm-12 ">
                 <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" width="200" alt="FilmeXPTO">
                 <div class="card-body">
                     <h5 class="card-title">${filme.title}</h5>
                     <p class="card-text">${filme.overview}</p>
                     <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary">Veja mais</a>
                 </div>
             </div>
        `;
    }
    sectionTela.innerHTML = texto;
}

function getMovies(url){
    let xhr = new XMLHttpRequest();

    if(url ===  urlMoviePop){
        xhr.onload = showPopularMovies;
    }
    else if(url === urlUltimoLancamento){
        xhr.onload = showUpcomingMovies;
    }
    else if(url === urlCartaz){
        xhr.onload = showNowPlayingMovies;
    }
    else{
        alert('url inválida!');
    }

    xhr.open('GET', url, false);
    xhr.send();
}

getMovies(urlMoviePop);
getMovies(urlUltimoLancamento);
getMovies(urlCartaz);
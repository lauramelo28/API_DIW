const params = new URLSearchParams(location.search); //
let id = params.get('id');

dadosFilmes = JSON.parse(localStorage.getItem('db_filmes'));
let idxFilme = dadosFilmes.results.findIndex((elem) => elem.id == id)

idxFilme = 0;

if (idxFilme > -1) {
    let filme = dadosFilmes.results[idxFilme];

    document.getElementById('titulo').innerHTML = filme.title;

    document.getElementById('divDetalheFilme').innerHTML = `
        <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Card image cap">
    <div class="card-body">
        <p class="card-text">${filme.overview}</p>
    </div>
    <br>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Popularidade:</strong> ${filme.popularity} </li>
        <li class="list-group-item"><strong>Data de lançamento:</strong> ${filme.release_date} </li>
        <li class="list-group-item"><strong>Avaliação:</strong> ${filme.vote_average}</li>
    </ul>
 </div>    

 `

}
else {
    alert('Filme não encontrado');
}

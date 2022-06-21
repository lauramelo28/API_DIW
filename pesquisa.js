function apiProcura(){
    let query=document.getElementById('texto_pesquisado').value
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeResultados;
    xhr.onerror = exibeErro;
    xhr.open('GET',`https://api.themoviedb.org/3/search/movie?api_key=3d976d0316fc7765939b6e028d8ae96f&language=pt-BR&query=${query}`, false)
    xhr.send();
}

function exibeErro(){
    alert('Houve um erro com a requisição');
}

function exibeResultados(){
    let sectionTelaPesquisa = document.getElementById('dadosRetornados');
    let textoPesquisa = '';

    let dadosPesquisa = JSON.parse(this.responseText);
    console.log(dadosPesquisa);

    if(dadosPesquisa.results.length === 0){
        textoPesquisa = textoPesquisa + `
            <div class="itens-pesquisados">
                <p>Não foram encontrado resultados para a pesquisa feita!</p>
            </div>`
        ;
    }
    else{
        for(i = 0; i<dadosPesquisa.results.length; i++){
            let retornoPesquisa = dadosPesquisa.results[i];
            textoPesquisa = textoPesquisa + `
            <div class="box-cartaz card col-12 col-lg-3 col-md-4 col-sm-12">
                    <a href="detalhes.html?id=${retornoPesquisa.id}">
                        <img src="https://image.tmdb.org/t/p/w500${retornoPesquisa.poster_path}" class="imagempesquisa">
                    </a>

                    <span class="titulo"><b>${retornoPesquisa.original_title}</b></span>
                    <span class="data"><br><b>Data de Lançamento: </b>${retornoPesquisa.release_date}</span>
                    <span class="popularidade"><br><b>Ordem de popularidade: </b>${retornoPesquisa.popularity}</span>
                    <span class="avaliacao"><br><b>Avaliação: </b>${retornoPesquisa.vote_average}<br></span>

                    <br>

                    <a href="detalhes_filme.html">
                        <button id="vejamais">VEJA MAIS</button>
                    </a>
            </div>`
            
        }
    }
    sectionTelaPesquisa.innerHTML=textoPesquisa;
}

document.getElementById('pesq').addEventListener('click', apiProcura);
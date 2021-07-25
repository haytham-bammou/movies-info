class UI {
    constructor()
    {
        this.movies = document.getElementById('movies');
        this.movie = document.getElementById('movie'); 
    }
    paint(data)
    {
        let output = '';
        const movies = data.Search;
        movies.forEach(movie => {
            output += `
                        <div class='col-md-3'>
                            <div class='well text-center'>
                                <img src="${movie.Poster}" class="mt-2">
                                <h5>${movie.Title}</h5>
                                <a onclick="movie.movieSelected('${movie.imdbID}')" class="btn btn-primary mt-2" href="#">Movie Details</a>
                            </div>
                         </div>
            `;
        });
        this.movies.innerHTML = output;
    }
    paintSingle(data){
        let output = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${data.Poster}" class="thumbnail">
                </div>
                <div class="col-md-8">
                    <h2>${data.Title}</h2>
                    <ul class="list-group">
                    <li class="list-group-item"><strong>Genre :</strong> ${data.Genre}</li>
                    <li class="list-group-item"><strong>Released :</strong> ${data.Released}</li>
                    <li class="list-group-item"><strong>Rated :</strong> ${data.Rated}</li>
                    <li class="list-group-item"><strong>IMDB Rating :</strong> ${data.imdbRating}</li>
                    <li class="list-group-item"><strong>Director :</strong> ${data.Director}</li>
                    <li class="list-group-item"><strong>Writer :</strong> ${data.Writer}</li>
                    <li class="list-group-item"><strong>Actors :</strong> ${data.Actors}</li>
                    </ul>
                </div>
                <div class="row">
                <div class="container">
                    <h3 class="mt-2">Plot</h3><hr>
                        <p class="lead">${data.Plot}</p><hr>
                        <a href="http://imdb.com/title/${data.imdbID}" target="_blank" class="btn btn-primary">View in imdb</a>
                        <a href="index.html" class="btn btn-default">go back to search</a>
                    </div>
                </div>
            </div>
        `;
        this.movie.innerHTML = output; 
    }
    clearMovies(){
        this.movies.innerHTML = '';
    }
}
class Movie {
    constructor(){
        this.apiKey = '220647b9'; 
    }
    async getMovies(search){
        const responseMovies = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${this.apiKey}`)
        return await responseMovies.json();
    }
    movieSelected(id){
        sessionStorage.setItem('movieId' , id);
        window.location= 'movie.html';
        return false;
    }
    async getMovie(){
        const id = sessionStorage.getItem('movieId');
        const responseMovies = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`)
        return await responseMovies.json();
    }
}
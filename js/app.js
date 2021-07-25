const movie = new Movie;
const ui = new UI;

if(document.querySelector('#form'))
{
    document.querySelector('#form').addEventListener('submit' , (e)=>{
        e.preventDefault();
        const movieText = document.querySelector('#movie').value;

        if(movieText !== '')
        {   
            movie.getMovies(movieText)
                .then(data => {
                    console.log(data);
                    ui.paint(data);
                });

        } else {
            ui.clearMovies();
        }

    });
}

if(document.querySelector('#movie'))
{
    document.addEventListener('DOMContentLoaded',(e) => {
        movie.getMovie()
            .then(data => {
                ui.paintSingle(data);
            })
    })
}
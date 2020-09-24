import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Movie =  async () => {
    const id = getHash();
    const movie = await getData();

    for (let i = 0; i < movie.results.length; i++) {
        const pelicula = movie.results[i];
        if(movie.results[i].id == id){
            var fecha_completa = new Date(pelicula.release_date);
            var year = fecha_completa.getFullYear();
            
            const view = `
            <br>
            <div class="Movies-inner">
                <article class="Movies-card h2">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${pelicula.poster_path}">
                    <a role="button" href="" class="btn btn-info btn-sm btn-block">Volver</a>
                </article>
    
                <article class="Movies-card h3">
                <h6 class="display-4">${pelicula.original_title} - ${year}</h6>
                <hr>
                    <h3>${pelicula.title}</h3>
                    <h3>ID de la pelicula: <span>${pelicula.id}</span></h3>
                    <h3>Lenguaje: <span>${pelicula.original_language}</span></h3>
                    <h3>Resumen: <span>${pelicula.overview}</span></h3>
                    <h3>Valoracion: <span>${pelicula.vote_average} / 10</span></h3>
                </article>
                
            </div>
            <div class="Movies-inner">
                <article class="Movies-card h2">
                   
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${pelicula.backdrop_path}">
                    <a role="button" href="" class="btn btn-info btn-sm btn-block">Volver</a>
                </article>
    
                <article class="Movies-card h3">
                <h6 class="display-4">${pelicula.original_title} - ${year}</h6>
                <hr>
                    <h3>${pelicula.title}</h3>
                    <h3>Fecha de estreno: <span>${pelicula.release_date}</span></h3>
                    <h3>Lenguaje: <span>${pelicula.original_language}</span></h3>
                    <h3>Rating: <span>${pelicula.popularity}</span></h3>
                    <h3>Vistas: <span>${pelicula.vote_count}</span></h3>
                    <h3>Contenido adulto: <span>${pelicula.adult}</span></h3>
                    <h3>Trailer: <span>${pelicula.video}</span></h3>
                </article>
                
            </div> 
            
        `
        return view  

        }
    }

    
}

export default Movie;
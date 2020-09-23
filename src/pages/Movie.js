import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Movie =  async () => {

    const id = getHash();
    const movie = await getData(id);
    const view = `
        <div class="Movies-inner">
            <article class="Movies-card h3">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.original_title}</h2>
            </article>

            <article class="Movies-card h3">
                <h3>ID pelicula: <span>${movie.id}</span></h3>
                <h3>Lenguaje: <span>${movie.original_language}</span></h3>
                <h3>Rating: <span>${movie.popularity}</span></h3>
                <h3>Vistas: <span>${movie.vote_count}</span></h3>
                <h3>Resumen: <span>${movie.overview}</span></h3>
            </article>
        </div> 
    `
    return view
}

export default Movie;
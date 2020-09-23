import getData from '../utils/getData';

const Home =  async () => {

    const movies = await getData();
    const view =  `
        <div class="Movies">
            ${movies.results.map(movie => `
            <article class="Movies-item img">
                <a href="#/Movie/${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}">
                    <h2>${movie.title}</h2>
                </a>
                
            </article>
            `).join('') }
        </div>
        
        `
        
    return view;

}

export default Home;
const API = `http://api.themoviedb.org/3/movie/popular?api_key=49772f8f87524b9e90b4e37032d5a6a9`;

    const getData = async (id) => {
        const apiURL = id ? `${API}` : API;
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            return data;
        } catch(error) {
            console.log('Fetch Error..!!', error);
        };
};

export default getData;
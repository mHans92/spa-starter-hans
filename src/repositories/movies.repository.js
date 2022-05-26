import axios from "axios";

export class GetMovies  {

    async getPremiereMovies(page) {
        let KEY = "f38ea510cc16c0596ab4eb51b47aa797";
        return await (await axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&api_key=${KEY}&page=${page}`)).data;   
    }

    async getSearchMovie(search){
        let KEY = "f38ea510cc16c0596ab4eb51b47aa797";
        return await (await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&page=1&query=${search}`)).data;
    }
}



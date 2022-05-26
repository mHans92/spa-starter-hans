import { GetMovies } from "../repositories/movies.repository";

export class SearchUsecase {
   
    async execute(searchMovie) {
        const repositoryMovies = new GetMovies();
        const search = await repositoryMovies.getSearchMovie(searchMovie);
        return search;
    }
}
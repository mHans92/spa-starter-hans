import { GetMovies } from "../repositories/movies.repository";

export class MoviesUseCase {
   
    async execute(page) {
        const repositoryMovies = new GetMovies();
        const movies = await repositoryMovies.getPremiereMovies(page);
        return movies;
    }
}
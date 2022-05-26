import { GetMovies } from "../../src/repositories/movies.repository.js";
import { MoviesUseCase } from "../../src/usecases/movies.usecases.js";
import MOVIES  from "../../fixtures/movies.json";

jest.mock('../../src/repositories/movies.repository');

describe('Movies Use Case', () => {

    beforeEach(() => {
        GetMovies.mockClear();
    })

    it('should execute correct', async () => {

        GetMovies.mockImplementation(() => {
            return {
                getPremiereMovies: () => {
                    return MOVIES;
                }
            }
        })

        const useCase = new MoviesUseCase();
        const movies = await useCase.execute();

        expect(movies).toHaveLength(MOVIES.length);

    })

})
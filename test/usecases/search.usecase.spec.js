import { GetMovies } from "../../src/repositories/movies.repository.js";
import { SearchUsecase } from "../../src/usecases/search.usecases";
import  SEARCH  from "../../fixtures/search.json";

jest.mock('../../src/repositories/movies.repository');

describe('Search Use Case', () => {

    beforeEach(() => {
        GetMovies.mockClear();
    })

    it('search ok', async () => {

        GetMovies.mockImplementation(() => {
            return {
                getSearchMovie: () => {
                    return SEARCH;
                }
            }
        })

        const useCase = new SearchUsecase();
        const search = await useCase.execute("doctor strange");
        expect(search).toHaveLength(SEARCH.length);

    })

})
import {css, html, LitElement } from "lit";
import { MoviesUseCase } from "../usecases/movies.usecases";
import '../ui/movies.ui';


export class MoviesComponent extends LitElement {

    static get styles(){
        return css`
        .boxButton{
            display: flex;
            padding-left: 3%;
            padding-right: 82%;
            padding-bottom: 20px;
            background-color: moccasin;
            flex-direction: row-reverse;
            justify-content: space-between;      
        }

        .btn{
            background-color: #F06F10;
            border-radius: 10px;
        }
         `
    }

    static get properties() {
        return {
            movies: {
                type: Array,  
            },
            animation: {
                type: Array,
            },
            page: {
                type: Number,
            } 
        }
    }
    
    async connectedCallback() {
        super.connectedCallback();
        this.page = 1;
        const moviesUseCase = new MoviesUseCase();
        this.movies = await moviesUseCase.execute();  
    }

    nextPage(){
        if(this.page >= this.movies.total_pages) return; 
        this.page +=1;
        this.changePage(this.page);
    }
    previousPage(){
        if(this.page <= 1) return;
        this.page -=1;
        this.changePage(this.page);
    }
    
    async changePage(page){
        const pagination = new MoviesUseCase();
        this.movies = await pagination.execute(page);
    }
    
    render() {
        return html`${this.movies ? html`   
        <movies-ui .movies="${this.movies.results}" ></movies-ui>
        <div class="boxButton">
            <button @click="${this.nextPage}" class="btn" id="btnNext">next page</button>
            <button @click="${this.previousPage}" class="btn" id="btnPrevious">previous page</button>
        </div>
    `: html``
    }` 
    }  
}

customElements.define('movies-component', MoviesComponent)

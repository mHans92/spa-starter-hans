import {css, html, LitElement } from "lit";
import { SearchUsecase } from "../usecases/search.usecases";
import '../ui/search.ui';


export class SearchComponent extends LitElement {

    static get properties() {
        return {
            value: {
                type: String
            },
            search: {
                type: Array,  
            }
        }
    }

    constructor() {
        super();
        this.value = "";
      } 
    
    async connectedCallback() {
        super.connectedCallback();
        const searchUsecase = new SearchUsecase();
        this.search = await searchUsecase.execute("matrix");
    }
 
   async clickButton() {
        const value = document.querySelector("#inputSearch").value
        const useCase = new SearchUsecase();
        this.search =  await useCase.execute(value);
      }
    
    render() {
        return html` ${this.search ? html`
        <div class="boxSearchComponent">
            <input 
                type="text" 
                id="inputSearch" 
                placeholder="Search movie" 
                .value="${this.value}"
                @input="${this.inputSearch}"> 
                
            <button @click="${this.clickButton}" id="buttonSearch" aria-label="btnSearch">Search</button>
        </div>
            <search-ui .search="${this.search.results}"></search-ui>
        `: html``}
        `;
    }
  
    createRenderRoot() {
        return this;
    }
}

customElements.define('search-component', SearchComponent)

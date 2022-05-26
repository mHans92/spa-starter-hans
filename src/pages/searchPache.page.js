import { LitElement } from 'lit';
import '../components/search.component';

export class SearchPage extends LitElement {

    connectedCallback() {
        this.innerHTML = `
            <search-component></search-component>
        `;
    }
    render() {
        return html`   
        `;
    }
}

customElements.define('search-page', SearchPage);

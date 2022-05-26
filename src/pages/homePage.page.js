import { LitElement } from 'lit';
import '../components/movies.component';

export class HomePage extends LitElement {

    connectedCallback() {
        this.innerHTML = `
            <movies-component></movies-component>
        `;
    }
    render() {
        return html`   
        `;
    }
}

customElements.define('home-page', HomePage);

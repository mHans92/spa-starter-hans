import { LitElement } from 'lit';
import '../components/favorites.component';

export class FavoritesPage extends LitElement {

    connectedCallback() {
        this.innerHTML = `
        <favorites-component></favorites-component>
        `;
    }
    render() {
        return html`  
        `;
    }
}

customElements.define('favorites-page', FavoritesPage);

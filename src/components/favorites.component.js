import {css, html, LitElement } from "lit";
import { snapshot } from 'valtio/vanilla';
import { state } from '../states/state';
import "../ui/favorites.ui"


export class FavoritesComponent extends LitElement {

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
            favs: {
                type: Array
            },
        }
    }
    
    async connectedCallback() {
        super.connectedCallback();
        const snap = snapshot(state);
        this.favs = snap.favs; 
       
    }

    render() {
        return html`
          <favorites-ui .favs="${this.favs}"></favorites-ui>
        `;
    }
}

customElements.define('favorites-component', FavoritesComponent)

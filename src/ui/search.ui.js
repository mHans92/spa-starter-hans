import { css, html, LitElement } from "lit";
import { subscribe } from "valtio/vanilla";
import { state } from "../states/state";
import { sharedStyles } from './sharedStyles';
import corazon from "../assets/corazon.png";


export class MoviesUI extends LitElement {

    static get styles() {
        return [sharedStyles, css`
        `]
    }

    static get properties() {
        return {
            search: {
                type: Array
            }
        }
    }

    addToFavorites(){
        subscribe(state, () => {
          this.addFavs();
        })
    }
    addFavs(movie){
        state.favs.push(movie);
    }

    render() {
        return html`
           <section class="sectionMovies">
                    <h2 class="title">Search movies</h2>
                        <article class="boxMovies">  
                            ${this.search && this.search.map((movie, index) => html `
                                <figure class="cardMovie">   
                                    <img class="img" src="${'https://image.tmdb.org/t/p/w500'+movie.poster_path}" alt="${movie.title}">
                                    <section class="boxInfo">
                                    <figcaption class="infoMovie">
                                        <div class="overview">
                                            <h4>Overview</h4>
                                            <p>${movie.overview}</p>
                                        </div>
                                        <h4><strong>${movie.title}</strong></h4> 
                                    </figcaption>
                                    <div class="boxNote">
                                            <span class="note"><strong>${movie.vote_average}</strong></span>
                                            <button class="favBtn" @click="${() => this.addFavs(movie)}" key="${index}" id="btnFavSearch" ><img class="likeBtn" src="${corazon}"></button>
                                        </div>
                                    </section>
                                </figure>
                            `)}
                        </article>
                    </section>
        `;
    }
}

customElements.define('search-ui', MoviesUI);
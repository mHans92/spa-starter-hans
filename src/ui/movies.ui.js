import { css, html, LitElement } from "lit";
import { subscribe } from "valtio/vanilla";
import { state } from "../states/state";
import { sharedStyles } from './sharedStyles';
import corazon from "../../assets/corazon.png";
import "../components/carousel.component";



export class MoviesUI extends LitElement {

    static get styles() {
        return [sharedStyles, css`
            .cardMovie{
            height:398px;
        }
        `]
    }

    static get properties() {
        return {
            movies: {
                type: Array
            },
            card:{
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
            <div class="container">
                <section class="sectionMovies">
                    <h2 class="title">Premier movies</h2>
                        <article class="boxMovies">
                            ${this.movies && this.movies.map((movie, index) => html `
                                <figure class="cardMovie">   
                                    <img class="image" src="${'https://image.tmdb.org/t/p/w500'+movie.poster_path}" alt="${movie.title}">
                                    <section class="boxInfo">
                                        <figcaption class="infoMovie">
                                            <div class="overview">
                                                <h4>Overview </h4>
                                                <p>${movie.overview}</p>
                                            </div>
                                            <h4><strong>${movie.title}</strong></h4>
                                        </figcaption>
                                        <div class="boxNote">
                                            <span class="note"><strong>${movie.vote_average}</strong></span>
                                            <button class="favBtn" @click="${() => this.addFavs(movie)}" key="${index}" id="btnFavMovies" ><img class="likeBtn" src="${corazon}"></button>
                                        </div>
                                    </section>
                                </figure>
                            `)}
                        </article>
                </section>
                        <article  class="bestMovie">
                            <h2>Best movie ever</h2>
                            <carousel-component></carousel-component>
                        </article>
            </div> 
        `;
    }
}

customElements.define('movies-ui', MoviesUI);
import {css, html, LitElement } from "lit";
import matrix from "../../assets/matrix.jpg";
import esdla from "../../assets/esdla.jpg";
import starWars from "../../assets/starWars.jpg";


export class Carousel extends LitElement {

    static get styles(){
        return css`
        .imgBestMovies{
            width: 300px;
            height: 400px;
        }
        `
    }

    static get properties() {
        return {
            imageCarousel: {
                type: String,
            },
            arrayCarousel:{
                type: Array
            },
            index: {
                type: Number
            }
        }
    }
    
    connectedCallback(){
        super.connectedCallback();
        this.index = 0;
        this.carouselMovies();
        setInterval(this.carouselMovies, 10000);
      
    }

    carouselMovies = () => {
        this.arrayCarousel = [matrix, esdla, starWars];
        let i = this.index;
        if( i <=2 ){
            if( i <=1 ){
                this.imageCarousel = this.arrayCarousel[i];
                this.index +=1;
            }else{
                this.imageCarousel = this.arrayCarousel[i];
                this.index = 0;
            }
        }
    }

    disconnectedCallback(){
        clearInterval(this.carouselMovies); 
    }
    
    render() {
        return html`
        <img src="${this.imageCarousel}" class="imgBestMovies"  >
        `;
    }
}

customElements.define('carousel-component', Carousel)

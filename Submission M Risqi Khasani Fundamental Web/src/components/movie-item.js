import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./movie-overview";

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
              <div class="card">
                  <img class="card-img-top" src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="${this._movie.title} Poster">

                  <div class="card-body">
                    <h3 class="card-title">${this._movie.title}</h3>
                    <p>${this._movie.overview}</p>   
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-info" id="buttonDetail" data-toggle="modal" data-target="#showDetail${this._movie.id}">Detail</button>
                  </div>
              </div>`;
  }
}

customElements.define("movie-item", MovieItem);
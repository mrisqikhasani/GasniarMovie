class MovieDetail extends HTMLElement {
    
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="modal fade" id="showDetail${this._movie.id}" tabindex="-1" role="dialog" aria-labelledby="movieTitle">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="movieTitle">${this._movie.title}</h4>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-5">
                                    <img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" class="rounded img-thumbnail" alt="${this._movie.title} Poster">
                                </div>

                                <div class="col-7">
                                    <p><b>Original Language</b><br>
                                    ${this._movie.original_language}</p>

                                    <p><b>Release Date</b><br>
                                    ${this._movie.release_date}</p>

                                    <p><b>Popularity</b><br>
                                    ${this._movie.popularity}</p>

                                </div>

                            </div>

                            <p><b>Overview</b><br>
                            ${this._movie.overview}</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-info" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }

}

customElements.define('movie-detail', MovieDetail);
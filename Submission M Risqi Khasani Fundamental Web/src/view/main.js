import '../components/movie-list.js';
import endurl from '../data/api-config';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const tabNavbar = document.querySelector("tab-navbar");
    const movieListElement = document.querySelector("movie-list");

    const clearTabSelected = () => {
        tabNavbar.querySelectorAll(".nav .nav-item .nav-link").forEach((item) => {
            item.classList.remove("active");
        });
    }

    const getMovieList = endurl => {
        DataSource.requestMovies(endurl)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const eventSearch = () => {
        clearTabSelected();
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        loading.innerHTML = "";
        movieListElement.style.display = "flex";
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const onSelect = () => {
        searchElement.querySelector("#inputSearch").value = "";
        const category = tabNavbar.value;
        switch (category) {
            case 'nowPlaying': getMovieList(endurl.nowPlaying); break;
            case 'popular': getMovieList(endurl.popular); break;
            case 'topRated': getMovieList(endurl.topRated); break;
            case `trending`: getMovieList(endurl.trending); break;
        }
    }

    tabNavbar.clickEvent = onSelect;
    searchElement.clickEvent = eventSearch;

    // Init view
    getMovieList(endurl.popular);
   
};

export default main;
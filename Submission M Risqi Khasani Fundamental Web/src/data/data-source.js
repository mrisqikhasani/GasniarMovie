import endurl from './api-config';
export default class DataSource {

    static requestMovies(endurl) {
        return fetch(endurl)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                }
            })
    }

    static searchMovie(title) {
        return fetch(`${endurl.search}${title}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${title} is not found.`)
                }
            })
    }
}

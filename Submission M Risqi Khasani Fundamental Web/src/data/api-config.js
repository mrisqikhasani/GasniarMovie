const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=d09f31372556509f2efb334e06ad8605";


const endurl = {
    nowPlaying : `${baseUrl}movie/popular${apiKey}`,
    popular : `${baseUrl}movie/popular${apiKey}`,
    topRated : `${baseUrl}movie/top_rated${apiKey}`,
    trending:`${baseUrl}trending/movie/week${apiKey}`,
    search : `${baseUrl}search/movie${apiKey}&query=`
}

export default endurl;
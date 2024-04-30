const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/dscover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMoviess: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/dscover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/dscover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/dscover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/dscover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/dscover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTVShow: `/dscover/tv?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
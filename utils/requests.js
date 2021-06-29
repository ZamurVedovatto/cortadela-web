const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchOther1: {
        title: 'Other 1',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=36`
    },
    fetchOther2: {
        title: 'Other 2',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchOther3: {
        title: 'Other 3',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=38`
    },
    fetchOther4: {
        title: 'Other 4',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=39`
    },
    fetchOther5: {
        title: 'Other 5',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=40`
    },
}

// TODO change to pt-BR
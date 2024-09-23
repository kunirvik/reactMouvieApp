import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTY5YTJlNDNkZDY1MmYwNjY2ZjI3OTRmMzE4ZWRjNCIsIm5iZiI6MTcyNjc2NjM3Ni4xNzM2MDcsInN1YiI6IjY2ZWMzYTE0NTE2OGE4OTZlMTIwMjY5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAefHBNcp-51U7cB6V3Hga_ttZWT3EDtONFtF8XOul8'; // Заміни на свій API токен

// Отримати популярні фільми (Trending)
export const fetchTrendingMovie = async () => {
  try {
    const response = await axios.get('trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
}; 


// Отримати деталі фільму
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for movieId: ${movieId}`, error);
    throw error;
  }
};


// Отримати деталі фільму
export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error(`Error fetching movie details for movieId: ${movieId}`, error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movie details for movieId: ${movieId}`, error);
    throw error;
  }
};
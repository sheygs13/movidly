import dotenv from "dotenv";
dotenv.config();

export default {
  baseUrl: "https://api.themoviedb.org/3/search/movie",
  baseImageUrl: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
  getKey: function () {
    return process.env.REACT_APP_API_KEY;
  },
};

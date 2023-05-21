import axios from "axios";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: tmdbApiKey,
  },
});

describe("TMDB API", () => {
  test("should fetch genres", async () => {
    try {
      const response = await moviesApi.get("/genre/movie/list");
      const genres = response.data.genres;
      expect(genres.length).toBeGreaterThan(0);
    } catch (error) {
      console.error("Error fetching genres:", error);
      fail(error);
    }
  });


});

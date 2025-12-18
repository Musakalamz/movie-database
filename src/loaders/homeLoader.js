import axios from "axios";

const BASE = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const HomeLoader = async () => {
  const searchTerm = "superman";
  const response = await axios.get(`${BASE}?apikey=${API_KEY}&s=${searchTerm}`);

  return { movies: response.data, searchTerm };
};

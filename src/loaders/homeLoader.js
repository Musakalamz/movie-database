import axios from "axios";

const BASE = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const homeLoader = async () => {
  const query = "superman";
  const response = await axios.get(`${BASE}?apikey=${API_KEY}&s=${query}`);

  return { movies: response.data, query };
};

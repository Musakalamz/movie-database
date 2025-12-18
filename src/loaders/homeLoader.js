import axios from "axios";

const BASE = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const HomeLoader = async () => {
  const searchTerm = "bridge";
  const response = await axios.get(`${BASE}?apikey=${API_KEY}&s=${searchTerm}`);
  const movies = response.data?.Search ?? [];

  return { movies, searchTerm };
};

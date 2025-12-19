import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("mdb_favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info",
  });

  useEffect(() => {
    localStorage.setItem("mdb_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const showToast = useCallback((message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3000);
  }, []);

  const addFavorite = useCallback(
    (movie) => {
      setFavorites((prev) => {
        if (prev.some((m) => m.imdbID === movie.imdbID)) return prev;
        showToast(`Added "${movie.Title}" to favorites`, "success");
        return [...prev, movie];
      });
    },
    [showToast]
  );

  const removeFavorite = useCallback(
    (imdbID) => {
      setFavorites((prev) => {
        const movie = prev.find((m) => m.imdbID === imdbID);
        if (!movie) return prev;
        showToast(`Removed "${movie.Title}" from favorites`, "default");
        return prev.filter((m) => m.imdbID !== imdbID);
      });
    },
    [showToast]
  );

  const isFavorite = useCallback(
    (imdbID) => {
      return favorites.some((m) => m.imdbID === imdbID);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, toast }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}

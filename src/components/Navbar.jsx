import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="ml-auto flex items-center gap-8">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/favorites" className="relative flex items-center gap-1">
        Favorites
        {favorites.length > 0 && (
          <span className="absolute -top-2 -right-3 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-bold text-white bg-red-600 rounded-full">
            {favorites.length}
          </span>
        )}
      </NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/newsletter">Newsletter</NavLink>
    </nav>
  );
}

export default Navbar;

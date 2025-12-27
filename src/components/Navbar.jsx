import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useState } from "react";

function Navbar() {
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/movies", label: "Movies" },
    { to: "/favorites", label: "Favorites", badge: favorites.length },
    { to: "/about", label: "About" },
    { to: "/newsletter", label: "Newsletter" },
  ];

  return (
    <nav className="ml-auto">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200"
              } ${
                link.label === "Favorites"
                  ? "relative flex items-center gap-1"
                  : ""
              }`
            }
          >
            {link.label}
            {link.badge > 0 && (
              <span className="absolute -top-2 -right-3 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {link.badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-2 text-gray-700 dark:text-gray-200 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl md:hidden flex flex-col p-4 space-y-2 z-[100] animate-fade-in-up">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between text-base font-medium px-4 py-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              <span>{link.label}</span>
              {link.badge > 0 && (
                <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 text-xs font-bold text-white bg-red-600 rounded-full">
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

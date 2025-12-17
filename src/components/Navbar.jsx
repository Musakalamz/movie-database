import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="ml-auto flex items-center gap-8">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/favorites">Favorites</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/newsletter">Newsletter</NavLink>
    </nav>
  );
}

export default Navbar;

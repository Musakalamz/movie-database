import { Outlet, useNavigation } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FavoritesProvider } from "./context/FavoritesContext";
import Toast from "./components/Toast";
import SkeletonGrid from "./components/SkeletonGrid";
import SkeletonDetails from "./components/SkeletonDetails";

function App() {
  const navigation = useNavigation();

  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-grey-100 ">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus-z-50 bg-blue-600 text-white py=2 px-3 rounded"
        >
          Skip to content
        </a>

        <header className="sticky top-0  z-30 bg-white dark:bg-gray-900 border-b shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center gap-6">
            <Logo />
            <Navbar />
          </div>
        </header>

        <main id="content" className="container mx-auto px-4 py-6">
          {navigation.state === "loading" ? (
            navigation.location.pathname.startsWith("/movie/") ? (
              <SkeletonDetails />
            ) : navigation.location.pathname === "/movies" ? (
              <SkeletonGrid />
            ) : (
              <Outlet />
            )
          ) : (
            <Outlet />
          )}
        </main>

        <Footer />
        <Toast />
      </div>
    </FavoritesProvider>
  );
}

export default App;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Movies,
  Favorite,
  About,
  Newsletter,
  NotFound,
  SinglePageError,
  MovieDetails,
} from "./pages";
import { HomeLoader } from "./loaders/homeLoader";
import { SingleMovieLoader } from "./loaders/singleMovieLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        loader: HomeLoader,
        errorElement: <SinglePageError />,
        element: <Movies />,
      },
      {
        path: "movie/:imdbID",
        loader: SingleMovieLoader,
        element: <MovieDetails />,
      },
      {
        path: "favorites",
        element: <Favorite />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "movie/:imdbID",
        loader: SingleMovieLoader,
        errorElement: <SinglePageError />,
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

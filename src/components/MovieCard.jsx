import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  console.log(movie);
  const { Poster, Title, Year, imdbID } = movie;
  const src = Poster && Poster !== "N/A" ? Poster : "/vite.svg";

  return (
    <Link
      to={`/movie/${imdbID}`}
      className="block rounded-md border bg-white hover:shadow transition-shadow"
    >
      <img
        src={src}
        alt={`${Title} poster`}
        loading="lazy"
        decoding="async"
        sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
        className="h-64 w-full object-cover rounded-t-md"
      />
      <div className="p-3">
        <div className="font-medium">{Title}</div>
        <div className="text-sm text-gray-600">{Year}</div>
      </div>
    </Link>
  );
}

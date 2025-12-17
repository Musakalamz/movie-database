import { useLoaderData } from "react-router-dom";

function Home() {
  const { movies, query } = useLoaderData();

  console.log(movies, query);

  return <div>Home Page</div>;
}

export default Home;

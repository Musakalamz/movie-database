import { useRouteError } from "react-router-dom";

function SinglePageError() {
  const error = useRouteError();
  console.log(error);
  return <h2 className="p-6 text-gray-700">{error.message}</h2>;
}

export default SinglePageError;

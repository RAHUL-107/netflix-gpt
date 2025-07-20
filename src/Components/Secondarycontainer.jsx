import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);


  if (!movies) return null;

  return (
    <div className="bg-black px-6 py-4">
      <h2 className="text-2xl font-bold text-white mb-4">Now Playing</h2>
      <Movielist movies={movies} />
    </div>
  );
};

export default Secondarycontainer;

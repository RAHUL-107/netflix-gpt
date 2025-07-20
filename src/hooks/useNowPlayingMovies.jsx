import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieslice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const data = await res.json();
        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;

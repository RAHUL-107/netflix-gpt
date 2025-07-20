import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full aspect-video">
      {/* Video plays in background */}
      <VideoBackground movieId={mainMovie.id} />

      {/* Text sits on top of video */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-12 bg-gradient-to-r from-black z-20">
        <VideoTitle
          title={mainMovie.title}
          overview={mainMovie.overview}
        />
      </div>
    </div>
  );
};

export default MainContainer;

import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const trailers = json.results.filter(video => video.type === "Trailer");
      console.log(trailers)
      const officialTrailer = trailers.find(t => t.name.toLowerCase().includes("official")) || trailers[0];

      if (officialTrailer) {
        setTrailerKey(officialTrailer.key);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);

  if (!trailerKey) return null;

  return (
    <div className="video-background">
      <iframe className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

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
      const trailers = json.results.filter((v) => v.type === "Trailer");
      const official = trailers.find((t) => t.name.toLowerCase().includes("official")) || trailers[0];
      if (official) setTrailerKey(official.key);
    } catch (e) {
      console.error("Error fetching trailer:", e);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);

  if (!trailerKey) return null;

  return (
    <div className="relative w-full h-[100vh] overflow-hidden z-10">
      <iframe
        className="w-full h-full absolute top-0 left-0 object-cover"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
        title="Video Background"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* Optional overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparent z-10" />
    </div>
  );
};

export default VideoBackground;

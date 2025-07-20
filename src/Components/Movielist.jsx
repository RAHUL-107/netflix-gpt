import React from 'react';
import Moviecard from './Moviecard';

const Movielist = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;

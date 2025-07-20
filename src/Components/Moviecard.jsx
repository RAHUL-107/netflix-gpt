const Moviecard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className="min-w-[180px] max-w-[180px] hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img src={imageUrl} alt={movie.title} className="rounded-lg" />
    </div>
  );
};

export default Moviecard;

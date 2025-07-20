import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./Secondarycontainer";

const Browse = () => {
  useNowPlayingMovies(); // crucial!

  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

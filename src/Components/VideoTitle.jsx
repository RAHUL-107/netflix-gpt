import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-4 text-lg max-w-xl">{overview}</p>
      <div className="mt-4">
        <button className="bg-white text-black py-2 px-6 rounded-md text-lg font-semibold hover:bg-gray-300">
          ▶ Play
        </button>
        <button className="ml-4 bg-gray-700 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-gray-600">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React, { useState } from 'react';
import Header from './Header'; 

const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);
  const togglesigninform=()=>{
     setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-full text-white font-sans">
      
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

   
      <Header />

      
      <div className="flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-80 backdrop-blur-sm p-10 rounded-lg w-full max-w-md border border-gray-400">
          <h2 className="text-3xl font-bold mb-6">{isSignInForm? "SignIn" : "SignUp"}</h2>

          {!isSignInForm &&  <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 my-3 rounded bg-gray-700 bg-opacity-50 placeholder-gray-300 text-white focus:outline-none"
          />}

          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 my-3 rounded bg-gray-700 bg-opacity-50 placeholder-gray-300 text-white focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 my-3 rounded bg-gray-700 bg-opacity-50 placeholder-gray-300 text-white focus:outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 my-4 rounded font-semibold">
            {isSignInForm? "SignIn" : "SignUp"}
          </button>

          <div className="flex justify-between text-sm text-gray-300">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>

          <p className="text-gray-300 mt-6" onClick={togglesigninform}>
            New to Netflix?{' '}
            <span className="text-white hover:underline cursor-pointer">
              Sign up now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

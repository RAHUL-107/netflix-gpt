import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkvalidation } from '../utils/validation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClickButton = () => {
    const message = checkvalidation(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
          })
            .then(() => navigate('/browse'))
            .catch((error) => setErrorMessage(error.message));
        })
        .catch((error) => setErrorMessage(error.code + ': ' + error.message));
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => navigate('/browse'))
        .catch((error) => setErrorMessage(error.code + ': ' + error.message));
    }
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
        <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-80 backdrop-blur-sm p-10 rounded-lg w-full max-w-md border border-gray-400">
          <h2 className="text-3xl font-bold mb-6">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 my-3 rounded bg-gray-700 bg-opacity-50 placeholder-gray-300 text-white focus:outline-none"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 my-3 rounded bg-gray-700 bg-opacity-50 placeholder-gray-300 text-white focus:outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className="w-full p-3 my-3 rounded bg-gray-700 bg-opacity-50 placeholder-gray-300 text-white focus:outline-none"
          />

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 my-4 rounded font-semibold"
            onClick={handleClickButton}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="flex justify-between text-sm text-gray-300">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>

          <p className="text-gray-300 mt-6">
            {isSignInForm ? 'New to Netflix?' : 'Already a user?'}{' '}
            <span className="text-white hover:underline cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? 'Sign up now' : 'Sign in here'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

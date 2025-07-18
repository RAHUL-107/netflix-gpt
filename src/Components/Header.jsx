import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Optionally show a toast or redirect
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup/unmount
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black flex justify-between items-center z-10">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      <div className="flex items-center space-x-4">
        <img
          src="https://netfree2.cc/pv/assets/prime-user.png"
          alt="user"
          className="w-10 h-10 rounded-full object-cover border-2 border-white cursor-pointer"
        />
        <button onClick={handleSignOut} className="text-white font-semibold hover:underline">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;

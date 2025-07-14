import React, { useEffect } from 'react'
import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';

const Body = () => {
  const dispach = useDispatch();
  

  const  AppRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/browse",
      element:<Browse/>,
    },
  ]);

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid,email,displayName}= user.uid;
    dispatchEvent(addUser({uid:uid, email:email, displayName:displayName}));
 
    
  } else {
    dispach(removeUser());
    
  }
});
  },[])
  return (
    <div>
      
      <RouterProvider router={AppRouter}/>
      
    </div>
  )
}

export default Body

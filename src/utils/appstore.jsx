import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userslice";
import movieReducer from "./movieslice";

const appstore = configureStore(
    {
        reducer:{
            user: useReducer,
            movies: movieReducer,
        },
    },
);

export default appstore;
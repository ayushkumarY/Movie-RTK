import { configureStore } from "@reduxjs/toolkit";
import movieSlicer from "./movieSlicer";

export const store = configureStore({
  reducer: {
    movie: movieSlicer,
  },
});

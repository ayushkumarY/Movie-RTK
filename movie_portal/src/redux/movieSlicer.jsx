import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchmovies = createAsyncThunk("fetchTodo", async () => {
  const data = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=fdb5f1a2&s=2012"
  );
  return data.json();
});

const movieSlicer = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchmovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchmovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchmovies.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default movieSlicer.reducer;

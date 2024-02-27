import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchmovies } from "./redux/movieSlicer";
import Cart from "./components/Cart";

function Fetch() {
  const [storemovie, setStoreMovie] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie);

  useEffect(() => {
    // Dispatch the action to fetch movies
    dispatch(fetchmovies());
  }, [dispatch]); // Add dispatch to dependency array

  useEffect(() => {
    // Update storemovie when data changes
    if (data && data.data && data.data.Search) {
      setStoreMovie(data.data.Search);
    }
  }, [data]); // Add data to dependency array

  return (
    <div className="flex flex-wrap mx-28 justify-evenly pt-7 text-white">
      {data.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        storemovie.map((value, index) => (
          <Cart value={value} key={index} />
        ))
      )}
    </div>
  );
}

export default Fetch;

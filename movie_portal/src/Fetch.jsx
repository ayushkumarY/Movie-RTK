import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchmovies } from "./redux/movieSlicer";
import Cart from "./components/Cart";

function Fetch() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie);
  // console.log(data);
  console.log(data.data);
  useEffect(() => {
    dispatch(fetchmovies());
  }, []);

  return (
    <div className="flex flex-wrap mx-28 justify-evenly pt-7 text-white">
      {data.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        data.data.Search?.map((value, index) => {
          return <Cart value={value} key={index} />;
        })
      )}
    </div>
  );
}

export default Fetch;

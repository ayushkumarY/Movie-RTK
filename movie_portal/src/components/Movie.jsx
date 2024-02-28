import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchmovies } from "../redux/movieSlicer";
import Cart from "./Cart";
import MyModal from "./MyModal";
import { X } from "lucide-react";

function Movie() {
  const [storemovie, setStoreMovie] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showtabmovie, setShowTabMovie] = useState(false);
  const [showtabseries, setShowTabSeries] = useState(false);
  const [showtabyear, setshowtabYear] = useState(false);
  const [New, setNew] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie);
  // console.log("Check It :", data.data.Search);

  useEffect(() => {
    // Dispatch the action to fetch movies
    dispatch(fetchmovies());
  }, [dispatch]); // Add dispatch to dependency array

  useEffect(() => {
    // Update storemovie when data changes
    if (data && data.data && data.data.Search) {
      setStoreMovie(data.data.Search);
      setFilterData(data.data.Search);
    }
  }, [data]); // Add data to dependency array

  // Search bar filter starts here
  const handlesearch = (e) => {
    const searchText = e.target.value;
    setSearchQuery(searchText);
    if (searchText.length > 0) {
      const filteredResults = filterdata.filter((item) => {
        return item.Title.toLowerCase().includes(searchText.toLowerCase());
      });
      setStoreMovie(filteredResults);
    } else {
      setStoreMovie(filterdata);
    }
  };
  // Search bar filter ends here

  // --- filterData from movies starts here ---;
  const filterDataFun = (year, type) => {
    year = year.trim();
    type = type.trim();
    if (year !== "" && type !== "") {
      setStoreMovie(
        filterdata.filter((item) => {
          return item?.Year === year && item?.Type === type;
        })
      );
      if (type === "movie") {
        setshowtabYear(true);
        setNew(year);
        setShowTabMovie(true);
        setShowTabSeries(false);
      } else {
        setShowTabMovie(false);
        setshowtabYear(true);
        setShowTabSeries(true);
        setNew(year);
      }
    } else if (year !== "" && type === "") {
      setStoreMovie(
        filterdata.filter((item) => {
          return item?.Year === year;
        })
      );
      setshowtabYear(true);
      setNew(year);
    } else if (year === "" && type !== "") {
      setStoreMovie(
        filterdata.filter((item) => {
          return item?.Type === type;
        })
      );
      if (type === "movie") {
        setShowTabMovie(true);
      } else {
        setShowTabSeries(true);
      }
    }
  };
  // filterData from movies ends here

  return (
    <div className="bg-gradient-to-r from-lotus-950 via-lotus-800 to-lotus-950 flex flex-col">
      <div className="flex flex-row items-center justify-around w-full mt-7">
        {/* Search bar starts here */}
        <input
          type="text"
          placeholder="Movie Name"
          value={searchQuery}
          onChange={handlesearch}
          className="text-black rounded-sm h-[35px] w-[700px] px-2 focus:outline-none"
        />
        {/* Search bar starts here */}

        {/* Popup starts here */}
        <div>
          <button
            className="bg-white text-black font-bold m-1 p-[7px] font-mono rounded-sm h-9 hover:bg-black hover:text-white"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Open Filter
          </button>
          {showModal && (
            <MyModal
              setShowModal={setShowModal}
              filterDataFun={filterDataFun}
            />
          )}
        </div>
        {/* Popup ends here */}
      </div>

      {/* extra button starts here */}
      <div className="flex w-full justify-start items-center h-11">
        {showtabyear === true ? (
          <div className="flex bg-white items-center mx-16 text-black font-mono px-2 mt-4 h-9 rounded-full hover:border-2 hover:border-red-600">
            <p className="text-xl ">{New}</p>
            <button
              className="hover:font-bold hover:text-red-700"
              onClick={() => {
                setshowtabYear(false);
                setStoreMovie(filterdata);
              }}
            >
              <X />
            </button>
          </div>
        ) : null}

        {showtabmovie === true ? (
          <div className="flex bg-white items-center text-black font-mono px-2 mt-4 h-9 rounded-full hover:border-2 hover:border-red-600">
            <p className="text-xl">movie</p>
            <button
              className="hover:font-bold hover:text-red-700"
              onClick={() => {
                setShowTabMovie(false);
                setStoreMovie(filterdata);
              }}
            >
              <X />
            </button>
          </div>
        ) : null}

        {showtabseries === true ? (
          <div className="flex bg-white items-center text-black font-mono px-2 ml-10 mt-4 h-9 rounded-full hover:border-2 hover:border-red-600">
            <p className="text-xl ">series</p>
            <button
              className="hover:font-bold hover:text-red-700"
              onClick={() => {
                setShowTabSeries(false);
                setStoreMovie(filterdata);
              }}
            >
              <X />
            </button>
          </div>
        ) : null}
      </div>
      {/* extra button ends here */}

      {/* Displaying cart starts here */}
      <div className="flex flex-wrap mx-28 justify-evenly pt-7 text-white">
        {data.isLoading ? (
          <h1>Loading....</h1>
        ) : (
          storemovie.map((value, index) => <Cart value={value} key={index} />)
        )}
      </div>
      {/* Displaying cart ends here */}
    </div>
  );
}

export default Movie;

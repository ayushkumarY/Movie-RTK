import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchmovies } from "../redux/movieSlicer";
import Cart from "./Cart";
import MyModal from "./MyModal";
import { X } from "lucide-react";
import Table from "./Table";

function Movie() {
  const [storemovie, setStoreMovie] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showtabmovie, setShowTabMovie] = useState(false);
  const [showtabseries, setShowTabSeries] = useState(false);
  const [showtabyear, setshowtabYear] = useState(false);
  const [New, setNew] = useState("");
  const [view, setView] = useState("cart");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie);
  // console.log("Check It :", data.data.Search);

  useEffect(() => {
    // Dispatch the action to fetch movies
    dispatch(fetchmovies());
  }, [dispatch]); // Add dispatch to dependency array

  useEffect(() => {
    // Update storemovie when data changes
    if (data?.data?.Search) {
      setStoreMovie(data?.data?.Search);
      setFilterData(data?.data?.Search);
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

  function changeView() {
    if (view === "cart") {
      setView("table");
    } else {
      setView("cart");
    }
  }

  return (
    <div className="bg-gradient-to-r from-lotus-950 via-lotus-800 to-lotus-950 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around justify-between items-start mt-7 h-[4rem] w-full px-5">
        {/* Search bar starts here */}
        <input
          type="text"
          placeholder="Movie Name"
          value={searchQuery}
          onChange={handlesearch}
          className="text-black rounded-sm md:h-[35px] w-full focus:outline-none px-2 md:w-[50rem]"
        />

        {/* Search bar starts here */}

        {/* Popup starts here */}
        <div>
          <button
            className="bg-white text-black md:font-bold md:w-[8rem] w-[7rem] font-mono rounded-sm md:h-9 hover:bg-black hover:text-white "
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
      <div className="px-4 ">
        {view === "cart" ? (
          <div className="flex flex-wrap md:mx-28 justify-evenly pt-7 text-white">
            {data.isLoading ? (
              <h1>Loading....</h1>
            ) : (
              storemovie.map((value, index) => (
                <Cart value={value} key={index} />
              ))
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            {/* can also use "max-w-[50rem] min-w-[10rem]" in css of this element */}
            <div className="max-w-[50rem] w-[100%]">
              <Table userData={storemovie}/>
            </div>
          </div>
        )}
      </div>
      {/* Displaying cart ends here */}

      {/* Button starts here */}
      <div className="flex items-center justify-center">
        <button
          className="bg-white p-2 m-7 text-black md:w-[10rem] hover:text-white hover:bg-black font-mono md:font-bold rounded-3xl outline-none"
          onClick={changeView}
        >
          <p className="md:text-xl font-bold">
            {view === "cart" ? "Table" : "Cart"} View
          </p>
        </button>
      </div>

      {/* Button ends here */}
    </div>
  );
}

export default Movie;

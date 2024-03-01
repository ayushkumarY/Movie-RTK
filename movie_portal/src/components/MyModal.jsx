import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const MyModal = ({ setShowModal, filterDataFun }) => {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleYearSearch = (e) => {
    setYear(e.target.value);
  };

  const handleTypeSearch = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    // Set overflowY to "hidden" when the component mounts
    document.body.style.overflowY = "hidden";
    // Cleanup function to reset overflowY when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <div className="fixed flex items-center justify-center left-0 right-0 bottom-0 top-0 backdrop-blur-sm bg-black bg-opacity-30 ">
        <div
          className="flex flex-col justify-between bg-gradient-to-b from-white to-lotus-50 rounded-lg  
         text-2xl w-[30rem] py-2 px-2 mx-2"
        >
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="mb-2 w-full flex items-center justify-end "
          >
            <div className="rounded-[50%] hover:bg-red-500">
              <X />
            </div>
          </button>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Filter movie based on Year"
              className="border-2 border-lotus-950 mb-2 p-1 rounded-lg outline-none w-[100%]"
              value={year}
              onChange={handleYearSearch}
            />
            <input
              type="text"
              placeholder="Filter movie based on Type"
              className="border-2 border-lotus-950 mb-2 p-1 rounded-lg outline-none w-[100%]"
              value={type}
              onChange={handleTypeSearch}
            />
          </div>
          <button
            className=" bg-lotus-900 rounded-lg font-serif p-1 w-20 text-white text-xl hover:bg-lotus-950 "
            onClick={() => {
              setShowModal(false);
              filterDataFun(year, type);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default MyModal;

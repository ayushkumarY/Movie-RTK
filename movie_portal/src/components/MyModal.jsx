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
      <div className="fixed left-0 right-0 bottom-0 top-0 backdrop-blur-sm bg-black bg-opacity-30 z-10">
        <div className="fixed w-[37rem] bg-gradient-to-b from-white to-lotus-50 rounded-lg top-[30%] left-[30%] text-2xl p-7 pb-10">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="relative left-[500px] font-bold bottom-3 hover:bg-red-500 p-1 rounded-[50%] "
          >
            <X />
          </button>
          <br />
          <input
            type="text"
            placeholder="Filter movie based on Year"
            className="border-2 border-lotus-950 m-3 w-[500px] p-1 rounded-lg outline-none"
            value={year}
            onChange={handleYearSearch}
          />
          <input
            type="text"
            placeholder="Filter movie based on Type"
            className="border-2 border-lotus-950 m-3 w-[500px] p-1 rounded-lg outline-none"
            value={type}
            onChange={handleTypeSearch}
          />
          <button
            className="relative left-3 top-2 bg-lotus-900 rounded-lg font-serif  text-white p-1 text-xl hover:bg-lotus-950 "
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

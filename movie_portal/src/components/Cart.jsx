import React from "react";

const Cart = ({ value }) => {
  // console.log(value);
  return (
    <>
      <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black md:w-60 mb-12 md:mx-2 flex flex-col rounded-lg max-w-[30rem] overflow-hidden">
        <img className="h-[25rem] " src={value.Poster} alt="" />
        <div className="m-4">
          <p className="text-center font-mono text-2xl">{value.Title}</p>
          <p className="text-center font-mono text-2xl">Type: {value.Type}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;

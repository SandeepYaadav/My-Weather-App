import React from "react";

const SearchCity = () => {
    const searchCity = (e) =>{
        console.log(e.target.value)
    }
  return (
    <>
      <div className="flex justify-between">
        <input type="text" className="w-70 p-2" placeholder="City Name" onChange={searchCity}/>
        <div className="m-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        </div>
      </div>
    </>
  );
};

export default SearchCity;

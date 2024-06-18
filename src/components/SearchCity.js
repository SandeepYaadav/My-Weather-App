import React from "react";

const SearchCity = ({setCity, stats}) => {
    const searchCity = (e) =>{
      setCity(e.target.value);
    }
    
  return (
    <>
      <div className="flex justify-between">
        <input type="text" className="w-70 p-2" placeholder="City Name" onChange={searchCity} defaultValue={"New Delhi"}/>
        <div className="m-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        </div>
      </div>

      <div className="flex justify-center mt-8">
        {stats.isDay !== 0 ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-yellow-300 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        ) : 
        (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-slate-700 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        )}
      </div>

      <div className="flex justify-center items-center mt-8 text-slate-700 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <p className="font-semibold text-[55px]">{stats.temp}
          <span className="text-[50px]">°C
          </span>
        </p>
      </div>

      <div className="flex justify-center items-center text-slate-700 mt-8 text-[25px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
         {stats.condition}
      </div>

      <div className="flex justify-center items-center text-slate-700 mt-8 text-[15px]">
          Today - {stats.time} | {stats.location}
      </div>
    </>
  );
};

export default SearchCity;

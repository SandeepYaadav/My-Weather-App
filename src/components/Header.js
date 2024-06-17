import React from "react";

const Header = () => {

  return (
    <>
      <div className="shadow-md w-full">
        <div className="md:px-10 py-4 px-7 ">
          <div className="flex curson-pointer items-center">
            <span>My Weather APP</span>
          </div>
          <div className="flex justify-end">
            <span> Welcome Sandeep!!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

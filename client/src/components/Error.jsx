import React from "react";

const Error = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex items-center justify-center ">
        <div className=" flex items-center justify-center flex-col space-y-3">
          <h1 className="font-bold text-7xl text-blue-500">Oops...!!</h1>
          <h2 className="text-lg tracking-wider font-semibold">
            404 - Page Not Found
          </h2>
          <p>
            The page you have been looking for may have been removed, deleted,
            or possibly never existed...
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;

import React from "react";
import { Link } from "react-router-dom";

const Catagoris = ({ data }) => {
  const { logo, name, total, id } = data;
  return (
    <div>
      <div className="flex flex-col bg-gray-700 border-2 border-gray-900 text-white rounded-lg">
        <div className="px-16 py-10">
          <img
            alt=""
            className="object-cover md:py-6 w-1/2 mx-auto rounded-xl lg:h-56 lg:px-10  md:w-full bg-gray-500"
            src={logo}
          />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <h1 className="text-xl"> Course Name : {name}</h1>

          <div className="flex flex-wrap items-center justify-between pt-3 space-x-2 text-xs text-white-400 font-semibold">
            <span className="text-lg">Total : {total}</span>
            <Link
              to={`/qiiz/${id}`}
              className=" hover:bg-sky-500 bg-sky-800 text-lg font-bold rounded text-gray-300 px-4 py-1"
            >
              Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagoris;

import React from "react";
import { Link } from "react-router-dom";
import img from "../image/sorry.json";
import Lottie from "lottie-react";

const Eoror = () => {
  return (
    <div>
      <section className="flex items-center py-32 md:py-0 h-full sm:p-16 bg-gray-900 text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <Lottie animationData={img} loop={true}></Lottie>
          <p className="text-3xl">Sorry This Page Is Not Found</p>
        </div>
      </section>
    </div>
  );
};

export default Eoror;

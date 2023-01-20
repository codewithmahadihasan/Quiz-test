import React, { useContext } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../image/lottie.json";
import Catagoris from "./Catagoris";
import { UseCosntext } from "./Main/Main";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(UseCosntext);
  const datas = context.data;

  return (
    <div>
      <div className="overflow-hidden bg-gray-900">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                We really can do it all <br className="hidden md:block mb-2" />
                But Not just trying
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Everyone can do it if they try harder. No one is born learning.
                Try to answer the questions correctly then you can too
              </p>
              <Link
                to="question"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <Lottie
                  animationData={groovyWalkAnimation}
                  loop={true}
                ></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="py-6 sm:py-12 bg-gray-600 text-black">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center mb-20">
              <h2 className="text-3xl font-bold">
                Select Your Favourite Course
              </h2>
              <p className="font-serif text-sm dark:text-gray-400">
                Try to Better Result
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4">
              {datas.map((data, idx) => (
                <Catagoris key={idx} data={data}></Catagoris>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

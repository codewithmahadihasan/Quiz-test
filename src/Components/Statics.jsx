import React, { useContext } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { UseCosntext } from "./Main/Main";

const Statics = () => {
  const context = useContext(UseCosntext);
  const datas = context.data;

  return (
    <div className="flex justify-center bg-gray-900 p-20 ">
      <div>
        <h1 className="text-white font-bold mb-20 text-2xl text-center">
          Graph of the Statics Items
        </h1>
        <div className="bg-gray-400 py-10  md:p-36 rounded-2xl">
          <BarChart width={340} height={300} data={datas}>
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Bar dataKey="total" barSize={30} fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Statics;

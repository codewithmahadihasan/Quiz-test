import React from "react";
import { useLoaderData } from "react-router-dom";
import Ques from "./Ques";

const Card = () => {
  const data = useLoaderData();
  const { questions, name, total } = data.data;

  return (
    <div>
      <div className="flex bg-gray-500 flex-col gap-10 py-20">
        <h1 className="text-center text-4xl text-white font-semibold">
          Quistion Catagoris :{" "}
          <span className="font-bold text-yellow-200">{name}</span>
        </h1>
        <h1 className="text-center text-4xl text-white font-semibold">
          Number Of Quiz :{" "}
          <span className="font-bold text-yellow-200">{total}</span>
        </h1>
        {questions.map((question) => (
          <Ques key={question.id} questions={question}></Ques>
        ))}
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import QuizQue from "./QuizQue";
import reacticoImg from "./../assets/reactico.png";
import nodeicoImg from "./../assets/nodeico.png";
import expressicoImg from "./../assets/expressico.png";

function Quizzes() {
  return (
    <div className="bg-amber-100 w-120 h-50 border-2 border-amber-50 rounded-2xl shadow-2xl">
      <div className="flex flex-row justify-between">
        <p className="font-bold text-xl p-2">Recent Quizzess</p>
        <button className="bg-white py-0.5 px-2 border-2 border-gray-200 rounded-xl text-[12px] m-2">
          View All
        </button>
      </div>
      <div className="flex flex-col">
      <QuizQue quizico={reacticoImg} quizname="React Basics Quiz" quizScore="Score : 80/100" variant="primary" colorVariant="one"/><hr/>
      <QuizQue quizico={nodeicoImg} quizname="Node Quiz" quizScore="Score : 50/100" variant="secondary" colorVariant="two" /><hr/>
      <QuizQue quizico={expressicoImg} quizname="Express Basics Quiz" quizScore="Score : 30/100" variant="tertiary" colorVariant="three"/><hr/>
      </div>
    </div>
  );
}

export default Quizzes;

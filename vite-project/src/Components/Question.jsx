import React from "react";

function Question({ question, onAnswer = () => {}}) {
  return (
    <>
      <div className="text-3xl font-semibold my-7 text-center text-black">
        {question.question}
      </div>

      <div className="flex items-center flex-col gap-1">
        {question.answerOptions.map((option) => (
          <button
            onClick={() => onAnswer(option.isCorrect)}
            className="w-[600px] text-left hover:bg-green-600 rounded p-2 h-[60px] text-3xl font-semibold border-4 border-black "
            key={option.text}
          >
            {option.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default Question;

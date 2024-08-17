import React, { useState } from "react";
import question from "./Constants/Questions.json";
import Question from "./Components/Question";
import Result from "./Components/Result";

function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [SaveAnswer, setSaveAnswer] = useState([]);

  const onclickHandler = (answer) => {
    setcurrentQuestion(currentQuestion + 1);
    setSaveAnswer([...SaveAnswer, answer]);
  };

  const restartQuiz = () => {
     setcurrentQuestion(0);
     setSaveAnswer([]);
  }


  return (
    <>
      <h1 className="text-5xl font-bold m-5 text-center">WORLD QUIZ</h1>
      {currentQuestion < question.length && (
        <Question
          question={question[currentQuestion]}
          onAnswer={onclickHandler}
        />
      )}
      {currentQuestion === question.length && (
        <Result reset={restartQuiz} question={question} allAnswers={SaveAnswer} />
        
      )}
    </>
  );
}

export default App;

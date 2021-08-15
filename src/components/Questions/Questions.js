import Countdown from "react-countdown";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
// import { ReactCountdownClock } from "react-countdown-clock";
//components
import QuestionDetail from "./QuestionDetail";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const Questions = () => {
  const questions = useSelector((state) => state.questionReducer.questions);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      const question = questions.map(
        (q) => q.id === i && <QuestionDetail questions={q} key={q.id} />
      );
    }
  }
  const render = ({ seconds, completed }) => {
    let array = array[i];
    let i = 0;
    if (completed) {
      i++;
      shuffleArray(array);
      return { shuffleArray };
    } else {
      return <h6>{seconds}</h6>;
    }
  };
  ReactDOM.render(
    <Countdown date={Date.now() + 5000} render={render} />,
    document.getElementById("root")
  );
  // const question = questions.map(
  //   (q) => q.id === n && <QuestionDetail questions={q} key={q.id} />
  // );
  // const [seconds, setSeconds] = useState(3);
  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 10000);
  //   } else {
  //     setSeconds("BOOOOM!");
  //   }
  // });
  return (
    <>
      <form>
        <div className="d">
          <div className="question">
            {/* Countdown: {seconds} */}
            {/* <p>{question}</p> */}
            {/*   onComplete={myCallback} /> */}
            {/* <h6>Time Left : {seconds}</h6> */}
            {/* <h5>Questions Left : {seconds}</h5> */}
          </div>
        </div>
      </form>
    </>
  );
};
export default Questions;

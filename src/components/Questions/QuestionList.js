import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { ReactCountdownClock } from "react-countdown-clock";
//components
import QuestionDetail from "./QuestionDetail";
import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const QuestionsList = () => {
  //   const [seconds, setSeconds] = useState(10);
  const dispatch = useDispatch();
  //   var min = 1;
  var max = 4;
  var stop = 4; //Number of numbers to extract

  var numbers = [];

  const questions = useSelector((state) => state.questionReducer.questions);

  const [seconds, setSeconds] = useState(3);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
    }
  });
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    for (let i = 0; i < stop; i++) {
      var n = Math.floor(Math.random() * max);
      var check = numbers.includes(n);

      if (check === false) {
        numbers.push(n);
      } else {
        while (check === true) {
          n = Math.floor(Math.random() * max);
          check = numbers.includes(n);
          if (check === false) {
            numbers.push(n);
          }
        }
      }
    }
    setQuestion(
      questions.map(
        (q) => q.id === n && <QuestionDetail questions={q} key={q.id} />
      )
    );
    console.log("moe :", question);
  }, []);
  console.log(question);
  console.log("aya :", numbers);

  //from here
  //   function shuffleArray(array) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[j]] = [array[j], array[i]];
  //       const question = questions.map(
  //         (q) => q.id === i && <QuestionDetail questions={q} key={q.id} />
  //       );
  //     }
  //   }
  //   const render = ({ seconds, completed }) => {
  //     let array = array[i];
  //     let i = 0;
  //     if (completed) {
  //       i++;
  //       shuffleArray(array);
  //       return { shuffleArray };
  //     } else {
  //       return <h6>{seconds}</h6>;
  //     }
  //   };
  //   ReactDOM.render(
  //     <Countdown date={Date.now() + 5000} render={render} />,
  //     document.getElementById("root")
  //   );
  return (
    <>
      <form>
        <div className="d">
          <div className="question">
            {/*   onComplete={myCallback} /> */}
            <h2>{question}</h2>
            <h6>Time Left : {seconds}</h6>
            {/* <h5>Questions Left : {seconds}</h5> */}
          </div>
        </div>
      </form>
    </>
  );
};
export default QuestionsList;

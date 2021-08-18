// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ReactHtmlParser from "react-html-parser";
// import { ReactCountdownClock } from "react-countdown-clock";
// //components
// import QuestionDetail from "./QuestionDetail";
// import React from "react";
// import ReactDOM from "react-dom";
// import Countdown from "react-countdown";

// const QuestionsList = () => {
//   //   const [seconds, setSeconds] = useState(10);
//   const dispatch = useDispatch();
//   //   var min = 1;
//   var max = 4;
//   var stop = 4; //Number of numbers to extract

//   var numbers = [];

//   const questions = useSelector((state) => state.questionReducer.questions);
//   const [seconds, setSeconds] = useState(3);
//   const [number, setNumber] = useState(0);
//   const [question, setQuestion] = useState(null);
//   useEffect(() => {
//     if (seconds > 0) {
//       setTimeout(() => setSeconds(seconds - 1), 1000);
//     } else {
//       setSeconds("BOOOOM!");
//     }
//   });

//   useEffect(() => {
//     for (let i = 0; i < stop; i++) {
//       var n = Math.floor(Math.random() * max);
//       var check = numbers.includes(n);

//       if (check === false) {
//         numbers.push(n);
//       } else {
//         while (check === true) {
//           n = Math.floor(Math.random() * max);
//           check = numbers.includes(n);
//           if (check === false) {
//             numbers.push(n);
//           }
//         }
//       }
//     }
//     console.log(numbers);
//     setQuestion(
//       questions.map(
//         (q) => q.id === n && <QuestionDetail questions={q} key={q.id} />
//       )
//     );
//   }, [setQuestion]);

//   return (
//     <>
//       <form>
//         <div className="d">
//           <div className="question">
//             <h2>{question}</h2>
//             <h6>Time Left : {seconds}</h6>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };
// export default QuestionsList;

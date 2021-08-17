// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { addAnswer } from "../../store/actions/answerAction";

// const ChoiceDetail = ({ c, questionId, choiceId, answers, setAnswers }) => {
//   const dispatch = useDispatch();
//   const isTrue = c.isTrue;
//   const [answer, setAnswer] = useState("");
//   const handleChange = (event) =>
//     setAnswer({ ...answer, [event.target.name]: event.target.value });
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(addAnswer(answer, questionId, choiceId));
//   };
//   console.log(isTrue);

//   return (
//     <div>
//       <div onChange={handleSubmit}>
//         <div className="form-check" onClick={handleChange}>
//           <input
//             className="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             value={c.isTrue}
//           />
//           <label className="form-check-label">{c.text}</label>
//         </div>
//         <br />
//       </div>
//     </div>
//   );
// };
// export default ChoiceDetail;

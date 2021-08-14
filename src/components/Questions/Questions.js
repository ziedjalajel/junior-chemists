import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";

//components
import { questionDetail } from "../../store/actions/questionAction";
import QuestionsList from "./QuestionList";

const Questions = () => {
  const dispatch = useDispatch();
  var min = 1;
  var max = 4;
  var stop = 4; //Number of numbers to extract

  var numbers = [];

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

  let _question = (dispatch) => {
    return () => dispatch(questionDetail(1));
  };
  // const effect = useEffect(() => {
  //   dispatch(questionDetail(1));
  // }, []);
  console.log("here :", questionDetail);
  return (
    <div>
      {/* <span> */}
      <QuestionsList />
      {/* </span> */}
    </div>
  );
};
export default Questions;

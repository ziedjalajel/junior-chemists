import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
//components
import QuestionDetail from "./QuestionDetail";

const QuestionsList = () => {
  const dispatch = useDispatch();
  var min = 1;
  var max = 3;
  var stop = 3; //Number of numbers to extract

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
  const questions = useSelector((state) => state.questionReducer.questions);
  const question = questions.map(
    (q) => q.id === n && <QuestionDetail questions={q} key={q.id} />
  );
  console.log("aya :", n);
  return (
    <form>
      <div className="d">
        <div className="question">
          <h2>{question}</h2>
        </div>
      </div>
    </form>
  );
};
export default QuestionsList;

import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
//components
import QuestionDetail from "./QuestionDetail";

const QuestionsList = () => {
  const questions = useSelector((state) => state.questionReducer.questions);
  const question = questions.map((q) => (
    <QuestionDetail questions={q} key={q.id} />
  ));

  return (
    <form>
      <div className="d">
        <h2>{ReactHtmlParser(question[0])}</h2>
      </div>
    </form>
  );
};
export default QuestionsList;

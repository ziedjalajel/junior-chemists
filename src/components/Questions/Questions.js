import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//components
import QuestionDetail from "./QuestionDetail";

const Questions = () => {
  const questions = useSelector((state) => state.questionReducer.questions);
  const [seconds, setSeconds] = useState(5);
  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    let myQuestion;
    let myAnswers = [];
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      myQuestion = questions.find((q) => q.id === question.id + 1);
      if (myQuestion) {
        setSeconds(5);
        setQuestion(myQuestion);
      } else {
        for (const key in answers) {
          myAnswers.push({
            roomId: 1,
            questionId: +key,
            choiceId: answers[key],
            userId: 1,
          });
        }
        console.log(myAnswers);
      }
    }
  }, [seconds]);

  useEffect(() => {
    if (questions) setQuestion(questions.find((q) => q.id === questions[0].id));
  }, [questions]);
  if (!question) return <div></div>;

  return (
    <>
      <form>
        <div className="lines"></div>
        <div className="d">
          <div className="question">
            <QuestionDetail
              questions={question}
              answers={answers}
              setAnswers={setAnswers}
            />
            <h6>Time Left : {seconds} s</h6>
          </div>
        </div>
      </form>
    </>
  );
};
export default Questions;

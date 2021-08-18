import { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { addAnswer } from "../../store/actions/answerAction";
//components
import QuestionDetail from "./QuestionDetail";

const Questions = ({ user, socket }) => {
  const questions = useSelector((state) => state.questionReducer.questions);
  const [seconds, setSeconds] = useState(5);
  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();
  const a = user;
  // console.log(a);
  // console.log(socket.id);
  let usersocket;
  const [room, setRoom] = useState({});
  const [myUser, setmyUser] = useState(null);
  useEffect(() => {
    let myQuestion;
    let myAnswers = [];

    socket.on("startRoom", (u) => {
      setRoom(u);
    });
    socket.on("newUser", (u) => {
      setmyUser(u);
      console.log(u);
    });
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
            roomId: room.myRoom.id,
            questionId: +key,
            choiceId: answers[key],
            userId: myUser.id,
          });
        }
        myAnswers.map((a) =>
          dispatch(addAnswer(a.roomId, a.questionId, a.choiceId, a.userId))
        );
        console.log(myAnswers);
        console.log(usersocket);
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

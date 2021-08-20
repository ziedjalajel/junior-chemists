import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { addAnswer } from "../../store/actions/answerAction";
//components
import QuestionDetail from "./QuestionDetail";

const Questions = ({ socket }) => {
  const questions = useSelector((state) => state.questionReducer.questions);
  const [seconds, setSeconds] = useState(2);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();

  const [room, setRoom] = useState({});
  const [myUser, setmyUser] = useState(null);
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [username, setUsername] = useState(null);

  const history = useHistory();

  useEffect(() => {
    let myQuestion;
    let myAnswers = [];

    socket.on("startRoom", (u) => {
      setRoom(u);
      // console.log(u);
    });
    socket.on("newUser", (u) => {
      setmyUser(u);
      // console.log(u.username);
    });
    socket.on("startRoom", (a) => {
      setNumberOfUsers(a.users.length);
      // console.log(a.users.length);
    });

    socket.on("startRoom", (a) => {
      setUsername(a.users);
      // console.log(a.users);
    });

    // console.log(myUser);
    // console.log(myUser);
    if (numberOfUsers === 3) {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        myQuestion = questions.find((q) => q.id === question.id + 1);
        if (myQuestion) {
          setSeconds(2);
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
          socket.emit("myAnswers", myAnswers);
          // history.push(`/results`);

          // setTimeout(() => history.push(`/results`), 5000);
        }
      }
    }
  }, [seconds, numberOfUsers]);

  useEffect(() => {
    if (questions) setQuestion(questions.find((q) => q.id === questions[0].id));
  }, [questions]);
  if (!question) return <div></div>;

  // if (username !== null && myUser !== null) {
  //   for (let i = 0; i < username.length; i++) {
  //     if (username[i] === myUser.username) {
  //       username[i] = "you";
  //     }
  //   }
  // }

  return (
    <>
      {numberOfUsers === 3 ? (
        <>
          <Link to="/results">see results</Link>
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
            <div></div>
          </form>
          <div>
            <p> {username !== null && username[0]}</p>
            <p> {username !== null && username[1]}</p>
            <p> {username !== null && username[2]}</p>
          </div>
        </>
      ) : (
        <>
          <p>wait for people</p>
          <p> {username !== null && username[0]}</p>
          <p> {username !== null && username[1]}</p>
          <p> {username !== null && username[2]}</p>
        </>
      )}
    </>
  );
};
export default Questions;

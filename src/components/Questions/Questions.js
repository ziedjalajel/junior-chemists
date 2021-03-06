import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAnswer } from "../../store/actions/answerAction";
//components
import QuestionDetail from "./QuestionDetail";
import Username from "./Username";
//styling
import marvel from "../../images/waiting.gif";
import book from "../../images/book.jpg";

const Questions = ({ socket }) => {
  const questions = useSelector((state) => state.questionReducer.questions);
  const [seconds, setSeconds] = useState(20);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();

  const [room, setRoom] = useState({});
  const [myUser, setmyUser] = useState(null);
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [username, setUsername] = useState(null);

  const history = useHistory();
  let usernames;

  useEffect(() => {
    let myQuestion;
    let myAnswers = [];

    socket.on("startRoom", (u) => {
      setRoom(u);
    });
    socket.on("newUser", (u) => {
      setmyUser(u);
    });
    socket.on("startRoom", (a) => {
      setNumberOfUsers(a.users.length);
    });

    socket.on("startRoom", (a) => {
      setUsername(a.users);
    });
    if (numberOfUsers === 3) {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        myQuestion = questions[questions.indexOf(question) + 1];
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
          socket.emit("myAnswers", myAnswers);
          history.push(`/results`);
          // setTimeout(() => history.push(`/results`), 5000);
        }
      }
    }
  }, [seconds, numberOfUsers]);

  useEffect(() => {
    if (questions) setQuestion(questions[0]);
  }, [questions]);
  if (!question) return <div></div>;

  if (username !== null)
    usernames = username.map((user) => (
      <Username user={user} key={user} username={myUser.username} />
    ));

  return (
    <>
      {numberOfUsers === 3 ? (
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
            <div></div>
          </form>
          <div className="aya">
            <p className="aya1">Players :</p>
            {usernames}
          </div>
        </>
      ) : (
        <>
          <div className="waiting">
            <img src={book} alt="" className="runningbook" />
            <p className="bepatient">
              Be Patient {username !== null && myUser.username} ! !
            </p>
            <p className="wfop">Waiting for other player to join .</p>
            <img src={marvel} alt="" className="deadpool" />

            <p className="parap">
              Players in room : {username !== null && `${username.length}/3`}
            </p>
            <div className="scroll">
              <div className="usernameP">{usernames}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Questions;

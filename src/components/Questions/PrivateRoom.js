import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addAnswer } from "../../store/actions/answerAction";
//components
import QuestionDetail from "./QuestionDetail";
import Username from "./Username";
//styling
import marvel from "../../images/marvel.gif";
import book from "../../images/book.jpg";

const PrivateRoom = ({ socket }) => {
  const questions = useSelector((state) => state.questionReducer.questions);
  const [seconds, setSeconds] = useState(5);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();

  const [room, setRoom] = useState({});
  const [myUser, setmyUser] = useState(null);
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [username, setUsername] = useState(null);
  const [maxParticipants, setMaxParticipants] = useState(0);

  const [starting, setStrating] = useState(0);
  // const [value, setValue] = useState(0);
  const history = useHistory();

  const { roomSlug } = useParams();

  let usernames;

  useEffect(() => {
    let myQuestion;
    let myAnswers = [];

    // if (starting === 2) {
    //   socket.emit("startGame", 5);
    //   socket.on("letsStart", (n) => {
    //     setStrating(n);
    //     setNumberOfUsers(n.length);
    //   });
    // }

    socket.on("startPrivateRoom", (u) => {
      setRoom(u);
    });
    socket.on("startPrivateRoom", (u) => {
      setMaxParticipants(u.privateRoom.participant);
    });
    socket.on("newUserPrivate", (u) => {
      setmyUser(u);
    });
    socket.on("startPrivateRoom", (a) => {
      setNumberOfUsers(a.users.length);
    });

    socket.on("startPrivateRoom", (a) => {
      setUsername(a.users);
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
            roomId: room.privateRoom.id,
            questionId: +key,
            choiceId: answers[key],
            userId: myUser.id,
          });
        }
        myAnswers.map((a) =>
          dispatch(addAnswer(a.roomId, a.questionId, a.choiceId, a.userId))
        );
        socket.emit("myAnswersPrivate", myAnswers);
        console.log(myAnswers);
        history.push(
          `/privateroom-username/${roomSlug}/private-room/room-result`
        );
      }
    }
  }, [seconds, numberOfUsers]);

  useEffect(() => {
    if (questions) setQuestion(questions.find((q) => q.id === questions[0].id));
  }, [questions]);
  if (!question) return <div></div>;

  if (username !== null)
    usernames = username.map((user) => <Username user={user} />);

  return (
    <>
      {numberOfUsers === maxParticipants ? (
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
          <p>hello</p>
          <br />
          <br />
          <br />
          <button onClick={() => setStrating(2)}>start</button>
          <div className="waiting">
            <img src={book} alt="" className="runningbook" />
            <p className="bepatient">
              Be Patient {username !== null && myUser.username} ! !
            </p>
            <p className="wfop">Waiting for other player to join .</p>
            <img src={marvel} alt="" className="deadpool" />

            <p className="parap">
              Players in room :{" "}
              {username !== null && `${username.length}/${maxParticipants}`}
            </p>
            <div className="scroll">{usernames}</div>
          </div>
        </>
      )}
    </>
  );
};
export default PrivateRoom;

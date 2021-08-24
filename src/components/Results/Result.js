import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//component
import UserScores from "./UserScores";
// styling
import "./Result.css";
import { AiFillHome } from "react-icons/ai";
import result from "../../images/result.jpg";

const Result = ({ socket }) => {
  const allChoices = useSelector((state) => state.choiceReducer.choices);
  const [roomAnswers, setRoomAnswers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userScore, setUserScore] = useState([]);
  const [changingState, setChangingState] = useState(0);

  let score = 0;
  let everyUser;
  let sortByScore;

  useEffect(() => {
    socket.emit("resultEmit", 5);
    socket.on("create-connection", (answers, userId) => {
      setRoomAnswers(answers);
      setUserId(userId);

      //we but this use state so the use effect that is under will br rerendering and the socket inside it will work
      setChangingState(2);
    });

    if (roomAnswers.length !== 0) {
      const results = allChoices.filter(({ id: id1 }) =>
        roomAnswers.some(({ choiceId: id2 }) => id2 === id1)
      );

      for (let i = 0; i < results.length; i++) {
        score = results[i].point + score;
      }
    }

    if (userId !== null) {
      socket.emit("score", score, userId);

      socket.on("usersScores", (scores) => {
        setUserScore(scores);
      });
    }
  }, [changingState]); //we create this state so this useEffect will work

  sortByScore = userScore.sort((a, b) => {
    return b.score - a.score;
  });

  everyUser = sortByScore.map((user) => <UserScores user={user} />);
  return (
    <div className="result">
      <img src={result} alt="" className="resultbook" />
      <div className="title">Score Board</div>
      <Link to="/user">
        <div className="again" type="button">
          Play Again
        </div>
      </Link>
      <Link to="/">
        <AiFillHome className="homeicon" />
      </Link>
      <div className="first">
        {/* <h1>{everyUser}</h1> */}
        <h1>{everyUser}</h1>
        {/* <h1 style={{ color: "red" }}>{everyUser[1]}</h1> */}
      </div>
    </div>
  );
};
export default Result;

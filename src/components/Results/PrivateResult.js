import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//component
import UserScores from "./UserScores";
// styling
import "./Result.css";
import { FaTrophy } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import tv from "../../images/tv.png";
import remote from "../../images/remote.png";

const PrivateResult = ({ socket }) => {
  const allChoices = useSelector((state) => state.choiceReducer.choices);
  const [roomAnswers, setRoomAnswers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userScore, setUserScore] = useState([]);
  const [changingState, setChangingState] = useState(0);

  let score = 0;
  let everyUser;
  let sortByScore;

  useEffect(() => {
    socket.emit("privateResultEmit", 5);
    socket.on("create-connection-private", (answers, userId) => {
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
      socket.emit("scorePrivate", score, userId);

      socket.on("usersScoresPrivate", (scores) => {
        setUserScore(scores);
        console.log(scores);
      });
    }
  }, [changingState]); //we create this state so this useEffect will work

  sortByScore = userScore.sort((a, b) => {
    return b.score - a.score;
  });

  everyUser = sortByScore.map((user) => <UserScores user={user} />);

  return (
    <div>
      the result are :{everyUser}
      {/* <img src={tv} alt="" className="tv" />
      <img src={remote} alt="" className="remote" />
      <Link to="/user">
        <div className="again" type="button">
          Play Again
        </div>
      </Link>
      <Link to="/">
        <AiFillHome className="homeicon" />
      </Link>
      <div className="first">
        <FaTrophy
          style={{
            color: "#ffd700",
            position: "absolute",
            height: "70px",
            width: "45px",
            right: "96%",
            marginBottom: "5%",
          }}
        />
        <h1>Winner !!</h1>
      </div>
      <div className="second">
        <FaTrophy
          style={{
            color: "#767473",
            position: "absolute",
            height: "55px",
            width: "36px",
            right: "96%",
          }}
        />
        <h1>Loser 1 !!</h1>
      </div>
      <div className="third">
        <FaTrophy
          style={{
            color: "#8A5A44",
            position: "absolute",
            height: "45px",
            width: "30px",
            right: "97%",
          }}
        />
        <h1>Loser 2 !!</h1>
      </div>
      <div className="rest"></div> */}
    </div>
  );
};
export default PrivateResult;

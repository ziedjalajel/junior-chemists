import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Routes from "./components/Routes";
import { useSelector } from "react-redux";

//styling
import deadpool from "./images/deadpool.gif";
import "./App.css";

function App() {
  const loadingAnswer = useSelector((state) => state.answerReducer.loading);
  const LoadingRooms = useSelector((state) => state.roomReducer.loading);
  const LoadingQuestions = useSelector(
    (state) => state.questionReducer.loading
  );
  const loadingChoices = useSelector((state) => state.choiceReducer.loading);

  const [socket, setSocket] = useState(null);
  const username = "zied";
  const room = "room1";
  useEffect(() => {
    setSocket(io("localhost:8000"));
  }, []);
  useEffect(() => {
    if (socket) {
    }
  }, [socket]);

  return (
    <div>
      {LoadingRooms || LoadingQuestions || loadingChoices || loadingAnswer ? (
        <img src={deadpool} alt="" className="loadingImg" />
      ) : (
        <Routes socket={socket} />
      )}
    </div>
  );
}

export default App;

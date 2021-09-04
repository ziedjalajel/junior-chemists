import { io } from "socket.io-client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setSocket(io("https://junior-chemists-be-bl7l7.ondigitalocean.app/"));
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

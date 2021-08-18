import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Routes from "./components/Routes";
import { useSelector } from "react-redux";

function App() {
  //ToDo  answers loading
  const LoadingRooms = useSelector((state) => state.roomReducer.loading);
  const LoadingQuestions = useSelector(
    (state) => state.questionReducer.loading
  );
  const loadingChoices = useSelector((state) => state.choiceReducer.loading);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("localhost:8000"));
  }, []);
  useEffect(() => {
    if (socket) {
    }
  }, [socket]);

  return (
    <div>
      {LoadingRooms || LoadingQuestions || loadingChoices ? (
        <BeatLoader size={10} />
      ) : (
        <Routes socket={socket} />
      )}
    </div>
  );
}

export default App;

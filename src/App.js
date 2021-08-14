import { io } from "socket.io-client";
import { useEffect, useState } from "react";
//components
import Routes from "./components/Routes";

function App() {
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

  return <Routes socket={socket} />;
}

export default App;

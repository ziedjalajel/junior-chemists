//styling
import "./Question.css";
//components
import Questions from "./Questions";

const Room = ({ socket }) => {
  return (
    <>
      <Questions socket={socket} />
    </>
  );
};
export default Room;

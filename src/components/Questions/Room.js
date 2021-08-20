//styling
import "./Question.css";
import Questions from "./Questions";
//components
import QuestionList from "./QuestionList";

const Room = ({ socket }) => {
  return (
    <>
      {/* <QuestionList /> */}
      <Questions socket={socket} />
    </>
  );
};
export default Room;

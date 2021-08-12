import { useSelector } from "react-redux";
//styling
import "./Question.css";

const Questions = (props) => {
  // const quests=useSelector((state)=>state.Data)
  // const questList = quests.map((quest)=><QuestionItem quest={quest} key={quest.id}/>)
  return (
    <div className="d">
      <div className="question">
        <p>{}</p>
      </div>
    </div>
  );
};
export default Questions;

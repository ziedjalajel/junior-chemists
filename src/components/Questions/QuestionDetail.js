//components
import ChoiceDetail from "./ChoiceDetail";

const QuestionDetail = ({ questions }) => {
  const choice = questions.choices.map((c) => (
    <ChoiceDetail c={c} key={c.id} questionId={questions.id} choiceId={c.id} />
  ));
  return (
    <div>
      <div>
        <p>{questions.text}</p>
        <p>{choice}</p>
      </div>
      <br />
    </div>
  );
};
export default QuestionDetail;

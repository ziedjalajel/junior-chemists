const QuestionDetail = ({ questions, answers, setAnswers }) => {
  const choice = questions.choices.map((c) => (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={questions.id}
        value={c.id}
        // checked={answers[questions.id] === c.id}
        style={{ backgroundColor: "#A6A6A4" }}
      />
      <label className="form-check-label"> {c.text}</label>
    </div>
  ));
  return (
    <div>
      <div>
        <p>{questions.text}</p>
        <div
          onChange={(e) =>
            setAnswers({ ...answers, [e.target.name]: +e.target.value })
          }
        >
          <br />
          <br />
          <div className="choice">{choice}</div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default QuestionDetail;

import { useSelector } from "react-redux";

const ChoiceDetail = ({ c }) => {
  return (
    <div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label">{c.text}</label>
        </div>
        <br />
      </div>
    </div>
  );
};
export default ChoiceDetail;

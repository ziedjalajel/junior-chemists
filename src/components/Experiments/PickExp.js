//styling
import "./Exp.css";
import E1 from "../../images/exp1.png";
import E2 from "../../images/exp2.png";
import E3 from "../../images/exp3.png";

const PickExp = () => {
  return (
    <div className="pickexp">
      <div className="exp1" type="button">
        <img src={E1} />
      </div>
      <div className="exp2" type="button">
        <img src={E2} />
      </div>
      <div className="exp3" type="button">
        <img src={E3} />
      </div>
    </div>
  );
};
export default PickExp;
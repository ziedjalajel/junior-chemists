import { Link } from "react-router-dom";
//styling
import "./Exp.css";
import E1 from "../../images/exp1.png";
import E2 from "../../images/exp2.png";
import E3 from "../../images/exp3.png";

const PickExp = () => {
  return (
    <div className="pickexp">
      {" "}
      <Link to="/titration">
        <div className="exp1" type="button">
          <img src={E1} />
        </div>
      </Link>
      <Link to="/sodium-exp">
        <div className="exp2" type="button">
          <img src={E2} />
        </div>
      </Link>
      <Link to="/soap-exp">
        <div className="exp3" type="button">
          <img src={E3} />
        </div>
      </Link>
    </div>
  );
};
export default PickExp;

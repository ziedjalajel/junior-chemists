import { Link } from "react-router-dom";
// styling
import "./Result.css";
import { AiFillHome } from "react-icons/ai";
import result from "../../images/result.jpg";

const Result = () => {
  return (
    <div className="result">
      <img src={result} alt="" className="resultbook" />
      <Link to="/user">
        <div className="again" type="button">
          Play Again
        </div>
      </Link>
      <Link to="/">
        <AiFillHome className="homeicon" />
      </Link>
      <div className="first">
        <h1>Winner !!</h1>
      </div>
      <div className="second">
        <h1>Loser 1 !!</h1>
      </div>
      <div className="third">
        <h1>Loser 2 !!</h1>
      </div>
      <div className="rest"></div>
    </div>
  );
};
export default Result;

import { Link } from "react-router-dom";
// styling
import "./Result.css";
import { FaTrophy } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import tv from "../../images/tv.png";
import remote from "../../images/remote.png";

const PrivateResult = () => {
  return (
    <div className="result">
      <img src={tv} alt="" className="tv" />
      <img src={remote} alt="" className="remote" />
      <Link to="/user">
        <div className="again" type="button">
          Play Again
        </div>
      </Link>
      <Link to="/">
        <AiFillHome className="homeicon" />
      </Link>
      <div className="first">
        <FaTrophy
          style={{
            color: "#ffd700",
            position: "absolute",
            height: "70px",
            width: "45px",
            right: "96%",
            marginBottom: "5%",
          }}
        />
        <h1>Winner !!</h1>
      </div>
      <div className="second">
        <FaTrophy
          style={{
            color: "#767473",
            position: "absolute",
            height: "55px",
            width: "36px",
            right: "96%",
          }}
        />
        <h1>Loser 1 !!</h1>
      </div>
      <div className="third">
        <FaTrophy
          style={{
            color: "#8A5A44",
            position: "absolute",
            height: "45px",
            width: "30px",
            right: "97%",
          }}
        />
        <h1>Loser 2 !!</h1>
      </div>
      <div className="rest"></div>
    </div>
  );
};
export default PrivateResult;

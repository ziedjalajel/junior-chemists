// styling
import "./Result.css";
import { FaTrophy } from "react-icons/fa";

const Result = () => {
  return (
    <div className="result">
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
      <div className="third"></div>
      <div className="rest"></div>
    </div>
  );
};
export default Result;

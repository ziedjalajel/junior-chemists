import { Link } from "react-router-dom";
//styling
import "./Home.css";
import DoorExp from "../../images/experiments-door.png";
import DoorQuiz from "../../images/quizes-door.png";
import PT from "../../images/pt.png";
import Lab from "../../images/Ab7b.gif";
import Quiz from "../../images/q.gif";
import bg from "../../images/bg.png";
import walking from "../../images/walking.gif";
import opposit from "../../images/opposit.gif";

const Home = () => {
  return (
    <div className="home">
      <img className="home" src={bg} alt="" />
      <Link to="/choose-experiment">
        <div className="exp" type="button">
          <div>
            <img className="inside1" src={Lab} alt="" />
          </div>
          <div className="door">
            <img className="img1" src={DoorExp} alt="" />
          </div>
        </div>
      </Link>
      <img className="img3" src={PT} alt="" />
      <Link to="/team">
        <div className="quizes" type="button">
          <div>
            <img className="inside2" src={Quiz} alt="" />
          </div>
          <img className="img2" src={DoorQuiz} alt="" />
        </div>
      </Link>
    </div>
  );
};
export default Home;

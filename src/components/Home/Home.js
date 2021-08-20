import { Link } from "react-router-dom";
//styling
import "./Home.css";
import DoorExp from "../../images/experiments-door.png";
import DoorQuiz from "../../images/quizes-door.png";
import PT from "../../images/pt.png";
import Lab from "../../images/Ab7b.gif";
import Quiz from "../../images/q.gif";

const Home = () => {
  return (
    <div className="home">
      <Link to="/choose-experiment">
        <div className="exp" type="button">
          <div>
            <img className="inside1" src={Lab} />
          </div>
          <div className="door">
            <img className="img1" src={DoorExp} />
          </div>
        </div>
      </Link>
      <img className="img3" src={PT} />
      <Link to="/team">
        <div className="quizes" type="button">
          <div>
            <img className="inside2" src={Quiz} />
          </div>
          <img className="img2" src={DoorQuiz} />
        </div>
      </Link>
    </div>
  );
};
export default Home;

import { Link } from "react-router-dom";
//styling
import "./Home.css";
import DoorExp from "../../images/experiments-door.png";
import DoorQuiz from "../../images/quizes-door.png";
import PT from "../../images/pt.png";

const Home = () => {
  return (
    <div className="home">
      <Link to="/choose-experiment">
        <div className="exp" type="button">
          <img className="img1" src={DoorExp} />
        </div>
      </Link>
      <img className="img3" src={PT} />
      <Link to="/team">
        <div className="quizes" type="button">
          <img className="img2" src={DoorQuiz} />
        </div>
      </Link>
    </div>
  );
};
export default Home;

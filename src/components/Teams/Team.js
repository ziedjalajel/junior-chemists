import { Link } from "react-router-dom";
//styling
import "./team.css";
import Random from "../../images/book1.png";
import Private from "../../images/book2.png";

const Team = () => {
  return (
    <div className="team">
      <Link to="/user">
        <div className="random" type="button">
          <img className="imgteam1" src={Random} />
        </div>
      </Link>
      <div className="private" type="button">
        <img className="imgteam2" src={Private} />
      </div>
    </div>
  );
};
export default Team;

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
          <img className="imgteam1" src={Random} alt={"hello"} />
        </div>
      </Link>
      <div className="private" type="button">
        <img className="imgteam2" src={Private} alt={"hello"} />
      </div>
    </div>
  );
};
export default Team;

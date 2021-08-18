import { Link } from "react-router-dom";
//styling
import "./team.css";
import "./Test.css";

import Private from "../../images/book2.png";
import Dht from "../../images/DhT.png";

const Team = () => {
  return (
    <div className="team">
      <Link to="/user">
        <div className="random">
          <figure className="book">
            <ul className="hardcover_front">
              <li>
                <img
                  src={Dht}
                  alt=""
                  width="100%"
                  height="100%"
                  type="button"
                />
              </li>
              <li></li>
            </ul>

            <ul className="page">
              <li>experiments</li>
              <li></li>
              <li></li>
              {/* <li>aya want to steal it</li> */}
              <li></li>
            </ul>

            <ul className="hardcover_back">
              <li></li>
              <li></li>
            </ul>
            <ul className="book_spine">
              <li></li>
              {/* <li></li> */}
            </ul>
          </figure>
        </div>
      </Link>
      <div className="private">
        <figure
          className="book"
          style={{ position: "absolute", left: "40%", bottom: "62%" }}
        >
          <ul className="hardcover_front">
            <li>
              <img
                src={Private}
                alt=""
                width="100%"
                height="100%"
                type="button"
              />
            </li>
            <li></li>
          </ul>

          <ul className="page">
            <li>experiments</li>
            <li></li>
            <li></li>
            {/* <li>aya want to steal it</li> */}
            <li></li>
          </ul>

          <ul className="hardcover_back">
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine">
            <li></li>
            {/* <li></li> */}
          </ul>
        </figure>
      </div>
    </div>
  );
};
export default Team;

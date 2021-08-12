import { Link } from "react-router-dom";
//styling
import "./Form.css";
import Go from "../../images/Picture2.png";
import { Helmet } from "react-helmet";

const UsernameForm = () => {
  return (
    // <Helmet>
    <div className="user">
      {/* <body style={{ backgroundImage: " url(../../images/book.jpg)" }}> */}
      <div className="usernameform">
        <div className="left-div">
          <h1>Enter your Username :</h1>
          <input type="text" placeholder="..." />
        </div>
        <Link to="/quiz">
          <div className="vector" type="button">
            <img src={Go} />
          </div>
        </Link>
      </div>
      {/* </body> */}
    </div>
    // </Helmet>
  );
};
export default UsernameForm;

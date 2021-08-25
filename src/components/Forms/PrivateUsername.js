import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

//styling
import "./Form.css";
import "animate.css";
import Go from "../../images/Picture2.png";
import book from "../../images/book.jpg";
import greyarrow from "../../images/greyarrow.png";

const PrivateUsername = ({ socket }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const { roomSlug } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("createUser", { username, roomSlug });
    history.push(`/privateroom-username/${roomSlug}/private-room`);
  };

  return (
    <div className="user">
      <Link to="/creating-room">
        <img src={greyarrow} alt="" className="backarrow" />
      </Link>
      <img src={book} alt="" className="Book" />
      <div className="usernameform">
        <div className="left-div">
          <h1>Enter your Username :</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {username !== "" && (
          <div className="vector" type="button">
            <img src={Go} onClick={handleSubmit} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
export default PrivateUsername;

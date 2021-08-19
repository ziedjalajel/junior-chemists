import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//styling
import "./Form.css";
import Go from "../../images/Picture2.png";

const UsernameForm = ({ socket }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  let handleSubmit;

  handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("joinRoom", { username });
    socket.on("roomLength", (a) => {
      console.log(a);
      history.push(`/rooms`);
    });
  };

  return (
    <div className="user">
      <div className="usernameform">
        <div className="left-div">
          <h1>Enter your Username :</h1>
          <input
            type="text"
            placeholder="..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="vector" type="button">
          <img src={Go} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default UsernameForm;

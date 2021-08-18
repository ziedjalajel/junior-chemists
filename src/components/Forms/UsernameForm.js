import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Questions from "../Questions/Questions";

//styling
import "./Form.css";
import Go from "../../images/Picture2.png";

const UsernameForm = ({ socket }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const user = username;

  const handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("joinRoom", { username });
    <Questions user={user} />;
    socket.on("roomLength", (a) => {
      console.log(a);
      console.log(user);

      if (a === 4) {
        history.push(`/rooms`);
      }
    });

    // dispatch(addChatUser(chat, +chatSlug));
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

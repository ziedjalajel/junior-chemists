import { Link } from "react-router-dom";
//styling
import "./Form.css";
import Go from "../../images/Picture2.png";
import { useState } from "react";

const UsernameForm = ({ socket }) => {
  const [username, setUsername] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("joinRoom", { username, room: 1 });
    // dispatch(addChatUser(chat, +chatSlug));
    // history.push(`/chats/${chatSlug}`);
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

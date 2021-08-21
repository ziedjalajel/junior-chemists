import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//styling
import "./Form.css";
import Go from "../../images/Picture2.png";
import book from "../../images/book.jpg";
import greyarrow from "../../images/greyarrow.png";

const UsernameForm = ({ socket }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("joinRoom", { username });
    // socket.on("roomLength", (a) => {
    //   console.log(a);
    // });
    history.push(`/rooms`);
  };

  return (
    <div className="user">
      <Link to="/team">
        <img src={greyarrow} alt="" className="backarrow" />
      </Link>
      <img src={book} alt="" className="Book" />
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

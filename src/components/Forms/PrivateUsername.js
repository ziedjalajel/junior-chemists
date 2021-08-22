import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//styling
import "./Form.css";
import Swal from "sweetalert2";
import "animate.css";
import Go from "../../images/Picture2.png";
import book from "../../images/book.jpg";
import greyarrow from "../../images/greyarrow.png";
import { lightBlue } from "@material-ui/core/colors";

const PrivateUsername = ({ socket }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const hayder = "hello";
  Swal.fire({
    icon: "info",
    html:
      "Copy <b>Link</b> and send it to your friends,<br/>" +
      `<a http://localhost:3000/${hayder}>http://localhost:3000/${hayder}</a> ` +
      "<br/><b>Don't forget to enter your username ",
    width: "600px",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("joinRoom", { username });
    // socket.on("roomLength", (a) => {
    //   console.log(a);
    // });
    history.push(`/private-room`);
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
            placeholder="..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="vector" type="button">
          <img src={Go} onClick={handleSubmit} alt="" />
        </div>
      </div>
    </div>
  );
};
export default PrivateUsername;

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//styling
import "./Form.css";
import Go from "../../images/Picture2.png";
import book from "../../images/book.jpg";
import greyarrow from "../../images/greyarrow.png";
import Swal from "sweetalert2";

const PrivateRoomForm = ({ socket }) => {
  console.log(socket.id);
  const history = useHistory();
  const [team, setTeam] = useState({ name: "", participant: 2 });

  const handleChange = (event) => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("joinPrivateRoom", { team });
    socket.on("slug", (slug) => {
      history.push(`/privateroom-username/${slug}`);

      Swal.fire({
        icon: "info",
        html:
          "Copy <b>Link</b> and send it to your friends,<br/>" +
          `<a>http://localhost:3000/privateroom-username/${slug}</a>` +
          "<br/><b>Don't forget to enter your username ",
        width: "600px",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
  };

  return (
    <div className="user">
      <Link to="/team">
        <img src={greyarrow} alt="" className="backarrow" />
      </Link>
      <img src={book} alt="" className="Book" />
      <form onSubmit={handleSubmit}>
        <div className="nameofroom">
          <h1 className="roomname">Enter room name : </h1>
          <input
            className="roomnameinput"
            name="name"
            type="text"
            placeholder="Room name is required"
            value={team.name}
            onChange={handleChange}
          />
        </div>
        <div className="numpart">
          <h1 className="number">Number of participants : </h1>
          <input
            className="roomnameinput"
            type="number"
            placeholder="..."
            value={team.participant}
            name="participant"
            onChange={handleChange}
          />
        </div>
        {team.name !== "" && (
          <div className="vector" onClick={handleSubmit}>
            <div type="submit" className="vector">
              <img src={Go} alt="" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default PrivateRoomForm;

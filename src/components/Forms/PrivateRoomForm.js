import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//action
import { addRoom } from "../../store/actions/roomAction";
//styling
import "./Form.css";
import "animate.css";
import Swal from "sweetalert2";
import Go from "../../images/Picture2.png";
import book from "../../images/book.jpg";
import greyarrow from "../../images/greyarrow.png";

const PrivateRoomForm = ({ socket }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [team, setTeam] = useState({ name: "" });

  const handleChange = (event) => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRoom(team));
    Swal.fire({
      icon: "info",
      html:
        "Copy <b>Link</b> and send it to your friends,<br/>" +
        `<a http://localhost:3000/${hayder}>http://localhost:3000/${hayder}</a> ` +
        "<br/><b>Don't forget to enter your username ",
      width: "600px",
      showClass: {
        popup: "animate__animated animate__bounce",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    history.push(`/privateroom-username`);
  };
  const hayder = "hello";

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
          {/* <input
          className="roomnameinput"
          type="number"
          placeholder="..."
          value={username}
          onChange={handleChange}
        /> */}
        </div>
        <div className="vector" onClick={handleSubmit}>
          {team.name === "" ? (
            <div className="vector" style={{ color: "red", zIndex: "6" }}>
              Room name is required
            </div>
          ) : (
            <Link to="/privateroom-username">
              <div type="button" className="vector">
                <img src={Go} alt="" />
              </div>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};
export default PrivateRoomForm;

//styling
import "./explosion.css";
import bucket from "./images/waterbucket.png";
import Na from "./images/sodium.png";
import NaPieces from "./images/Na.png";
import kaboom from "./images/boom.gif";
import fire from "./images/fire.gif";
import broken from "./images/brokenbeaker.png";
//components
import Procedure from "./Procedure";

const Explosion = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <button className="btn" onClick={refreshPage}>
        <p className="Repeat">Repeat</p>
      </button>
      <div className="Exp2">
        <img src={bucket} alt="" className="bucket" />
        <img src={Na} alt="" className="Na" />
        <img src={NaPieces} alt="" className="NaPieces" />
        <img src={kaboom} alt="" className="kaboom" />
        <img src={fire} alt="" className="fire" />
        <img src={broken} alt="" className="broken" />
      </div>
      <Procedure />
    </>
  );
};
export default Explosion;

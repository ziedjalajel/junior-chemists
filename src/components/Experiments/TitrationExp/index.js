//styling
import "./titration.css";
import burette_stand from "./images/burette_stand.png";
import flask from "./images/flask.png";
import flask_liquid from "./images/flask_liquid.png";
import p from "./images/indicatorbsolp.png";
import m from "./images/indicatorbsolm.png";
import pp from "./images/indicator_bottle.png";
import mo from "./images/indicator_bottle.png";
import dropperp from "./images/dropper.png";
import dropperm from "./images/dropper.png";
import panadol from "./stirrer1.svg";
import droppermm from "./images/dropperm.png";
import dropperpp from "./images/dropperp.png";
import dropm from "./images/drop.png";
import dropp from "./images/drop.png";
import mpanadol from "./images/mstirrer.png";
import burette from "./images/burette2.png";
import orangecolor from "./images/colorchaangeafterme.png";
import dropb1 from "./images/drop.png";
import redcolor from "./images/flask_liquid_me.png";
import pinkcolor from "./images/colorchaangeafterph.png";
import dropb2 from "./images/drop.png";
//components
import Procedure from "./Procedure";

const Titration = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <button className="btn btn-outline-dark" onClick={refreshPage}>
        <p className="Repeats">Repeat</p>
      </button>
      <div className="Exp1">
        <img src={burette_stand} alt="" className="burette_stand" />
        <img src={flask} alt="" className="flask" />
        <img src={flask_liquid} alt="" className="f-l" />
        <div>
          <img src={pp} alt="" className="pp" />
          <h5 className="pph">Phenophthalene</h5>
        </div>
        <div>
          <img src={mo} alt="" className="mo" />
          <h5 className="moh">Methyl Orange</h5>
        </div>
        <img src={p} alt="" className="p" />
        <img src={m} alt="" className="m" />
        <img src={dropperp} alt="" className="dropperp" />
        <img src={dropperp} alt="" className="dropperp2" />
        <img src={dropperm} alt="" className="dropperm" />
        <img src={dropperm} alt="" className="dropperm2" />
        <img src={panadol} alt="" className="panadol" />
        <img src={droppermm} alt="" className="droppermm" />
        <img src={droppermm} alt="" className="droppermm2" />
        <img src={dropperpp} alt="" className="dropperpp" />
        <img src={dropperpp} alt="" className="dropperpp2" />
        <img src={dropm} alt="" className="dropm" />
        <img src={dropp} alt="" className="dropp" />
        <img src={mpanadol} alt="" className="mpanadol" />
        <div className="burettediv"> </div>
        <img src={burette} alt="" className="burette" />
        <img src={orangecolor} alt="" className="orangecolor" />
        <img src={dropb1} alt="" className="dropb1" />
        <img src={redcolor} alt="" className="redcolor" />
        <img src={pinkcolor} alt="" className="pinkcolor" />
        <img src={dropb2} alt="" className="dropb2" />
      </div>
      <div>
        <Procedure />
      </div>
    </>
  );
};
export default Titration;

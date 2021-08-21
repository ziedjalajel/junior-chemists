import { Link } from "react-router-dom";
//styling
import "./soapExp.css";
import Spoon from "./images/spoon.png";
import bowl from "./images/bowl.png";
import oliveoil from "./images/oliveoil.png";
import oliveoilreturn from "./images/oliveoil.png";
import soapmold from "./images/soapmold.png";
import oildrop from "./images/oildrop.png";
import thermo from "./images/thermo.png";
import water from "./images/water.png";
import Naoh from "./images/Naoh.png";
import Naoh2 from "./images/Naoh.png";
import bowloil from "./images/bowloil.png";
import oilnaoh from "./images/oilnaoh.png";
import oven from "./images/oven.png";
import beaker from "./images/beaker.png";
import naohdrop from "./images/naohdrop.png";
import Naohrotated from "./images/Naohrotated.png";
import oildropBurner from "./images/oildrop.png";
import thermoInBurner from "./images/thermo.png";
import oilOnBeaker from "./images/oliveoil2.png";
import yellowbeaker from "./images/yellowbeaker.png";
import ybRotated from "./images/ybRotated.png";
import naohbrotated from "./images/naohbrotated.png";
import bluedrop from "./images/bluedrop.png";
import poursoap1 from "./images/poursoap.png";
import poursoap2 from "./images/poursoap.png";
import poursoap3 from "./images/poursoap.png";
import poursoap4 from "./images/poursoap.png";
import soapdrop1 from "./images/soapdrop.png";
import soapdrop2 from "./images/soapdrop.png";
import soapdrop3 from "./images/soapdrop.png";
import soapdrop4 from "./images/soapdrop.png";
import soapInMold from "./images/soapInMold.png";
import soap from "./images/soap.png";
import glassRod from "./images/glassRod.png";
import arrowexp from "../../../images/arrowexp.png";
//component
import SoapProcedure from "./Procedure";

const Soap = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <Link to="/choose-experiment">
        <img src={arrowexp} alt="" className="backarrow" />
      </Link>
      <button className="btn" onClick={refreshPage}>
        <p className="Repeat">Repeat</p>
      </button>
      <div className="Exp3">
        <img src={Spoon} alt="" className="Spoon" />
        <img src={bowl} alt="" className="bowl" />
        <img src={oliveoil} alt="" className="oliveoil" />
        <img src={oliveoilreturn} alt="" className="oliveoilreturn" />
        <img src={soapmold} alt="" className="soapmold" />
        <img src={thermo} alt="" className="thermo" />
        <img src={water} alt="" className="water" />
        <img src={oildrop} alt="" className="oildrop" />
        <img src={Naoh} alt="" className="Naoh" />
        <img src={Naoh2} alt="" className="Naoh2" />
        <img src={bowloil} alt="" className="bowloil" />
        <img src={oilnaoh} alt="" className="oilnaoh" />
        <img src={oven} alt="" className="oven" />
        <img src={beaker} alt="" className="beaker" />
        <img src={naohdrop} alt="" className="naohdrop" />
        <img src={Naohrotated} alt="" className="Naohrotated" />
        <img src={oildropBurner} alt="" className="oildropBurner" />
        <img src={thermoInBurner} alt="" className="thermoInBurner" />
        <img src={oilOnBeaker} alt="" className="oilOnBeaker" />
        <img src={yellowbeaker} alt="" className="yellowbeaker" />
        <img src={ybRotated} alt="" className="ybRotated" />
        <img src={naohbrotated} alt="" className="naohbrotated" />
        <img src={bluedrop} alt="" className="bluedrop" />
        <img src={poursoap1} alt="" className="poursoap1" />
        <img src={poursoap2} alt="" className="poursoap2" />
        <img src={poursoap3} alt="" className="poursoap3" />
        <img src={poursoap4} alt="" className="poursoap4" />
        <img src={soapdrop1} alt="" className="soapdrop1" />
        <img src={soapdrop2} alt="" className="soapdrop2" />
        <img src={soapdrop3} alt="" className="soapdrop3" />
        <img src={soapdrop4} alt="" className="soapdrop4" />
        <img src={soapInMold} alt="" className="soapInMold" />
        <img src={soap} alt="" className="soap" />
        <img src={glassRod} alt="" className="glassRod" />
        <div className="thermodiv"></div>
        <div className="naohdiv"></div>
        <div className="increseHeatNaoh"></div>
      </div>
      <SoapProcedure />
    </>
  );
};
export default Soap;

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
//styling
import "./Exp.css";
import cbook1 from "../../images/cBook1.png";
import titrationBook from "../../images/titrationBook.gif";
import warning from "../../images/warning.png";
import warningExp from "../../images/warningExp.gif";
import soapE from "../../images/soapE.png";
import soapExp from "../../images/soapExp.gif";

const PickExp = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <div className="pickexp">
          <div className="house-lists">
            <Link
              to="/titration"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                className="house"
                style={{ backgroundImage: `url(${titrationBook})` }}
              >
                <div className="house-inner">
                  <div className="sigil">
                    <img src={cbook1} alt="" />
                  </div>
                  <div className="house-name">Titration Exp.</div>
                </div>
              </div>
            </Link>
            <Link
              to="/sodium-exp"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                className="house"
                style={{ backgroundImage: `url(${warningExp})` }}
              >
                <div className="house-inner">
                  <div className="sigil">
                    <img src={warning} alt="" />
                  </div>
                  <div className="house-name">Warning Exp.</div>
                </div>
              </div>
            </Link>
            <Link
              to="/soap-exp"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                className="house"
                style={{ backgroundImage: `url(${soapExp})` }}
              >
                <div className="house-inner">
                  <div className="sigil">
                    <img src={soapE} alt="" />
                  </div>
                  <div className="house-name">Soap Exp.</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default PickExp;

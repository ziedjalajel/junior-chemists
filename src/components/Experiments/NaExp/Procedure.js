import { useState, useEffect } from "react";
//styling
import "./NaProcedure.css";
import Swal from "sweetalert2";

const Procedure = () => {
  const [show, setShow] = useState(null);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(
        Swal.fire({
          icon: "warning",
          html: "You should <b>never</b> put Na in water ,It will get <b>explode</b>",
        })
      );
    }, 9000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <>
      <div>
        <p className="introNa">Experiment Procedure :</p>
        <p className="NaProc1">1. Don't put Na in .....</p>
        <p className="NaProc2">It's tooo laate !!!!</p>
      </div>
      <p className="NaProc3">{Swal.fire}</p>
    </>
  );
};
export default Procedure;

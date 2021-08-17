import Lab from "../../images/lab.jpg";
import "./Test.css";

const Test = () => {
  return (
    <figure className="book">
      <ul className="hardcover_front">
        <li>
          <img src={Lab} alt="" width="100%" height="100%" />
        </li>
        <li></li>
      </ul>

      <ul className="page">
        <li>experiments</li>
        <li></li>
        <li></li>
        {/* <li>aya want to steal it</li> */}
        <li></li>
      </ul>

      <ul className="hardcover_back">
        <li></li>
        <li></li>
      </ul>
      <ul className="book_spine">
        <li></li>
        {/* <li></li> */}
      </ul>
    </figure>
  );
};
export default Test;

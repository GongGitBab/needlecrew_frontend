import "./Section3.css";
import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <div className="Section3">
      <div className="section3-text">
        <h1>
          믿고 맡길 수 있는
          <br />
          니들크루의 전문 수선사!
        </h1>
        <Link to="/RepairRequest">
        <input
          type="button"
          value="수선 의뢰 바로가기"
          className="section-button"
        />
        </Link>
      </div>

      <img src="./Section3.png" className="section3-img"></img>
    </div>
  );
}

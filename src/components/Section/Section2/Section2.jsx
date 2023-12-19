import "./Section2.css";
import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <div className="Section2">
      <img src="./Section2.png" className="section2-img"></img>
      <div className="section2-text">
        <h1>
          종류와 상관없이
          <br />
          어떤 옷이든 맡겨보세요
        </h1>
        <Link to="/RepairRequest">
        <input
          type="button"
          value="수선 의뢰 바로가기"
          className="section-button"
        />
        </Link>
      </div>
    </div>
  );
}

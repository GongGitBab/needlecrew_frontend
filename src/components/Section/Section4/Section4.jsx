import "./Section4.css";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <div className="Section4">
      <img src="./Section4.png" className="section4-img"></img>
      <div className="section4-text">
        <h1>
          이제 직접 나가지 않아도
          <br />
          편리하게 수거까지!
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

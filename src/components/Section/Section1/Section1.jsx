import "./Section1.css";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <div className="Section1">
      <div className="section1-text">
        <h1>
          쇼핑몰에서도?
          <br />
          우리집에서도? 어디서든!
        </h1>
        <Link to="/RepairRequest">
          <input
            type="button"
            value="수선 의뢰 바로가기"
            className="section-button"
          ></input>
        </Link>
      </div>
      <img src="/Section1.png" className="section1-img"></img>
    </div>
  );
}

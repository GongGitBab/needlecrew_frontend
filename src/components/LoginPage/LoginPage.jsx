import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LoginSection">
        <Link to="/">
          <img src="/logo.png" className="LoginPage-logo"></img>
        </Link>
        <div className="ButtonSection">
          <input
            type="text"
            placeholder="이메일 주소를 입력해주세요."
            onfocus="this.placeholder=''"
            className="IDButton"
          ></input>
          <input
            type="text"
            placeholder="비밀번호를 입력해주세요."
            onfocus="this.placeholder=''"
            className="PWButton"
          ></input>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <input type="button" value="로그인" className="LoginButton"></input>
            <input
              type="button"
              value="구글로 로그인"
              className="GoogleLogin"
            />
          </div>
        </div>
        <div className="signUp-sub">
          니들크루 회원이 아니신가요?{" "}
          <div className="signUp-button">회원가입</div>
        </div>
      </div>
    </div>
  );
}

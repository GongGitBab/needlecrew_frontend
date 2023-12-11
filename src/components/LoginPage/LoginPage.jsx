import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LoginSection">
        <Link to="/">
          <img src="/logo.png" className="LoginPage-logo"></img>
        </Link>
        <h1>니들크루를 함께 시작해볼까요?</h1>

        <div className="ButtonSection">
          <input
            type="text"
            value="아이디를 입력해주세요."
            className="IDButton"
          ></input>
          <input
            type="text"
            value="비밀번호를 입력해주세요."
            className="PWButton"
          ></input>
          <input type="button" value="로그인" className="LoginButton"></input>
          <input type="button" value="구글로 로그인"></input>
        </div>
      </div>
    </div>
  );
}

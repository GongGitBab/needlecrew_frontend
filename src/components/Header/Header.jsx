import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src="/logo.png" className="logo"></img>
      </Link>
      <Link to="/RepairRequest" className="header-a">
        <p>수선 의뢰</p>
      </Link>
      <a href="https://needlecrew.channel.io/home" className="header-a">
        <p>AI 문의</p>
      </a>
      <Link to="/login" className="login">
        <p>로그인</p>
      </Link>
      <Link to="/login" className="signUp">
        <p>회원가입</p>
      </Link>
    </div>
  );
}

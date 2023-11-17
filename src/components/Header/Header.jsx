import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src="/logo.png" className="logo"></img>
      </Link>
      <Link to="/" className="header-a">
        <p>수선 의뢰</p>
      </Link>
      <Link to="/" className="header-a">
        <p>챗봇</p>
      </Link>
    </div>
  );
}

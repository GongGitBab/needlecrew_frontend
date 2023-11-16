import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src="/logo.png" className="logo"></img>
      </Link>
      <Link to="/">
        <p>메뉴 1</p>
      </Link>
      <Link to="/">
        <p>메뉴 2</p>
      </Link>
    </div>
  );
}

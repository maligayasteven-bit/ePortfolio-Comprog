import Icon from "../../components/Icon/Icon";
import "./Navbar.css";

export default function Navbar({ page, setPage }) {
  return (
    <header className="nav">
      <div className="logo"><span className="logo-mark"><Icon name="cap" size={16} /></span><span>ePortfolio<small>COMPROG • ACADEMIC</small></span></div>
      <nav className="seg">
        <button className={page === "overview" ? "on" : ""} onClick={() => setPage("overview")}>Overview &amp; Intro</button>
        <button className={page === "tasks" ? "on" : ""} onClick={() => setPage("tasks")}>Tasks Done</button>
      </nav>
      <a className="btn" href={`${import.meta.env.BASE_URL}source-code.zip`} download="eportfolio-source-code.zip"><Icon name="download" /> Download Source Code</a>
    </header>
  );
}

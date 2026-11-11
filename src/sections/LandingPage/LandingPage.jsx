import Icon from "../../components/Icon/Icon";
import StatsBar from "../StatsBar/StatsBar";
import ProfileReflection from "../ProfileReflection/ProfileReflection";
import { INFO } from "../../data/portfolioData";
import "./LandingPage.css";

const INFO_ICONS = ["cap", "file", "list", "folder"];

export default function LandingPage() {
  return (
    <main className="wrap">
      <div className="chips">
        <span className="chip">Scholarly synthesis</span>
        <span className="chip white">Academic portfolio 2026–2027</span>
      </div>
      <div className="hero">
        <div>
          <h1>E-Portfolio: <em>Computer Programming</em></h1>
          <p className="lead">A comprehensive documentation of rigorous learning journeys, laboratory deliverables, prelim, and midterm capstone milestones of academic prowess.</p>
        </div>
        <div className="eval">
          <b>EVALUATION GRADE STATUS <span>Verified Final</span></b>
          <div className="bar" />
          All peer-reviewed sprints &amp; laboratory tasks archived for university institutional repository.
        </div>
      </div>
      <div className="info">
        {INFO.map(([label, value], i) => (
          <div key={label}>
            <span className="ico"><Icon name={INFO_ICONS[i]} size={18} /></span>
            <span><div className="lbl">{label}</div><div className="val">{value}</div></span>
          </div>
        ))}
      </div>
      <StatsBar />
      <ProfileReflection />
    </main>
  );
}

import { STATS } from "../../data/portfolioData";
import "./StatsBar.css";

export default function StatsBar() {
  return (
    <section className="stats">
      {STATS.map(([label, num, sub]) => (
        <div key={label}>
          <div className="lbl">{label}</div>
          <div className="n">{num}</div>
          <p>{sub}</p>
        </div>
      ))}
    </section>
  );
}

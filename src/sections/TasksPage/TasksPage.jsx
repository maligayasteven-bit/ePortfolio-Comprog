import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import TaskCard from "../TaskCard/TaskCard";
import { ALL, PRELIM, MIDTERM, FINAL } from "../../data/portfolioData";
import "./TasksPage.css";

const GROUPS = [
  ["prelim", "PRELIM", "Preliminary Term Deliverables", PRELIM],
  ["midterm", "MIDTERM", "Midterm Term Deliverables", MIDTERM],
  ["final", "FINAL", "Final Term Deliverables", FINAL],
];

export default function TasksPage() {
  const [filter, setFilter] = useState("all");
  const tabs = [
    ["all", `All Submissions (${ALL.length})`],
    ["prelim", `Prelim Term (${PRELIM.length})`],
    ["midterm", `Midterm Term (${MIDTERM.length})`],
    ["final", `Final Term (${FINAL.length})`],
  ];
  const groups = GROUPS.filter(([key]) => filter === "all" || filter === key);

  return (
    <main className="wrap">
      <div className="chips">
        <span className="chip"><Icon name="cap" /> AY 2026–2027 • Sem 1</span>
        <span className="chip"><Icon name="list" /> {ALL.length} Total Course Submissions</span>
        <span className="chip dark"><Icon name="check" /> 100% Status Completed</span>
      </div>
      <h1 style={{ fontSize: "clamp(30px, 4vw, 40px)" }}>Coursework &amp; Laboratory Submissions</h1>
      <p className="lead" style={{ fontSize: 17 }}>Official repository of individual and paired deliverables across Preliminary, Midterm, and Final periods with verified completion records and PDF artifacts.</p>

      <div className="tabs">
        <div>
          {tabs.map(([key, label]) => (
            <button key={key} className={filter === key ? "on" : ""} onClick={() => setFilter(key)}>{label}</button>
          ))}
        </div>
        <span><Icon name="filter" /> Filter by period</span>
      </div>

      {groups.map(([key, pill, heading, list]) => (
        <section key={key}>
          <div className="grp">
            <div><span className="pill">{pill}</span> {heading}</div>
            <span className="count">{list.length} Deliverables</span>
          </div>
          {list.map((t, i) => <TaskCard task={t} key={i} />)}
        </section>
      ))}
    </main>
  );
}

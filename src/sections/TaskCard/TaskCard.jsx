import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import CodeRunner from "../CodeRunner/CodeRunner";
import "./TaskCard.css";

export default function TaskCard({ task }) {
  const [open, setOpen] = useState(false);
  const runnable = Array.isArray(task.items);

  return (
    <div className="task">
      <div className="row">
        <div>
          <span className="tg">{task.tag}</span>
          <h5>{task.title}</h5>
          {task.time && <div className="meta"><Icon name="clock" /> Submitted at {task.time}</div>}
          {task.due && <div className="meta"><Icon name="clock" /> Due Date: {task.due}</div>}
          {task.module && <div className="meta"><Icon name="folder" /> Module: {task.module}</div>}
          {task.points && <div className="pts">{task.points}</div>}
        </div>
        <div className="act">
          <span className="done"><Icon name="check" size={12} /> Completed</span>
          {runnable ? (
            <button className={"btn ghost run-toggle" + (open ? " open" : "")} aria-expanded={open} onClick={() => setOpen(!open)}>
              <Icon name="play" /> Run Code ({task.items.length}) <Icon name="chevron" />
            </button>
          ) : task.pdf ? (
            <a className={"btn" + (task.primary ? "" : " ghost")} href={task.pdf} download>
              <Icon name="file" /> Download PDF
            </a>
          ) : (
            <span className="btn ghost" aria-disabled="true" style={{ opacity: 0.5, cursor: "not-allowed" }}>
              <Icon name="file" /> No PDF yet
            </span>
          )}
        </div>
      </div>
      {runnable && open && <div className="panel"><CodeRunner items={task.items} /></div>}
    </div>
  );
}

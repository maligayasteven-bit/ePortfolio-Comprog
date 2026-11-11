import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import { runJava } from "../../lib/javaRunner";
import "./CodeRunner.css";

function RunnableItem({ item }) {
  const [stdin, setStdin] = useState(item.input || "");
  const [result, setResult] = useState(null);
  const needsInput = /Scanner/.test(item.code);

  return (
    <div className="cr-item">
      <div className="cr-head">
        <b>{item.name}</b>
        <button className="cr-run" onClick={() => setResult(runJava(item.code, stdin))}>
          <Icon name="play" size={12} /> Run
        </button>
      </div>
      <pre className="cr-code"><code>{item.code}</code></pre>
      {needsInput && (
        <label className="cr-stdin">
          <span className="lbl">PROGRAM INPUT (one value per line)</span>
          <textarea rows={Math.min(8, stdin.split("\n").length + 1)} value={stdin} onChange={(e) => setStdin(e.target.value)} spellCheck={false} />
        </label>
      )}
      {result && (
        <div className="cr-out" role="status">
          <span className="lbl">OUTPUT</span>
          <pre>{result.output}{result.error && <span className="cr-err">{result.output && !result.output.endsWith("\n") ? "\n" : ""}{result.error}</span>}</pre>
        </div>
      )}
    </div>
  );
}

export default function CodeRunner({ items }) {
  return <div className="cr">{items.map((it) => <RunnableItem key={it.name} item={it} />)}</div>;
}

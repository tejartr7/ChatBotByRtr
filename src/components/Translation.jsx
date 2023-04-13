import React from 'react'
import './translation.css'

export default function Translation({ enter, setInput, result }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <hr></hr>
      <button className="action-btn" onClick={enter}>
        Enter
      </button>

      <h3 className="result-text">{result.length > 0 ? result : "Not found"}</h3>
    </div>
  );
}

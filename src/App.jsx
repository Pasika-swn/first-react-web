import { useState } from "react";
import "@picocss/pico"; //ช่วยให้ mark-up html สวยขึ้น
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      {/* 1rem ~ 16px */}
      <h1 className="app-title">My note app</h1>

      <div className="note-list">
        <article className="note-item">
          <div className="note-title">Note 1</div>
        </article>

        <article className="note-item">
          <div className="note-title">Note 2</div>
        </article>
      </div>

      <div className="note-title">
        <label htmlFor="title">
          First name
          <input
            id="note-title"
            type="text"
            id="title"
            name="title"
            placeholder="The note's title"
            required
          />
        </label>

        <label htmlFor="note-content">
          Content
          <textarea type="text" id="content" name="content" required />
        </label>

        <button type="button">Save</button>
      </div>
    </main>
  );
}

export default App;

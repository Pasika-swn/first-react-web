import { useState } from "react";
import "@picocss/pico"; //ช่วยให้ mark-up html สวยขึ้น

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      {/* 1rem ~ 16px */}
      <h1 style={{ marginBottom: "1rem" }}>My note</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        <article style={{ margin: 0 }}>
          <div>Note 1</div>
        </article>

        <article style={{ margin: 0 }}>
          <div>Note 1</div>
        </article>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="title">
          First name
          <input
            type="text"
            id="title"
            name="title"
            placeholder="The note's title"
            required
          />
        </label>

        <label htmlFor="content">
          Content
          <textarea type="text" id="content" name="content" required />
        </label>

        <button type="button">Save</button>
      </div>
    </main>
  );
}

export default App;

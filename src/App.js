import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event :", event);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ducimus voluptas excepturi dicta unde ullam, rerum obcaecati aliquid
          recusandae quisquam quae a nemo quo minima architecto, porro nam esse
          doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ducimus voluptas excepturi dicta unde ullam, rerum obcaecati aliquid
          recusandae quisquam quae a nemo quo minima architecto, porro nam esse
          doloremque.
        </p>
      </article>
    </section>
  );
}

export default App;

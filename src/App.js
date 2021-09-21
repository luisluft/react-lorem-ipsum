import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let amount = parseInt(count);
    if (count < 0) amount = 0;
    if (count > 100) amount = 100;

    const response = await fetch(
      `https://baconipsum.com/api/?type=meat-and-fillert&paras=${amount}`
    );
    const lorems = await response.json();
    setText(lorems.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          max="100"
          min="1"
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
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;

import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [color, setColor] = useState(colors[0]);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });

      let newColor;
      do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      } while (newColor === color);
      setColor(newColor);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({ text: "Could not fetch a quote. Try again!", author: "" });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" — ${quote.author}`
  )}`;

  const buttonStyle = {
    backgroundColor: color,
    borderColor: color,
    color: "#fff",
    transition: "background-color 1s ease, border-color 1s ease",
  };

  const appStyle = {
    backgroundColor: color,
    minHeight: "100vh",
    transition: "background-color 1s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  return (
    <div style={appStyle}>
      <div
        id="quote-box"
        className="p-4 rounded shadow w-75 text-center"
        style={{
          backgroundColor: "#fff",
          transition: "color 1s ease",
          color: color,
        }}
      >
        <h2 id="text" className="mb-3">
          {quote.text}
        </h2>
        <h4 id="author" className="mb-4">
          — {quote.author}
        </h4>
        <div className="d-flex justify-content-between">
          <button
            id="new-quote"
            className="btn"
            style={buttonStyle}
            onClick={fetchQuote}
          >
            New Quote
          </button>
          <a
            href={tweetUrl}
            id="tweet-quote"
            className="btn"
            style={buttonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

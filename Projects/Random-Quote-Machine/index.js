import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

/* ------------------------------
   Quotes array: local fallback
------------------------------ */
const quotes = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 2,
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    id: 3,
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    id: 4,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 5,
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    id: 6,
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    id: 7,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 8,
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    id: 9,
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: 10,
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
];

/* ------------------------------
   Colors array for dynamic backgrounds
------------------------------ */
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
];

/* ------------------------------
   Main App Component
------------------------------ */
const App = () => {
  // State variables
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [fade, setFade] = useState(true);

  /* ------------------------------
     Get a random quote from local array
     Used as fallback if API fails
  ------------------------------ */
  const getRandomQuoteFromArray = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  /* ------------------------------
     Fetch a new quote from API
     Update background color and fade animation
  ------------------------------ */
  const getNewQuote = async () => {
    setFade(false);
    await new Promise((r) => setTimeout(r, 300));

    try {
      const result = await fetch("https://api.quotable.io/random");
      if (!result.ok) throw new Error("API request failed");
      const data = await result.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      getRandomQuoteFromArray();
    }

    // Select a new color different from current
    const availableColors = colors.filter((c) => c !== backgroundColor);
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
    setBackgroundColor(randomColor);

    setFade(true);
  };

  /* ------------------------------
     Update body background color whenever state changes
  ------------------------------ */
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  /* ------------------------------
     Load a quote on initial render
  ------------------------------ */
  useEffect(() => {
    getNewQuote();
  }, []);

  /* ------------------------------
     Render JSX
  ------------------------------ */
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div id="quote-box">
        {/* Quote text with dynamic color and fade */}
        <p
          id="text"
          className={`fs-4 quote-text ${fade ? "fade-in" : "fade-out"}`}
          style={{ color: backgroundColor }}
        >
          <i className="fa-solid fa-quote-left"></i>
          {quote}
          <i className="fa-solid fa-quote-right"></i>
        </p>

        {/* Quote author */}
        <p
          id="author"
          className={`text-end fw-bold quote-author ${
            fade ? "fade-in" : "fade-out"
          }`}
          style={{ color: backgroundColor }}
        >
          — {author}
        </p>

        {/* Buttons for tweeting and getting a new quote */}
        <div className="d-flex justify-content-between mt-3">
          <a
            id="tweet-quote"
            className="btn"
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" — ${author}`
            )}`}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: backgroundColor, color: "#fff" }}
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <button
            id="new-quote"
            className="btn"
            onClick={getNewQuote}
            style={{ backgroundColor: backgroundColor, color: "#fff" }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------
   Render App component into #root
------------------------------ */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

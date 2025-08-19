import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const buttons = [
  { id: "clear", label: "AC" },
  { id: "divide", label: "/" },
  { id: "multiply", label: "*" },
  { id: "seven", label: "7" },
  { id: "eight", label: "8" },
  { id: "nine", label: "9" },
  { id: "subtract", label: "-" },
  { id: "four", label: "4" },
  { id: "five", label: "5" },
  { id: "six", label: "6" },
  { id: "add", label: "+" },
  { id: "one", label: "1" },
  { id: "two", label: "2" },
  { id: "three", label: "3" },
  { id: "equals", label: "=" },
  { id: "zero", label: "0" },
  { id: "decimal", label: "." },
];

function Calculator() {
  const [input, setInput] = useState("0");
  const [formula, setFormula] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // Theme class toggle for <body>
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleClear = () => {
    setInput("0");
    setFormula("");
  };

  const handleNumber = (value) => {
    if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      if (value === "." && input.includes(".")) return;
      setInput(input + value);
    }
    setFormula((prev) => prev + value);
  };

  const handleOperator = (op) => {
    setFormula((prev) => {
      if (op === "-") {
        if (prev === "" || /[\+\*\/]$/.test(prev)) {
          return prev + "-";
        }
      }
      if (/[\+\-\*\/]$/.test(prev)) {
        return prev.slice(0, -1) + op;
      }

      return prev + op;
    });

    setInput(op);
  };

  const handleEquals = () => {
    try {
      const result = eval(formula);
      setInput(result.toString());
      setFormula(result.toString());
    } catch {
      setInput("Error");
      setFormula("");
    }
  };

  const handleClick = (label, id) => {
    if (id === "clear") return handleClear();
    if (id === "equals") return handleEquals();
    if (["add", "subtract", "multiply", "divide"].includes(id)) {
      return handleOperator(label);
    }
    handleNumber(label);
  };

  // Keyboard input + button flash
  useEffect(() => {
    const flashButton = (id) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.classList.add("active-key");
      setTimeout(() => btn.classList.remove("active-key"), 150);
    };

    const handleKeyDown = (e) => {
      const key = e.key;

      if (!isNaN(key)) {
        handleNumber(key);
        flashButton(
          [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
          ][Number(key)]
        );
      } else if (key === ".") {
        handleNumber(".");
        flashButton("decimal");
      } else if (key === "+") {
        handleOperator("+");
        flashButton("add");
      } else if (key === "-") {
        handleOperator("-");
        flashButton("subtract");
      } else if (key === "*") {
        handleOperator("*");
        flashButton("multiply");
      } else if (key === "/") {
        handleOperator("/");
        flashButton("divide");
      } else if (key === "Enter" || key === "=") {
        handleEquals();
        flashButton("equals");
      } else if (key.toLowerCase() === "c" || key === "Escape") {
        handleClear();
        flashButton("clear");
      } else if (key === "Backspace") {
        setFormula((prev) => prev.slice(0, -1));
        setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input, formula]);

  // Auto-scroll formula to rightmost side
  useEffect(() => {
    const formulaEl = document.querySelector(".formula-display");
    if (formulaEl) {
      formulaEl.scrollLeft = formulaEl.scrollWidth;
    }
  }, [formula]);

  return (
    <div className="container mt-5">
      <div className="text-center mb-3">
        <button
          className="btn btn-sm btn-outline-info"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="calculator">
        {/* Formula display */}
        <div className="formula-display p-2 text-end small mb-1">
          {formula || "0"}
        </div>

        {/* Current input display */}
        <div id="display" className="p-2 rounded mb-3 fs-4 text-end">
          {input}
        </div>

        {/* Calculator buttons */}
        <div className="d-grid gap-2 calculator-grid">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              id={btn.id}
              className="btn btn-secondary"
              onClick={() => handleClick(btn.label, btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Calculator />);

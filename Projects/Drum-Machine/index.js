import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

export const PAD_BANK = [
  {
    key: "Q",
    id: "Heater-1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

export const DrumPad = ({ pad, onTrigger }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
    onTrigger(pad.id);
  };

  return (
    <button id={pad.id} className="drum-pad" onClick={handlePlay}>
      {pad.key}
      <audio ref={audioRef} className="clip" id={pad.key} src={pad.url} />
    </button>
  );
};

export const App = () => {
  const [lastPlayed, setLastPlayed] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      const pad = PAD_BANK.find((p) => p.key === key);
      if (!pad) return;
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        setLastPlayed(pad.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="drum-machine">
      <h2>Drum Machine</h2>
      <div className="drum-grid">
        {PAD_BANK.map((pad) => (
          <DrumPad key={pad.key} pad={pad} onTrigger={setLastPlayed} />
        ))}
      </div>
      <div id="display">{lastPlayed || "—"}</div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

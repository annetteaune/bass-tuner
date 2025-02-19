import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import BassNotes from "./components/BassNotes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomTuning from "./components/CustomTuning";
import { tunings } from "./utils/audioUtils";

function App() {
  const [selectedTuning, setSelectedTuning] = useState("standard");
  const [showCustomTuning, setShowCustomTuning] = useState(false);
  const [customNotes, setCustomNotes] = useState(["E1", "A1", "D2", "G2"]);
  const [volume, setVolume] = useState(0.75);
  const [currentTone, setCurrentTone] = useState("clean");

  const handleTuningChange = (tuning) => {
    if (tuning === "custom") {
      setShowCustomTuning(true);
    }
    setSelectedTuning(tuning);
  };

  const handleNoteChange = (index, note) => {
    const newNotes = [...customNotes];
    newNotes[index] = note;
    setCustomNotes(newNotes);
  };

  useEffect(() => {
    tunings.custom = customNotes;
  }, [customNotes]);

  return (
    <>
      <Header
        selectedTuning={selectedTuning}
        setSelectedTuning={handleTuningChange}
        volume={volume}
        onVolumeChange={setVolume}
        currentTone={currentTone}
        onToneChange={setCurrentTone}
      />
      <BassNotes
        selectedTuning={selectedTuning}
        volume={volume}
        currentTone={currentTone}
      />
      {showCustomTuning && (
        <CustomTuning
          customNotes={customNotes}
          onNoteChange={handleNoteChange}
          onClose={() => setShowCustomTuning(false)}
        />
      )}
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

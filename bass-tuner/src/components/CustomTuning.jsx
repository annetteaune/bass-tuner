import React, { useEffect, useCallback } from "react";

const notes = [
  "C0",
  "C#0",
  "D0",
  "D#0",
  "E0",
  "F0",
  "F#0",
  "G0",
  "G#0",
  "A0",
  "A#0",
  "B0",
  "C1",
  "C#1",
  "D1",
  "D#1",
  "E1",
  "F1",
  "F#1",
  "G1",
  "G#1",
  "A1",
  "A#1",
  "B1",
  "C2",
  "C#2",
  "D2",
  "D#2",
  "E2",
  "F2",
  "F#2",
  "G2",
  "G#2",
  "A2",
  "A#2",
  "B2",
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
];

const CustomTuning = ({ customNotes, onNoteChange, onClose }) => {
  const handleEscapeKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  const handleBackgroundClick = (event) => {
    if (event.target.className === "custom-tuning-modal") {
      onClose();
    }
  };

  return (
    <div className="custom-tuning-modal" onClick={handleBackgroundClick}>
      <div className="custom-tuning-content">
        <button
          className="close-icon-button"
          onClick={onClose}
          aria-label="Close custom tuning"
        >
          ×
        </button>
        <h2>Custom Tuning</h2>
        <div className="string-selectors">
          {customNotes.map((note, index) => (
            <div key={index} className="string-selector">
              <label>String {4 - index}</label>
              <select
                value={note}
                onChange={(e) => onNoteChange(index, e.target.value)}
                className="note-select"
              >
                {notes.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="close-button">
          Done
        </button>
      </div>
    </div>
  );
};

export default CustomTuning;

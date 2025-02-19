import React from "react";

const toneOptions = [
  { value: "clean", label: "Clean Bass" },
  { value: "synth", label: "Synth Bass" },
  { value: "warm", label: "Warm Bass" },
  { value: "dirty", label: "Dirty Bass" },
  { value: "acoustic", label: "Acoustic Bass" },
];

const ToneSelector = ({ currentTone, onChange }) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="tone-select" className="visually-hidden">
        Select bass tone
      </label>
      <select
        id="tone-select"
        value={currentTone}
        onChange={(e) => onChange(e.target.value)}
        className="tone-dropdown"
      >
        {toneOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToneSelector;

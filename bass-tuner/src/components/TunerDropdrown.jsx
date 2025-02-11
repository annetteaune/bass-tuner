import React from "react";

const tuningOptions = [
  { value: "standard", label: "Standard (EADG)" },
  { value: "dropD", label: "Drop D (DADG)" },
  { value: "dropC", label: "Drop C (CGCF)" },
  { value: "BEAD", label: "BEAD Tuning" },
];

const TunerDropdown = ({ value, onChange }) => {
  return (
    <div className="tuning-selector">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="tuning-dropdown"
      >
        {tuningOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TunerDropdown;

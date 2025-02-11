import React from "react";
import TunerDropdown from "./TunerDropdrown";

export default function Header({ selectedTuning, setSelectedTuning }) {
  return (
    <header>
      <h1 className="title">Bass Tuner</h1>
      <TunerDropdown value={selectedTuning} onChange={setSelectedTuning} />
    </header>
  );
}

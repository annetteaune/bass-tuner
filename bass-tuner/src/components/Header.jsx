import React from "react";
import TunerDropdown from "./TunerDropdrown";
import VolumeControl from "./VolumeControl";
import ToneSelector from "./ToneSelector";

export default function Header({
  selectedTuning,
  setSelectedTuning,
  volume,
  onVolumeChange,
  currentTone,
  onToneChange,
}) {
  return (
    <header>
      <div className="header-left">
        <h1 className="title">Bass Tuner</h1>
        <div className="controls-group">
          <TunerDropdown value={selectedTuning} onChange={setSelectedTuning} />
          <ToneSelector currentTone={currentTone} onChange={onToneChange} />
        </div>
      </div>
      <VolumeControl volume={volume} onChange={onVolumeChange} />
    </header>
  );
}

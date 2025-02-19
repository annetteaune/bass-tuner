import React from "react";
import { HiMiniSpeakerXMark, HiMiniSpeakerWave } from "react-icons/hi2";

const VolumeControl = ({ volume, onChange }) => {
  const volumePercentage = Math.round(volume * 100);

  const handleSliderChange = (e) => {
    const newVolume = parseFloat(e.target.value) / 100;
    onChange(newVolume);
  };

  // decrease volume by 5%
  const decreaseVolume = () => {
    const newVolume = Math.max(0, volume - 0.05);
    onChange(newVolume);
  };

  //  increase volume by 5%
  const increaseVolume = () => {
    const newVolume = Math.min(1, volume + 0.05);
    onChange(newVolume);
  };

  return (
    <div className="volume-control">
      <button
        onClick={decreaseVolume}
        className="volume-icon-button"
        aria-label="Decrease volume"
      >
        <HiMiniSpeakerXMark size={18} className="volume-icon" />
      </button>

      <input
        id="volume-slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value={volumePercentage}
        onChange={handleSliderChange}
        className="volume-slider"
        aria-label="Adjust volume"
      />

      <button
        onClick={increaseVolume}
        className="volume-icon-button"
        aria-label="Increase volume"
      >
        <HiMiniSpeakerWave size={18} className="volume-icon" />
      </button>
    </div>
  );
};

export default VolumeControl;

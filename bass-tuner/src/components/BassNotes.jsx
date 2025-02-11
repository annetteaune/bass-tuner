import React, { useState } from "react";
import NoteButton from "./NoteButton";
import { tunings, createSynth, playNote } from "../utils/audioUtils";
import "../styles/bass-tuner.css";
import TunerDropdown from "./TunerDropdrown";

const BassNotes = () => {
  const [selectedTuning, setSelectedTuning] = useState("standard");
  const [synth] = useState(createSynth());

  const handlePlayNote = async (note) => {
    await playNote(synth, note);
  };

  return (
    <div className="container">
      <h1 className="title">Bass Tuner</h1>

      <TunerDropdown value={selectedTuning} onChange={setSelectedTuning} />

      <div className="notes-grid">
        {tunings[selectedTuning].map((note, index) => (
          <NoteButton key={index} note={note} onPlay={handlePlayNote} />
        ))}
      </div>

      <div className="help-text">
        <p>Click on any note to hear it</p>
      </div>
    </div>
  );
};

export default BassNotes;

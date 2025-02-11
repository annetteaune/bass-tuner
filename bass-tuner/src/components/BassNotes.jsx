import React, { useEffect, useState } from "react";
import NoteButton from "./NoteButton";
import { tunings, createSynth, playNote } from "../utils/audioUtils";
import "../styles/bass-tuner.css";
import TunerDropdown from "./TunerDropdrown";

const BassNotes = () => {
  const [selectedTuning, setSelectedTuning] = useState("standard");
  const [synth] = useState(createSynth());
  const [audioEnabled, setAudioEnabled] = useState(false);

  const handlePlayNote = async (note) => {
    await playNote(synth, note);
  };

  // ios
  useEffect(() => {
    const enableAudio = async () => {
      await startAudioContext();
      setAudioEnabled(true);
    };
    document.addEventListener("touchstart", enableAudio, { once: true });

    return () => {
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  const notes = tunings[selectedTuning];

  return (
    <div className="container">
      <h1 className="title">Bass Tuner</h1>

      <TunerDropdown value={selectedTuning} onChange={setSelectedTuning} />

      <div className="headstock">
        <div className="headstock-body" />

        <div className="notes-grid">
          {/* Left side tuning pegs */}
          <NoteButton
            note={notes[1]}
            onPlay={handlePlayNote}
            className="note-button left pos-1"
          />
          <NoteButton
            note={notes[0]}
            onPlay={handlePlayNote}
            className="note-button left pos-2"
          />

          {/* Right side tuning pegs */}
          <NoteButton
            note={notes[2]}
            onPlay={handlePlayNote}
            className="note-button right pos-1"
          />
          <NoteButton
            note={notes[3]}
            onPlay={handlePlayNote}
            className="note-button right pos-2"
          />
        </div>
      </div>

      <div className="help-text">
        <p>Turn the tuning pegs to hear the reference pitch</p>
      </div>
    </div>
  );
};

export default BassNotes;

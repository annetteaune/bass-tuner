import React, { useEffect, useState, useRef } from "react";
import NoteButton from "./NoteButton";
import { tunings, createSynth, playNote, setVolume } from "../utils/audioUtils";
import "../styles/main.css";
import AnimatedStrings from "./AnimatedStrings";

const BassNotes = ({ selectedTuning, volume, currentTone }) => {
  const synthRef = useRef(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [playingNote, setPlayingNote] = useState(null);

  useEffect(() => {
    synthRef.current = createSynth(currentTone);
    setVolume(synthRef.current, volume); //  initial volume

    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, [currentTone]);

  // update volume when it changes
  useEffect(() => {
    if (synthRef.current) {
      setVolume(synthRef.current, volume);
    }
  }, [volume]);

  const handlePlayNote = async (note, stringIndex) => {
    setPlayingNote({ note, stringIndex });
    await playNote(synthRef.current, note);
    setTimeout(() => setPlayingNote(null), 500);
  };

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
      <AnimatedStrings notes={notes} playingNote={playingNote} />

      <div className="headstock">
        <div className="headstock-body" />

        <div className="notes-grid">
          {/* Left side tuning pegs */}
          <NoteButton
            note={notes[1]}
            onPlay={() => handlePlayNote(notes[1], 1)}
            className={`note-button left pos-1 ${
              playingNote?.note === notes[1] ? "playing" : ""
            }`}
          />
          <NoteButton
            note={notes[0]}
            onPlay={() => handlePlayNote(notes[0], 0)}
            className={`note-button left pos-2 ${
              playingNote?.note === notes[0] ? "playing" : ""
            }`}
          />

          {/* Right side tuning pegs */}
          <NoteButton
            note={notes[2]}
            onPlay={() => handlePlayNote(notes[2], 2)}
            className={`note-button right pos-1 ${
              playingNote?.note === notes[2] ? "playing" : ""
            }`}
          />
          <NoteButton
            note={notes[3]}
            onPlay={() => handlePlayNote(notes[3], 3)}
            className={`note-button right pos-2 ${
              playingNote?.note === notes[3] ? "playing" : ""
            }`}
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

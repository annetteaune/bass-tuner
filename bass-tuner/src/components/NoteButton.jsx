import React from "react";

const NoteButton = ({ note, onPlay, className }) => {
  return (
    <button
      onClick={() => onPlay(note)}
      className={className}
      aria-label={`Play ${note} note`}
    >
      {note}
    </button>
  );
};

export default NoteButton;

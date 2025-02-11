import React from "react";

const NoteButton = ({ note, onPlay, className }) => {
  return (
    <button onClick={() => onPlay(note)} className={className}>
      {note}
    </button>
  );
};

export default NoteButton;

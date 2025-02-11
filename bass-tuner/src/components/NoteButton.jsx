import React from "react";

const NoteButton = ({ note, onPlay }) => {
  return (
    <button onClick={() => onPlay(note)} className="note-button">
      {note}
    </button>
  );
};

export default NoteButton;

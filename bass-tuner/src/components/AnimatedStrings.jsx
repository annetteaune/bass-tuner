export default function AnimatedStrings({ notes, playingNote }) {
  return (
    <div className="strings-container">
      {notes.map((note, index) => (
        <div
          key={note}
          className={`bass-string ${
            playingNote?.stringIndex === index ? "playing" : ""
          }`}
        />
      ))}
    </div>
  );
}

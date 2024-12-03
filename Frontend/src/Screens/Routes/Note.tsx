import { useState } from "react";

interface Note {
  text: string;
  createdAt: string;
}

const Note = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteInput, setNoteInput] = useState("");

  const addNote = () => {
    if (noteInput.trim()) {
      const newNote: Note = {
        text: noteInput,
        createdAt: new Date().toLocaleString(),
      };
      setNotes([...notes, newNote]);
      setNoteInput("");
    }
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index: number) => {
    const noteToEdit = notes[index];
    setNoteInput(noteToEdit.text);
    deleteNote(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Notes App
      </h1>

      {/* Note Input Section */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-4 mb-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows={3}
          placeholder="Write your note here..."
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
        />
        <button
          onClick={addNote}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
        >
          Add Note
        </button>
      </div>

      {/* Notes Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-yellow-100 shadow-md rounded-lg p-4 border-l-4 border-yellow-500 relative"
          >
            <p className="text-gray-800 mb-4">{note.text}</p>
            <div className="flex justify-between items-center">
              {/* Edit and Delete Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => editNote(index)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(index)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>

              {/* Time Created */}
              <span className="text-sm text-gray-500">{note.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;

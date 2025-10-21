import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  // Load notes from localStorage on first render
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('react-notes-app-data');
    return savedNotes ? JSON.parse(savedNotes) : [
    ];
  });

  const [searchText, setSearchText] = useState('');
  const [DarkMode, setDarkMode] = useState(false);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={DarkMode ? 'dark-mode' : ''}>
      <div className="flex-wrap flex-col items-center p-4 min-h-screen">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          className="max-w-4xl mx-auto"
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

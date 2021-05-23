
import NotesList from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note',
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: 'this is my second note',
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: 'this is my thirs note',
      date: "15/04/2021"
    }
  ])
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const [searchText, setSearchText] = useState('');
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  }
  return (
    <div className='container'>
      <Search handleSearchNote ={setSearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  )
}


export default App;
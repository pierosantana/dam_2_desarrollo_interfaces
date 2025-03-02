import React, { useState } from 'react' 
import './App.css'
import Header from './components/Header'
import NoteHistory from './components/NoteHistory'
import Piano from './components/Piano'


export default function App() {
  const [notesHistory, setNotesHistory] = useState([])

  const handleNotePress = (note) => {
    setNotesHistory(prev => [...prev, note].slice(-2))
  }
  
  return (
    <div className="App">
      <Header>
        <h1>PianoApp</h1>
      </Header>
      <NoteHistory notes={notesHistory} />
      <Piano onKeyPress={handleNotePress}/>
    </div>
  )
}



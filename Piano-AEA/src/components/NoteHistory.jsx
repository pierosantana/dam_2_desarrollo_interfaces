import React from 'react'
import '../styles/NoteHistory.css'
export default function NoteHistory({ notes }) {
   const currentNote = notes[notes.length - 1] ?? "00";
   const previousNote = notes.length > 1 ? notes[notes.length - 2] : "00";
   
   return (
       <div className="note-history">
           <p className="previous-note">{previousNote}</p>
           <h1 className="current-note">{currentNote}</h1>
       </div>
   )
}
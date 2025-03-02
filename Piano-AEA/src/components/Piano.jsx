import React from 'react'
import '../styles/Piano.css'
import PianoKey from './PianoKey'
import keyNotes from '../assets/KeyNotes'
import useSound from 'use-sound'
import pianoSound from '../assets/piano.mp3'

export default function Piano({ onKeyPress }) {
  // Generar el objeto de sprites usando el array keyNotes:
  const sprites = {}
  keyNotes.forEach(key => {
    // Usamos el nombre de la nota como identificador del sprite.
    sprites[key.note] = [key.start, key.duration]
  })

  // Inicializamos useSound con el archivo y la configuración de sprites.
  const [play, { stop }] = useSound(pianoSound, { sprite: sprites })

  // Controladores de eventos para reproducir y detener la nota.
  const handleMouseDown = (note) => {
    //play({ id: note }) // Reproduce el sprite correspondiente
  }

  const handleMouseUp = (note) => {
    //stop() // Detiene la reproducción
  }

  const handleMouseLeave = (note) => {
    //stop() // Detiene la reproducción si se sale de la tecla
  }

  const handleClick = (note) => {
    play({ id: note })
    if (onKeyPress) onKeyPress(note, 'click')
  }

  return (
    <div className="piano-wrapper">
      <div className="piano">
        {keyNotes.map((key, index) => (
          <PianoKey
            key={index}
            note={key.note}
            type={key.type}
            gridColumn={key.gridColumn}
            start={key.start}
            duration={key.duration}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  )
}
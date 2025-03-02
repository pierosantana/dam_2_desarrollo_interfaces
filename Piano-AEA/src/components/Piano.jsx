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
    console.log('MouseDown en:', note)
    //play({ id: note }) // Reproduce el sprite correspondiente
    // if (onKeyPress) onKeyPress(note, 'down')
  }

  const handleMouseUp = (note) => {
    console.log('MouseUp en:', note)
    //stop() // Detiene la reproducción
    // if (onKeyPress) onKeyPress(note, 'up')
  }

  const handleMouseLeave = (note) => {
    console.log('MouseLeave en:', note)
    //stop() // Detiene la reproducción si se sale de la tecla
    // if (onKeyPress) onKeyPress(note, 'leave')
  }

  const handleClick = (note) => {
    console.log('Click en:', note)
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
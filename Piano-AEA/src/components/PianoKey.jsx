import React from 'react';
import '../styles/PianoKey.css';

export default function PianoKey({ note, type, gridColumn, start, duration, onClick, onMouseDown, onMouseUp, onMouseLeave }) {
  let styleProps = {};

  if (type === 'white') {
    // Las teclas blancas usan gridColumn para su posición
    styleProps = { gridColumn: gridColumn };
    
  } else if (type === 'black') {
    // Para la tecla negra, extraemos el número inicial del gridColumn
    // Por ejemplo, para "4 / span 2": startCol = 4
    const startCol = parseInt(gridColumn.split(" / ")[0], 10);
    // Calculamos el offset: (startCol - 1) * 1rem
    styleProps = { left: `calc(${startCol - 1} * var(--col-size))` };
  }

  return (
    <div 
      className={`piano-key ${type === 'black' ? 'black-key' : 'white-key'}`}
      style={styleProps}
      onClick={() => onClick(note)}
      onMouseDown={() => onMouseDown(note)}
      onMouseUp={() => onMouseUp(note)}
      onMouseLeave={() => onMouseLeave(note)}
      title={`Inicio: ${start}, Duración: ${duration}`}
    >
      {note}
    </div>
  );
}
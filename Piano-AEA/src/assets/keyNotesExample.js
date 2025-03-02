// src/data/keyNotes.js
const keyNotesExample = [
    // Teclas blancas (cada una ocupa 4 columnas)
    { note: "C4", type: "white", gridColumn: "1 / span 4", start: 0, duration: 0 },
    { note: "D4", type: "white", gridColumn: "5 / span 4", start: 0, duration: 0 },
    { note: "E4", type: "white", gridColumn: "9 / span 4", start: 0, duration: 0 },
    { note: "F4", type: "white", gridColumn: "13 / span 4", start: 0, duration: 0 },
    { note: "G4", type: "white", gridColumn: "17 / span 4", start: 0, duration: 0 },
    { note: "A4", type: "white", gridColumn: "21 / span 4", start: 0, duration: 0 },
    { note: "B4", type: "white", gridColumn: "25 / span 4", start: 0, duration: 0 },
    // Teclas negras (cada una ocupa 2 columnas y se posiciona sobre las blancas)
    { note: "C#4", type: "black", gridColumn: "4 / span 2", start: 0, duration: 0 },
    { note: "D#4", type: "black", gridColumn: "8 / span 2", start: 0, duration: 0 },
    // No hay negra entre E y F
    { note: "F#4", type: "black", gridColumn: "16 / span 2", start: 0, duration: 0 },
    { note: "G#4", type: "black", gridColumn: "20 / span 2", start: 0, duration: 0 },
    { note: "A#4", type: "black", gridColumn: "24 / span 2", start: 0, duration: 0 }
  ];
  
  export default keyNotesExample;
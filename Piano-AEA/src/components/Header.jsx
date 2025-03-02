import React from 'react'
import '../styles/Header.css'

export default function Header(props) {
  
  return (
    <header className="header">
      {props.children}
    </header>
  );
}

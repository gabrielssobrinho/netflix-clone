import React from 'react'
import { HeaderStyled } from './style'

export default function Header({black}) {
  return (
    <HeaderStyled className={black ? 'black' : ''}>
      <div className="header--logo img-controler">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" alt="Logo da Netflix" />
        </a>
      </div>
      <div className="header--user img-controler">
        <a href="/">
          <img src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="user" />
        </a>
      </div>
    </HeaderStyled>
  )
}

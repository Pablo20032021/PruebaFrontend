import React, { useState } from 'react'
import NavbarButton from '../Button/NavbarButton'
import NavbarStyles from '../../../styles/Navbar.module.css'
import { NavContainer , BgDiv } from '../../../public/Styled' 

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <NavContainer>
        <h2>Menú FontPrueba</h2>
        <div className={`Links ${clicked ? 'active' : ''}`} >
          <a onClick={handleClick} href="#h">Inicio</a>
          <a onClick={handleClick} href="#h">Tienda</a>
          <a onClick={handleClick} href="#h">Sobre nosotros</a>
          <a onClick={handleClick} href="#h">Contactanos</a>
          <a onClick={handleClick} href="#h">Blog</a>
        </div>
        <div className={NavbarStyles.Button}>
          <NavbarButton
            clicked={clicked}
            handleClick={handleClick}
          />
        </div>
        <BgDiv>
          <div className={`initial ${clicked ? ' active' : ''}`}></div>
        </BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar



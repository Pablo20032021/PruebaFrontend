import React from 'react'
import Button from '../../../public/Styled'

function NavbarButton(props: { handleClick: React.MouseEventHandler<HTMLDivElement> | undefined; clicked: unknown }) {
  return (
    <Button>
        <div onClick={props.handleClick}  className={`Icon nav-icon ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Button>
  )
}

export default NavbarButton


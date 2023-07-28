import styled from 'styled-components'

const Button = styled.div`
.nav-icon{
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon span{
    background-color:#fff;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  }
  .nav-icon span:nth-child(1){
    top:0px;
    left: 0px;
  }
  .nav-icon span:nth-child(2){
    top:13px;
    left: 0px;
    opacity:1;
  }
  .nav-icon span:nth-child(3){
    bottom:0px;
    left: 0px;
  }
  .nav-icon:not(.open):hover span:nth-child(1){
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon:not(.open):hover span:nth-child(2){
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon:not(.open):hover span:nth-child(3){
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon.open span:nth-child(1){
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon.open span:nth-child(2){
    opacity:0;
  }
  .nav-icon.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 13px;
  }

`

export const NavContainer = styled.nav`
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;  
padding: 0.3rem;

h2{
    padding-left: 0.5rem;
    color: white;
    font-weight:500;
  }

  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .Links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .Links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .Button{
    @media(min-width: 768px){
      display: none;
    }
  }
`

export const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`




export default Button;
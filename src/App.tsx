//import Formulario from './components/Formulario'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import FormStyles from '../styles/Main.module.css'

function App() {

  return (
    <>
        <Menu></Menu>
        <div className={FormStyles.ContainForm}> 
          <Home></Home>
        </div>
    </>
  )
}

export default App


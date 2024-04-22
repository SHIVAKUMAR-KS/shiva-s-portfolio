
import styled,{ThemeProvider} from "styled-components"
import {darkTheme} from "../src/utils/Themes"
import Navbar from "./components/Navbar"
function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>  

    </ThemeProvider>
   
  )
}

export default App

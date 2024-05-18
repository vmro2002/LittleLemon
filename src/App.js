import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Reserve from './components/Reserve.js'
import Dashboard from './pages/Dashboard.js';
import '@fontsource/karla'
import '@fontsource/markazi-text'
import theme from './theme'
import { BrowserRouter, MemoryRouter, Routes, Route, HashRouter } from "react-router-dom";
import { AuthenticationGuard } from './Utility/AuthenticationGuard.js';

function Homepage(){
  return(
    <>
      <Hero/>
      <Highlights/>
      <About/>
      <Footer/>
    </>
  )
}
function App() {

  return (
    <ChakraProvider theme={theme}>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Reservations' element={<Reserve/>}/>
          <Route path='/Dashboard' element={<AuthenticationGuard component={Dashboard}/>}/>
        </Routes>
    </ChakraProvider>
  );
}

export default App;

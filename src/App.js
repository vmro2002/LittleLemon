import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights.js'
import About from './components/About.js'
import '@fontsource/karla'
import '@fontsource/markazi-text'
import theme from './theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <main>
        <Hero/>
        <Highlights/>
        <About/>
      </main>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;

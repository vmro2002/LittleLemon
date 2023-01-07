import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import '@fontsource/karla'
import '@fontsource/markazi-text'
import theme from './theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <main>
        <Hero/>  
      </main>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;

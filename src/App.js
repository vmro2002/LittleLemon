import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  return (
    <ChakraProvider>
      <nav><Header/></nav>
      <main></main>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;

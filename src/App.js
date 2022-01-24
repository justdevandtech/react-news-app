
import './App.css';
import {News} from './components/News.jsx';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container className="mt-4">
      <h1 className='text-center'>Techcruch News - Tech News</h1>
      <News />
    </Container>
  );
}

export default App;

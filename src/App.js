import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <NavBar/>
        <CardList/>
      </Container>
    </div>
  );
}

export default App;

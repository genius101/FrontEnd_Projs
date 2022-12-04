// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './home';

const title = 'Best'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

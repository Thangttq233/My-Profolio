import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

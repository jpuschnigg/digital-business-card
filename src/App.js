import logo from './logo.svg';
import Info from "./components/Info"
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="app-container">
      <div className='container'>
        <Info />
        <div className='content'>
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Form from './pages/Form'
import Hero from './pages/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      <header className="heading">
        <p>Luke</p>
        <p className='title_and'>and</p>
        <p>Liz</p>

        </header>
        <Parallax
        pages={2}
        >
          <Hero />
          <Form />
        </Parallax>
    </div>
  );
}

export default App;
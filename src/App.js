import '../src/Sass/App.scss';
import About from './components/About';
import BooksIntro from './components/Books/BooksIntro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BooksIntro />
      <About />
    </div>
  );
}

export default App;

import '../src/Sass/App.scss';
import About from './components/About';
import BooksIntro from './components/Books/BooksIntro';
import Footer from './components/Books/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BooksIntro />
      <About />
      <Footer />
    </div>
  );
}

export default App;

import '../src/Sass/App.scss';
import BooksIntro from './components/Books/BooksIntro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BooksIntro />
    </div>
  );
}

export default App;

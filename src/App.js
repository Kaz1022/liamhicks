import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/Sass/App.scss';
import ScrollToTop from "./Helper/ScrollToTop"
import Home from './components/Home';
import Footer from './components/Footer';
import LiamHicks from './components/LiamHicks/LiamHicks';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route exact path ="/" element={<Home />}/>
          <Route exact path ="/liamhicks" element={<LiamHicks />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
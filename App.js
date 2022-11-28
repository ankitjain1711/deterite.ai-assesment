import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home';
import Playlist from './Playlist';
import Favourite from './Favourite';
import Search from './Search';
import Navbar from './Navbar';


function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        {/* <NavbarSide/> */}
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/playlist" element={<Playlist/>} />
        <Route exact path="/favourite" element={<Favourite/>} />
        <Route exact path="/search" element={<Search/>} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;

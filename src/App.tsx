
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ArtDetail from './pages/ArtDetail';
import Event from './pages/Event';
import EventDetail from './pages/EventDetail';
import Purchase from './pages/Purchase';
import About from './pages/About';
import Sell from './pages/Sell';
import './i18n'; // Import i18n configuration

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/artvituso/" element={<Home />} />
        <Route path="/artvituso/explore" element={<Explore />} />
        <Route path="/artvituso/explore/:id" element={<ArtDetail />} />
        <Route path="/artvituso/explore/:id/purchase" element={<Purchase />} />
        <Route path="/artvituso/events" element={<Event />} />
        <Route path="/artvituso/events/:id" element={<EventDetail />} />
        <Route path="/artvituso/about" element={<About />} />
        <Route path="/artvituso/sell" element={<Sell />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

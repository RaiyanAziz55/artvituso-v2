
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
import Faq from './pages/Faq';
import './i18n'; // Import i18n configuration

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/artvituso-v2-v2/" element={<Home />} />
        <Route path="/artvituso-v2/explore" element={<Explore />} />
        <Route path="/artvituso-v2/explore/:id" element={<ArtDetail />} />
        <Route path="/artvituso-v2/explore/:id/purchase" element={<Purchase />} />
        <Route path="/artvituso-v2/events" element={<Event />} />
        <Route path="/artvituso-v2/events/:id" element={<EventDetail />} />
        <Route path="/artvituso-v2/about" element={<About />} />
        <Route path="/artvituso-v2/sell" element={<Sell />} />
        <Route path="/artvituso-v2/faq" element={<Faq />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

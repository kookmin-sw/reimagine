import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Survey from './pages/Survey';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetail from './pages/WorkshopDetail';
import WorkshopDetail2 from './pages/WorkshopDetail2';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/workshop" element={<WorkshopList />} />
        <Route path="/workshop/reimagine-2035" element={<WorkshopDetail />} />
        <Route path="/workshop/lightning" element={<WorkshopDetail2 />} />
      </Routes>
    </Router>
  );
}

export default App;

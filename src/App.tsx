import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetail from './pages/WorkshopDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/workshop" element={<WorkshopList />} />
        <Route path="/workshop/:id" element={<WorkshopDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

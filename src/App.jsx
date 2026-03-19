import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import BCRLProject from './pages/BCRLProject'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bcrl" element={<BCRLProject />} />
      </Routes>
    </Router>
  );
}

export default App;

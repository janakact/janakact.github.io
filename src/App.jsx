import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home'
import BCRLProject from './pages/BCRLProject'

function AppRoutes() {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we have a stored redirect path from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath') // Clear it
      navigate(redirectPath) // Navigate to the intended path
    }
  }, [navigate])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bcrl" element={<BCRLProject />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

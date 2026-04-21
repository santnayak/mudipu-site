import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageMinimal from './pages/HomePageMinimal'
import ImprintPage from './pages/ImprintPage'
import PrivacyPage from './pages/PrivacyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageMinimal />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

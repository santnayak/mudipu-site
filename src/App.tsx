import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import HomePageMinimal from './pages/HomePageMinimal'
import ImprintPage from './pages/ImprintPage'
import PrivacyPage from './pages/PrivacyPage'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mudipu-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageMinimal />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

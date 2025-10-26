import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PlanDesign from './pages/PlanDesign'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan-design" element={<PlanDesign />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

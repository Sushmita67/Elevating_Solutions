import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { HERO_SLIDES } from '../../constants'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slides = isMobile ? HERO_SLIDES.mobile : HERO_SLIDES.desktop

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '60vh' }}>
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt="Hero"
          className="w-full h-[800px] sm:h-[400px] md:h-screen object-cover object-center transition-opacity duration-1000 bg-black"
          style={{ maxHeight: '100vh' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0" />
      </div>

      <div className="relative z-10 hidden md:flex items-center h-full w-full">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-end w-full">
            <div className="text-white max-w-xl text-right bg-black bg-opacity-0 p-0 rounded-none ml-auto">
              <h1 className="text-3xl sm:text-4xl md:text-6xl text-schindler-red font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-black mb-8 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button className="bg-schindler-red hover:bg-schindler-red-dark text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-schindler-red' : 'bg-black bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

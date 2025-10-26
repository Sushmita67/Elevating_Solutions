import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY_INFO, CONTACT_INFO, NAV_LINKS, SERVICES_DROPDOWN } from '../../constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-schindler-red text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6 w-full justify-between">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>Hotline: {CONTACT_INFO.hotline}</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Skyline Tower, Baneshwor-10, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-32">
            <Link to="/" className="flex items-center">
              <img 
                src="/src/assets/images/logo-light-CKHa_e6m.svg" 
                alt="Main Logo" 
                className="h-32 w-auto mr-3"
              />
              <div>
                <div className="text-xl font-bold text-schindler-red">
                  {COMPANY_INFO.name}
                </div>
                <div className="text-xs text-gray-600">
                  {COMPANY_INFO.subtitle}
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="relative group">
                      <button className="flex items-center space-x-1 text-gray-700 hover:text-schindler-red transition-colors">
                        <span>{link.name}</span>
                        <ChevronDown size={16} />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {SERVICES_DROPDOWN.map((service) => (
                            <a 
                              key={service}
                              href="#" 
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {service}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-700 hover:text-schindler-red transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}

              <div className="flex items-center">
                <img 
                  src="/src/assets/images/schindler-logo-uRNhOVEV.svg" 
                  alt="Schindler Logo" 
                  className="h-32 w-auto mr-3"
                />
              </div>

              <Link
                to="/plan-design"
                className="flex flex-col items-center text-gray-700 hover:text-schindler-red transition-colors"
              >
                <img 
                  src="/src/assets/icons/design-icon.svg" 
                  alt="Design Plan" 
                  className="w-12 h-12 mb-1 transition-transform duration-200 hover:scale-110"
                />
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {NAV_LINKS.filter(link => !link.dropdown).map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.href)
                  setIsMenuOpen(false)
                }}
                className="block py-2 text-gray-700 w-full text-left"
              >
                {link.name}
              </button>
            ))}
            <Link
              to="/plan-design"
              className="block py-2 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Plan & Design
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

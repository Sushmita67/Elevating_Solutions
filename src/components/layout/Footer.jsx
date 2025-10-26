import React from 'react'
import { COMPANY_INFO, CONTACT_INFO, FOOTER_LINKS } from '../../constants'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-schindler-red mb-4">
              {COMPANY_INFO.name}
            </div>
            <p className="text-gray-300 mb-4">
              {COMPANY_INFO.description}
            </p>
            <p className="text-gray-400">
              {COMPANY_INFO.peopleMoved}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              {FOOTER_LINKS.products.map((product) => (
                <li key={product}>
                  <a href="#" className="hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors">
                {CONTACT_INFO.phone}
              </li>
              <li className="hover:text-white transition-colors">
                {CONTACT_INFO.email}
              </li>
              <li className="hover:text-white transition-colors">
                {CONTACT_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2025 Elevating Solutions Pvt. Ltd. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  )
}

export default Footer

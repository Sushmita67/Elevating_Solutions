import React from 'react'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '../../constants'

const ProductPortfolio = () => {
  return (
    <section className="py-20">
      <div className="max-w-8xl mx-auto px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevating Solutions' portfolio enables safe urban mobility and efficient transit management for buildings of all types
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <button className="text-schindler-red hover:text-schindler-red-dark font-semibold flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductPortfolio

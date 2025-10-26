import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ELEVATORS } from '../../constants'

const ElevatorSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Browse our passenger elevators
          </h2>
          <button className="hidden md:flex items-center space-x-2 text-schindler-red hover:text-schindler-red-dark font-semibold">
            <span>All elevators</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="md:relative">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 pb-4 md:overflow-x-auto scrollbar-hide">
            {ELEVATORS.map((elevator) => (
              <div key={elevator.id} className="w-full md:flex-shrink-0 md:w-96 bg-gray-50 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-64 md:h-100 bg-gray-200 overflow-hidden relative">
                  <img
                    src={elevator.image}
                    alt={elevator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-schindler-red px-6 py-2">
                    <h3 className="text-lg font-semibold whitespace-nowrap">
                      {elevator.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ElevatorSection

import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronDown, Check, Download } from 'lucide-react'
import { useReactToPrint } from 'react-to-print'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

// Register fonts
Font.register({
  family: 'Frutiger',
  src: '/src/assets/fonts/FrutigerNextLT-Regular-dXHMHufx.ttf',
})

Font.register({
  family: 'Frutiger-Bold',
  src: '/src/assets/fonts/FrutigerNextLT-Bold-CeRq0lXw.ttf',
})

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Frutiger',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '1px solid #e4e4e4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc0000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 10,
  },
  date: {
    fontSize: 10,
    color: '#a0aec0',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2d3748',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: 150,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
  dimensionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dimensionBox: {
    width: '23%',
    border: '1px solid #e2e8f0',
    borderRadius: 4,
    padding: 8,
  },
  dimensionLabel: {
    fontSize: 10,
    color: '#718096',
    marginBottom: 5,
  },
  dimensionValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    color: '#a0aec0',
    textAlign: 'center',
    borderTop: '1px solid #e4e4e4',
    paddingTop: 10,
  },
})

// PDF Document Component
const ElevatorPlanPDF = ({ 
  capacity, speed, travelHeight, stops, carWidth, carDepth, carHeight, 
  doorType, doorWidth, doorHeight, interiorDesign, lighting, ceiling, 
  wall, floor, panelType, shaftDimensions 
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Schindler 1000 Design Plan</Text>
        <Text style={styles.subtitle}>Custom Elevator Configuration</Text>
        <Text style={styles.date}>Generated on: {new Date().toLocaleDateString()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Specifications</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Capacity:</Text>
          <Text style={styles.value}>{capacity} kg ({capacity === '408' ? '6' : '8'} passengers)</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Speed:</Text>
          <Text style={styles.value}>{speed} m/s</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Travel Height:</Text>
          <Text style={styles.value}>{travelHeight} m</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Number of Stops:</Text>
          <Text style={styles.value}>{stops}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Car Dimensions:</Text>
          <Text style={styles.value}>{carWidth}mm (W) × {carDepth}mm (D) × {carHeight}mm (H)</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Door Specifications:</Text>
          <Text style={styles.value}>{doorType}, {doorWidth}mm (W) × {doorHeight}mm (H)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shaft Requirements</Text>
        
        <View style={styles.dimensionsContainer}>
          <View style={styles.dimensionBox}>
            <Text style={styles.dimensionLabel}>Shaft Width</Text>
            <Text style={styles.dimensionValue}>{shaftDimensions.shaftWidth} mm</Text>
          </View>
          <View style={styles.dimensionBox}>
            <Text style={styles.dimensionLabel}>Shaft Depth</Text>
            <Text style={styles.dimensionValue}>{shaftDimensions.shaftDepth} mm</Text>
          </View>
          <View style={styles.dimensionBox}>
            <Text style={styles.dimensionLabel}>Pit Depth</Text>
            <Text style={styles.dimensionValue}>{shaftDimensions.pitDepth} mm</Text>
          </View>
          <View style={styles.dimensionBox}>
            <Text style={styles.dimensionLabel}>Headroom</Text>
            <Text style={styles.dimensionValue}>{shaftDimensions.headroom} mm</Text>
          </View>
        </View>
        
        <Text style={{ fontSize: 8, color: '#718096', marginTop: 10 }}>
          *Tolerances of +/-25mm & +/-40mm will be applicable on shaft dimensions based on travel height. 
          Shaft dimensions shown at minimum plumb, building tolerances should be added. 
          Interfloor distance is min. 2600 mm.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interior Design</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Design Line:</Text>
          <Text style={styles.value}>{interiorDesign}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Lighting:</Text>
          <Text style={styles.value}>{lighting}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Ceiling:</Text>
          <Text style={styles.value}>{ceiling}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Wall:</Text>
          <Text style={styles.value}>{wall}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Floor:</Text>
          <Text style={styles.value}>{floor}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Control Panel:</Text>
          <Text style={styles.value}>{panelType}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>© {new Date().getFullYear()} Elevating Solutions Pvt. Ltd. All rights reserved.</Text>
        <Text>This is a computer-generated document and does not require a signature.</Text>
      </View>
    </Page>
  </Document>
)

const PlanDesign = () => {
  const [capacity, setCapacity] = useState('408')
  const [speed, setSpeed] = useState('0.63')
  const [travelHeight, setTravelHeight] = useState('21')
  const [stops, setStops] = useState('6')
  const [carWidth, setCarWidth] = useState('1000')
  const [carDepth, setCarDepth] = useState('1100')
  const [carHeight, setCarHeight] = useState('2100')
  const [doorType, setDoorType] = useState('T2')
  const [doorWidth, setDoorWidth] = useState('800')
  const [doorHeight, setDoorHeight] = useState('2000')
  const [interiorDesign, setInteriorDesign] = useState('Navona')
  const [lighting, setLighting] = useState('Round Spots')
  const [ceiling, setCeiling] = useState('Stainless Steel Hairline')
  const [wall, setWall] = useState('Stainless Steel Hairline')
  const [floor, setFloor] = useState('Rubber Speckled Black')
  const [panelType, setPanelType] = useState('Linea 100')
  const [activeStep, setActiveStep] = useState('specifications')

  const printRef = useRef(null)

  // Calculate shaft dimensions based on configuration
  const shaftDimensions = capacity === '408' && carWidth === '1000' && carDepth === '1100' 
    ? { shaftWidth: speed === '0.63' ? '1425' : '1475', shaftDepth: '1430', pitDepth: '1300', headroom: '3550' }
    : capacity === '544' && carWidth === '1100' && carDepth === '1300'
    ? { shaftWidth: '1540', shaftDepth: '1630', pitDepth: '1300', headroom: '3580' }
    : { shaftWidth: 'N/A', shaftDepth: 'N/A', pitDepth: 'N/A', headroom: 'N/A' }

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        .no-print { display: none !important; }
      }
    `,
    documentTitle: `Schindler-1000-Design-Plan-${new Date().toISOString().slice(0, 10)}`
  })

  const renderStepContent = () => {
    switch (activeStep) {
      case 'specifications':
        return (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Elevator Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Capacity</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                >
                  <option value="408">408 kg (6 passengers)</option>
                  <option value="544">544 kg (8 passengers)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Speed</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                >
                  <option value="0.63">0.63 m/s</option>
                  <option value="1.00">1.00 m/s</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Travel Height (m)</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={travelHeight}
                  onChange={(e) => setTravelHeight(e.target.value)}
                >
                  <option value="21">21</option>
                  <option value="27">27</option>
                  <option value="40">40*</option>
                </select>
                {travelHeight === '40' && (
                  <p className="text-xs text-gray-500 mt-1">
                    *Available only if there's another elevator in the same building with fireman operation
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Number of Stops</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={stops}
                  onChange={(e) => setStops(e.target.value)}
                >
                  <option value="6">6</option>
                  <option value="10">10</option>
                  <option value="16">16*</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Car Width (mm)</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={carWidth}
                  onChange={(e) => setCarWidth(e.target.value)}
                >
                  <option value="1000">1000</option>
                  <option value="1100">1100</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Car Depth (mm)</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={carDepth}
                  onChange={(e) => setCarDepth(e.target.value)}
                >
                  <option value="1100">1100</option>
                  <option value="1300">1300</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Car Height (mm)</label>
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={carHeight}
                  onChange={(e) => setCarHeight(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Door Type</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={doorType}
                  onChange={(e) => setDoorType(e.target.value)}
                >
                  <option value="T2">Telescopic (2-part)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Door Width (mm)</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={doorWidth}
                  onChange={(e) => setDoorWidth(e.target.value)}
                >
                  <option value="750">750</option>
                  <option value="800">800</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Door Height (mm)</label>
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={doorHeight}
                  onChange={(e) => setDoorHeight(e.target.value)}
                />
              </div>
            </div>

            <section className="mb-12 bg-gray-50 p-6 rounded-lg mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Calculated Shaft Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-sm text-gray-500">Shaft Width</div>
                  <div className="text-lg font-semibold">{shaftDimensions.shaftWidth} mm</div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-sm text-gray-500">Shaft Depth</div>
                  <div className="text-lg font-semibold">{shaftDimensions.shaftDepth} mm</div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-sm text-gray-500">Pit Depth</div>
                  <div className="text-lg font-semibold">{shaftDimensions.pitDepth} mm</div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-sm text-gray-500">Headroom</div>
                  <div className="text-lg font-semibold">{shaftDimensions.headroom} mm</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                *Tolerances of +/-25mm & +/-40mm will be applicable on shaft dimensions based on travel height. 
                Shaft dimensions shown at minimum plumb, building tolerances should be added. 
                Interfloor distance is min. 2600 mm.
              </p>
            </section>
          </section>
        )

      case 'interior':
        return (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Interior Design Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Design Line</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={interiorDesign}
                  onChange={(e) => setInteriorDesign(e.target.value)}
                >
                  <option value="Navona">Navona</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Functional and durable design with fresh colors</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Lighting</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={lighting}
                  onChange={(e) => setLighting(e.target.value)}
                >
                  <option value="Round Spots">Round Spots</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Ceiling</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={ceiling}
                  onChange={(e) => setCeiling(e.target.value)}
                >
                  <option value="Stainless Steel Hairline">Stainless Steel Hairline</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Wall</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={wall}
                  onChange={(e) => setWall(e.target.value)}
                >
                  <option value="Stainless Steel Hairline">Stainless Steel Hairline</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Floor</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                >
                  <option value="Rubber Speckled Black">Rubber Speckled Black</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Control Panel</label>
                <select
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 bg-white px-4 py-2 border"
                  value={panelType}
                  onChange={(e) => setPanelType(e.target.value)}
                >
                  <option value="Linea 100">Linea 100</option>
                  <option value="Linea 100 Touch">Linea 100 Touch</option>
                </select>
              </div>
            </div>
          </section>
        )

      case 'summary':
        return (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Summary</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Selected Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Technical Specifications</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Capacity: {capacity} kg ({capacity === '408' ? '6' : '8'} passengers)</li>
                    <li>Speed: {speed} m/s</li>
                    <li>Travel Height: {travelHeight} m</li>
                    <li>Stops: {stops}</li>
                    <li>Car Dimensions: {carWidth}mm (W) × {carDepth}mm (D) × {carHeight}mm (H)</li>
                    <li>Door: {doorType}, {doorWidth}mm (W) × {doorHeight}mm (H)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Interior Design</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Design Line: {interiorDesign}</li>
                    <li>Lighting: {lighting}</li>
                    <li>Ceiling: {ceiling}</li>
                    <li>Wall: {wall}</li>
                    <li>Floor: {floor}</li>
                    <li>Control Panel: {panelType}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center text-schindler-red hover:text-schindler-red-dark">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Schindler 1000 - Plan & Design Tool</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <Link to="/" className="text-gray-400 hover:text-gray-500">Home</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronDown size={16} className="transform -rotate-90 text-gray-400" />
                <span className="ml-4 text-gray-500">Design Plan</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronDown size={16} className="transform -rotate-90 text-gray-400" />
                <span className="ml-4 font-medium text-gray-700">
                  {activeStep === 'specifications' && 'Specifications'}
                  {activeStep === 'interior' && 'Interior Design'}
                  {activeStep === 'summary' && 'Summary'}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden" ref={printRef}>
          <div className="bg-gray-100 px-6 py-4 border-b no-print">
            <div className="flex justify-between items-center">
              <button
                className="flex items-center space-x-2"
                onClick={() => setActiveStep('specifications')}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  activeStep === 'specifications' ? 'bg-schindler-red text-white' : 'border-2 border-gray-300'
                }`}>
                  {activeStep === 'specifications' ? <Check size={16} /> : '1'}
                </div>
                <span className={`font-medium ${
                  activeStep === 'specifications' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  1. Specifications
                </span>
              </button>
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
              
              <button
                className="flex items-center space-x-2"
                onClick={() => setActiveStep('interior')}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  activeStep === 'interior' ? 'bg-schindler-red text-white' : 'border-2 border-gray-300'
                }`}>
                  {activeStep === 'interior' ? <Check size={16} /> : '2'}
                </div>
                <span className={`font-medium ${
                  activeStep === 'interior' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  2. Interior Design
                </span>
              </button>
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
              
              <button
                className="flex items-center space-x-2"
                onClick={() => setActiveStep('summary')}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  activeStep === 'summary' ? 'bg-schindler-red text-white' : 'border-2 border-gray-300'
                }`}>
                  {activeStep === 'summary' ? <Check size={16} /> : '3'}
                </div>
                <span className={`font-medium ${
                  activeStep === 'summary' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  3. Summary
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {renderStepContent()}
            
            <div className="flex justify-between no-print mt-8">
              <button
                className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => {
                  if (activeStep === 'interior') setActiveStep('specifications')
                  if (activeStep === 'summary') setActiveStep('interior')
                }}
              >
                Previous
              </button>
              
              {activeStep !== 'summary' && (
                <button
                  className="px-6 py-3 bg-schindler-red rounded-md text-white hover:bg-schindler-red-dark transition-colors"
                  onClick={() => {
                    if (activeStep === 'specifications') setActiveStep('interior')
                    if (activeStep === 'interior') setActiveStep('summary')
                  }}
                >
                  Next
                </button>
              )}
              
              {activeStep === 'summary' && (
                <div className="flex space-x-2 mt-4">
                  <PDFDownloadLink
                    document={
                      <ElevatorPlanPDF
                        capacity={capacity}
                        speed={speed}
                        travelHeight={travelHeight}
                        stops={stops}
                        carWidth={carWidth}
                        carDepth={carDepth}
                        carHeight={carHeight}
                        doorType={doorType}
                        doorWidth={doorWidth}
                        doorHeight={doorHeight}
                        interiorDesign={interiorDesign}
                        lighting={lighting}
                        ceiling={ceiling}
                        wall={wall}
                        floor={floor}
                        panelType={panelType}
                        shaftDimensions={shaftDimensions}
                      />
                    }
                    fileName={`Schindler-1000-Design-${new Date().toISOString().slice(0, 10)}.pdf`}
                    className="flex items-center px-3 py-1 bg-schindler-red rounded-md text-white hover:bg-schindler-red-dark"
                  >
                    {({ loading }) => (
                      <>
                        <Download size={16} className="mr-1" />
                        {loading ? 'Preparing...' : 'Download Configuration'}
                      </>
                    )}
                  </PDFDownloadLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Need help with your elevator design?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our experts are ready to assist you in selecting the perfect elevator configuration for your building.
            </p>
            <button className="px-6 py-3 bg-schindler-red rounded-md text-white hover:bg-schindler-red-dark transition-colors">
              Contact Our Specialists
            </button>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2025 Elevating Solutions Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PlanDesign

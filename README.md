# Elevating Solutions - Clean React Application

A modern, clean, and well-organized React application for Elevating Solutions, a Schindler elevator company. This application showcases their products and services including elevators, escalators, and moving walks.

## 🏗️ Project Structure

```
elevating-solutions-clean/
├── src/
│   ├── components/
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   ├── sections/         # Page sections (Hero, Stats, Products, etc.)
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components (Home, PlanDesign)
│   ├── assets/              # Static assets
│   │   ├── images/          # Product images and logos
│   │   ├── fonts/           # Custom fonts (Frutiger family)
│   │   └── icons/           # SVG icons
│   ├── constants/           # Application constants and data
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Application entry point
├── package.json              # Dependencies
├── tailwind.config.js        # Styling config
├── vite.config.js            # Build config
└── README.md                 # Documentation
```

## ✨ Features

- **Clean Architecture**: Well-organized components with separation of concerns
- **Modern React**: Built with React 18, hooks, and functional components
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive Components**: 
  - Hero carousel with automatic slideshow
  - Product showcase sections
  - Contact form with Formspree integration
  - Elevator configuration tool with PDF generation
- **Professional Styling**: Custom fonts (Frutiger family) and Schindler brand colors
- **PDF Generation**: Interactive elevator design tool with downloadable PDF reports

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd elevating-solutions-clean
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

### Colors
- Primary Red: `#dc0000` (Schindler Red)
- Dark Red: `#c0102d` (Schindler Red Dark)
- Gray tones for text and backgrounds

### Typography
- **Primary Font**: Frutiger Next (Regular, Medium, Bold)
- **Fallback**: Inter, sans-serif
- **Custom Fonts**: Frutiger Regular, Frutiger Bold

### Components

#### Layout Components
- **Header**: Navigation with mobile menu, contact info, and Schindler branding
- **Footer**: Company information, links, and contact details

#### Section Components
- **Hero**: Rotating carousel with product images and calls-to-action
- **StatsSection**: Company statistics display
- **ProductPortfolio**: Showcase of elevators, escalators, and moving walks
- **ElevatorSection**: Interactive product gallery
- **ContactSection**: Form with Formspree integration
- **CTA**: Call-to-action section

#### Pages
- **Home**: Complete showcase with all sections
- **PlanDesign**: Interactive elevator configuration tool

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized images for different screen sizes

## 🔧 Configuration

### Form Handling
The contact form uses Formspree for backend handling. To configure:
1. Sign up for a Formspree account
2. Create a new form
3. Update the form endpoint in `ContactSection.jsx`

### Constants
All application data is centralized in `src/constants/index.js`:
- Company information
- Contact details
- Navigation links
- Product data
- Hero slides
- Statistics

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Core Dependencies
- React 18
- React Router DOM
- Tailwind CSS
- Vite

### Feature Dependencies
- Formspree React (form handling)
- React-to-Print (printing functionality)
- React-PDF (PDF generation)
- Lucide React (icons)

## 🎯 Key Features

### Home Page
- Hero section with rotating product images
- Company statistics
- Product portfolio showcase
- Elevator product gallery
- Contact form
- Call-to-action section

### Plan & Design Tool
- Interactive elevator configuration
- Step-by-step wizard interface
- Real-time shaft dimension calculations
- Interior design options
- PDF report generation
- Print functionality

### Contact Form
- Integrated with Formspree for form handling
- Validation and error handling
- Success/error states
- Phone number formatting

## 📄 License

© 2025 Elevating Solutions Pvt. Ltd. All rights reserved.

## 🤝 Support

For technical support or questions about this application, please contact the development team.

# Product Strategy Framework

A modern, interactive website for presenting product strategy concepts including positioning, market sizing, research, and go-to-market pathways.

![Product Strategy Framework](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple) ![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Overview

This website transforms a comprehensive product strategy guide into an engaging, multi-page presentation. Each section of the framework is presented on its own distinct page with smooth animations and a premium design aesthetic inspired by modern web applications.

**Author:** Sophia Ahuoyiza Abubakar  
**Date:** November 2025

## ✨ Features

- **Dynamic Content Loading**: Automatically parses markdown content into separate pages based on headers
- **Responsive Design**: Fully mobile-responsive with optimized layouts for all screen sizes
- **Smooth Animations**: Page transitions powered by Framer Motion
- **Modern UI**: Clean, vibrant design with yellow/purple color scheme and glassmorphism effects
- **Interactive Navigation**: Previous/Next buttons with section titles for easy navigation
- **Progress Tracking**: Visual progress bar showing position in the presentation

## 🚀 Quick Start

### Prerequisites

- Node.js 20.11.1 or higher
- npm 10.2.4 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahuoyiza/product-strategy-25.git
cd product-strategy-25
```

2. Install dependencies:
```bash
cd app
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5174`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `app/dist` directory.

## 📁 Project Structure

```
product-strategy-25/
├── app/                          # React application
│   ├── src/
│   │   ├── components/
│   │   │   └── SectionPage.jsx  # Page template component
│   │   ├── hooks/
│   │   │   └── useContent.js    # Content parsing hook
│   │   ├── App.jsx              # Main app with routing
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # Entry point
│   ├── public/                  # Static assets
│   └── index.html               # HTML template
└── content.md                   # Markdown content source
```

## 🎨 Design Features

- **Color Palette**: 
  - Primary Yellow: `#FFFD64`
  - Primary Purple: `#94a3fe`
  - Accent Coral: `#FF5252`
- **Typography**: Outfit font family
- **Animations**: Smooth page transitions and pulsating hero button
- **Icons**: Context-aware icons from Lucide React

## 📝 Customizing Content

Edit `content.md` in the root directory. The app automatically splits content into pages based on:
- Level 1 headers (`#`) 
- Level 2 headers (`##`)

Each header creates a new page in the presentation.

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Markdown**: react-markdown with remark-gfm
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with modern features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this project as a template for your own presentations.

## 🙏 Acknowledgments

- Design inspiration from [Butter](https://butter.us)
- Built with modern web technologies and best practices

---

Made with ❤️ by Sophia Ahuoyiza Abubakar

# CounterVit 🧮

A modern, responsive counter application built with React, TypeScript, and Vite. Features a clean interface with persistent state management and smooth animations.

## ✨ Features

- **Modern UI**: Clean, glassmorphism design with smooth animations
- **Persistent State**: Counter value persists across browser sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Full type safety and better developer experience
- **Fast Development**: Powered by Vite for lightning-fast HMR
- **Error Handling**: Robust error boundaries and loading states
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd counterVit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
counterVit/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # App favicon
├── src/
│   ├── components/
│   │   ├── Counter.tsx     # Main counter component
│   │   └── Counter.css     # Counter styles
│   ├── hooks/
│   │   └── useCounter.ts   # Counter logic hook
│   ├── types/
│   │   └── counter.ts      # TypeScript type definitions
│   ├── utils/
│   │   └── storage.ts      # LocalStorage utilities
│   ├── App.tsx             # Root component
│   ├── App.css             # App styles
│   ├── index.tsx           # App entry point
│   └── index.css           # Global styles
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🎯 Usage

The counter application provides three main actions:

- **Increment (+)**: Increases the counter by 1
- **Decrement (-)**: Decreases the counter by 1
- **Reset (↻)**: Resets the counter to 0

The current count is automatically saved to localStorage and will persist across browser sessions.

## 🎨 Customization

### Styling

The app uses CSS custom properties for easy theming. Key variables are defined in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: white;
  --border-radius: 20px;
}
```

### Counter Logic

The counter behavior can be customized in `src/hooks/useCounter.ts`. You can modify:

- Initial counter value
- Step size for increment/decrement
- Maximum/minimum values
- Storage key

## 🔧 Technical Details

### Tech Stack

- **React 18**: Latest React with concurrent features
- **TypeScript**: Full type safety
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern CSS with custom properties and animations

### Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

### Performance

- Lazy loading with React.Suspense
- Optimized bundle size with tree shaking
- Efficient re-renders with React hooks
- LocalStorage operations are debounced

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- The open-source community for inspiration
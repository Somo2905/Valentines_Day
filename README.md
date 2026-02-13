# 💕 Valentine's Day App

A beautiful, romantic Valentine's Day web app built with React + Vite.

## 🎯 Features

- **Landing Page** with animated title and navigation buttons
- **Our Story Page** - Share your love story
- **Why I Love You Page** - List all the reasons with beautiful animations
- **Surprise Page** - A special message with animated heart
- **Smooth Animations** - Floating, fading, heartbeat effects
- **Responsive Design** - Works on mobile and desktop
- **Easy to Customize** - Change colors, text, add photos

## 📁 Project Structure

```
valentine-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx          # App entry point
│   ├── App.jsx           # Routing configuration
│   ├── pages/
│   │   ├── Landing.jsx   # Main landing page
│   │   ├── PageOne.jsx   # Our Story
│   │   ├── PageTwo.jsx   # Why I Love You
│   │   └── PageThree.jsx # Surprise
│   ├── components/
│   │   └── NavButton.jsx # Reusable navigation button
│   ├── styles/
│   │   └── styles.css    # All styles and animations
│   └── assets/
│       └── her-photos/   # Add your photos here
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project:**
   ```bash
   cd valentine-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Start Development Server

```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Change Text Content

Edit the files in `src/pages/`:
- `Landing.jsx` - Main page title and button text
- `PageOne.jsx` - Your love story
- `PageTwo.jsx` - Reasons you love them
- `PageThree.jsx` - Final surprise message

### 2. Add Photos

1. Add your photos to `src/assets/her-photos/`
2. Uncomment and update the image tags in the page files:

```jsx
<img src="/src/assets/her-photos/photo1.jpg" alt="Us" className="photo" />
```

### 3. Change Colors

Edit `src/styles/styles.css`:

```css
/* Landing page gradient */
.landing {
  background: radial-gradient(circle, #ff9a9e, #fad0c4);
}

/* Main gradient */
body {
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
}

/* Surprise page gradient */
.page-three {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 4. Add More Pages

1. Create a new file in `src/pages/`, e.g., `PageFour.jsx`
2. Add the route in `src/App.jsx`:

```jsx
import PageFour from "./pages/PageFour";

// In the Routes component:
<Route path="/page-four" element={<PageFour />} />
```

3. Add a navigation button to link to it:

```jsx
<NavButton text="New Page 🎉" to="/page-four" />
```

## 💡 Tips

- The app uses **hot reload** - changes appear instantly
- AlPort already in use

```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies installation failed

If you encounter npm registry issues, ensure you're using the default npm registry:

```bash
npm config set registry https://registry.npmjs.org/
npm install
```ndencies installed. Once `npm install` succeeds:

```bash
npm run dev
```

Then customize the content in `src/pages/` files!

## ❤️ Made with Love

Built with React, Vite, and lots of ❤️

Enjoy your Valentine's Day! 💕


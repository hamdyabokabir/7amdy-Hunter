# HUNTER Portfolio Website

A professional bilingual portfolio website for **حمدي محمد أبو كبير - HUNTER**, showcasing design, development, and digital marketing services.

## ✨ Features

- **Bilingual Support**: Arabic (RTL) and English (LTR) with seamless switching
- **Dark/Light Themes**: Toggle between elegant themes with smooth transitions
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Animated Background**: Subtle starfield animation using pure CSS
- **Contact Integration**: Direct WhatsApp integration for instant communication
- **Performance Optimized**: Lightweight, fast-loading static website
- **Accessibility**: Full ARIA support and semantic HTML

## 🚀 Quick Start

1. **Local Development**:
   ```bash
   npm run dev
   ```

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Deploy**: Upload the `dist` folder to any static hosting service

## 📁 Project Structure

```
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── main.js         # Core functionality
│   └── lang.js         # Language management
└── README.md           # This file
```

## 🎨 Customization

### Updating Content

#### 1. Text Content
Edit the translations in `js/lang.js`:

```javascript
const translations = {
    ar: {
        hero_title: "Your Arabic Title",
        // ... other translations
    },
    en: {
        hero_title: "Your English Title",
        // ... other translations
    }
};
```

#### 2. Contact Information
Update these values in the HTML files and `js/lang.js`:
- WhatsApp number: `201029448695`
- Email: `hunter@example.com`
- Location: Update the address in translations

#### 3. Portfolio Items
Edit the portfolio data in `js/main.js` within the `getProjectData()` method:

```javascript
const projects = {
    1: {
        title: { ar: "Arabic Title", en: "English Title" },
        description: { ar: "Arabic Description", en: "English Description" },
        image: "path/to/image.jpg",
        technologies: ["Tech1", "Tech2"],
        category: "design" // or "web", "social", "mobile"
    }
};
```

#### 4. Images
Replace the Pexels URLs with your own images:
- Update image URLs in HTML files
- Update portfolio image URLs in `js/main.js`
- Ensure images are optimized for web (WebP format recommended)

### Styling Customization

#### 1. Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --accent-gold: #FFD700;        /* Primary gold color */
    --accent-gold-hover: #F4C430;  /* Hover state */
    --bg-primary: #0a0a0a;         /* Dark background */
    /* ... other colors */
}
```

#### 2. Fonts
Update font imports in HTML head sections and CSS variables:

```css
:root {
    --font-arabic: 'Cairo', 'Arial', sans-serif;
    --font-english: 'Poppins', 'Helvetica', sans-serif;
}
```

#### 3. Animations
Adjust animation timings and effects in `css/style.css`:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 Deployment Options

### 1. Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository

### 2. GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch and deploy

### 3. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the deployment prompts

## 🔧 Technical Details

### Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Performance Features
- CSS custom properties for theming
- Intersection Observer for scroll animations
- Image lazy loading ready
- Critical CSS inlined
- Optimized font loading

### Accessibility Features
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Color contrast compliance

## 📞 Support

For customization help or questions:
- **WhatsApp**: [+201029448695](https://wa.me/201029448695)
- **Email**: hamdyabokabir@gmail.com

## 📄 License

This portfolio template is created for HUNTER. Feel free to customize and use for your own projects.

---

**Built with ❤️ by HUNTER - حمدي محمد أبو كبير**
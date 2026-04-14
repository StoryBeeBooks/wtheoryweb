# This is the AGENCY (WEBSITE) part of the Wtheory. 

# WTheory - Web Design Studio Website

A modern, interactive web design studio portfolio showcasing projects for Industrial, Nonprofit, and Art sectors.

## 🎨 Features

- **Modern, Responsive Design** - Works beautifully on all devices
- **Interactive Animations** - Smooth scroll effects and hover interactions
- **Live Website Previews** - Embedded iframes showing actual client websites
- **Modular Components** - Reusable header and footer across all pages
- **Hamburger Navigation** - Clean, animated mobile-first menu
- **Custom SVG Logo** - Scalable, brand-focused design

## 📁 Project Structure

```
wtheory/
├── index.html                 # Home page with project gallery
├── design-experience.html     # Design process page
├── contact.html              # Contact information
├── policies.html             # Legal policies
├── components/
│   ├── header.html           # Reusable header component
│   └── footer.html           # Reusable footer component
├── styles/
│   └── main.css              # Complete stylesheet
├── scripts/
│   └── main.js               # Interactive functionality
├── Image Assets/             # Project screenshots (fallback)
└── Video Assets/             # Video content (if needed)
```

## 🚀 Getting Started

### Option 1: Simple Local Server (Recommended)

Since the site uses component loading (header/footer), you need a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Using Node.js:**
```bash
npx serve
```

**Using VS Code Live Server Extension:**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 2: Direct File Opening

If you open `index.html` directly in a browser, the header/footer components won't load due to CORS restrictions. You'll need a local server.

## 📋 Current Projects Displayed

### Industrial (3 projects)
- WYSS Singapore - https://wyss-sg.com
- OrdoSaxum - https://ordosaxum.ca
- JR Partners - https://jrpartners.ca

### Nonprofit (1 project)
- The National Institute for Democratized Learning - https://www.nridl.org

### Art (2 projects)
- StoryBee - https://storybee.space
- Oro Aquae Gallery - https://oroaquae.com

## 🖼️ Adding Project Images

The website uses static images for project showcases. Add your screenshots to the `Image Assets/` folder with these exact names:

**Required Images:**
- `wyss-singapore.jpg` (WYSS Singapore project)
- `ordosaxum.jpg` (OrdoSaxum project)
- `jrpartners.jpg` (JR Partners project)
- `nridl.jpg` (National Institute for Democratized Learning)
- `storybee.jpg` (StoryBee project)
- `oroaquae.jpg` (Oro Aquae Gallery project)

**Recommended Specifications:**
- Format: JPG or PNG
- Dimensions: 1200x800px (3:2 aspect ratio)
- File size: Under 500KB for optimal loading
- Quality: High-resolution screenshots of the live websites

The images will display in a 2-column grid on desktop and 1-column on mobile, with smooth hover effects.

## 🎯 Logo Design

The WTheory logo features:
- Modern, elegant "W" letterform with refined strokes
- Clean "Theory" wordmark in Inter font (medium weight)
- Subtle dot accent for visual interest
- Fully scalable SVG format
- Minimalist, professional aesthetic
- Color-adaptive (inherits from CSS)

## 🎨 Color Scheme

- **Primary:** #1a1a1a (Near Black)
- **Secondary:** #ffffff (White)
- **Accent:** #2563eb (Blue)
- **Text:** #333333 (Dark Gray)

## 🔧 Customization

### Adding New Projects

Edit `index.html` and add a new project card in the appropriate category:

```html
<div class="project-card" data-category="industrial">
    <div class="project-frame">
        <iframe src="https://yourproject.com" 
                title="Your Project Name" 
                loading="lazy"
                sandbox="allow-scripts allow-same-origin">
        </iframe>
        <div class="project-overlay">
            <div class="project-info">
                <h3>Your Project Name</h3>
                <a href="https://yourproject.com" target="_blank" class="project-link">
                    Visit Site →
                </a>
            </div>
        </div>
    </div>
</div>
```

### Updating Footer Copyright Year

Edit `components/footer.html` and change the year in the copyright section.

### Changing Colors

Update CSS variables in `styles/main.css`:

```css
:root {
    --color-primary: #your-color;
    --color-accent: #your-accent;
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- Lazy loading iframes
- Intersection Observer for scroll animations
- Optimized CSS animations
- Minimal JavaScript footprint
- Web font optimization

## 📄 License

© 2026 WTheory, Toronto, Canada. All Rights Reserved.

---

**Quote to live by:**
*"Design is not just what it looks like and feels like. Design is how it works."* – Steve Jobs

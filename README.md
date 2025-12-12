# Portfolio Website - Web & App Developer

A modern, highly animated, premium-quality portfolio website built with React, featuring stunning animations, 3D elements, and a beautiful dark theme.

## 🚀 Features

- **Modern Design**: Ultra-modern UI with glassmorphism effects, neon gradients, and smooth animations
- **3D Hero Section**: Interactive 3D background using Three.js and React Three Fiber
- **Smooth Animations**: Powered by Framer Motion and GSAP for scroll animations and page transitions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Project Showcase**: Beautiful project cards with filtering (Web/Apps)
- **Skills Visualization**: Animated skill charts and progress bars
- **Contact Form**: Integrated with EmailJS for form submissions
- **Smooth Scrolling**: Enhanced scroll experience with custom scrollbar

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework with custom theme
- **Framer Motion** - Animation library for React
- **GSAP** - Professional-grade animation library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **EmailJS** - Email service integration
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up EmailJS** (Optional - for contact form)

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the credentials in `src/pages/Contact.jsx`:
     ```javascript
     await emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       { ... },
       'YOUR_PUBLIC_KEY'
     )
     ```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder. You can preview it with:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar with theme toggle
│   │   ├── Footer.jsx      # Footer with social links
│   │   └── Hero3D.jsx      # 3D hero background component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home/Hero page
│   │   ├── About.jsx       # About me page
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Skills.jsx      # Skills page
│   │   └── Contact.jsx     # Contact form page
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Update name, job titles, and description
   - Modify CTA button links

2. **About Page** (`src/pages/About.jsx`):
   - Add your photo (replace the placeholder)
   - Update skills and experience timeline
   - Modify tools and technologies list

3. **Projects Page** (`src/pages/Projects.jsx`):
   - Replace project data with your own projects
   - Update project images, descriptions, and links

4. **Skills Page** (`src/pages/Skills.jsx`):
   - Update skill categories and levels
   - Add/remove technologies

5. **Contact Page** (`src/pages/Contact.jsx`):
   - Update contact information
   - Add your EmailJS credentials
   - Update social media links

6. **Footer** (`src/components/Footer.jsx`):
   - Update social media links

### Theme Customization

Edit `tailwind.config.js` to customize:
- Colors (primary, secondary, accent)
- Fonts
- Animations
- Keyframes

### Colors

The default theme uses:
- **Primary**: Blue shades (`blue-400` to `blue-900`)
- **Secondary**: Purple shades (`purple-500` to `purple-900`)
- **Accent**: Pink shades (`pink-500` to `pink-900`)

## 🎯 Key Features Explained

### 3D Hero Section
The hero section uses React Three Fiber to create an interactive 3D sphere with particles. The animation is smooth and performant.

### Animations
- **Framer Motion**: Used for component animations, page transitions, and hover effects
- **GSAP**: Used for scroll-triggered animations, progress bars, and complex timelines

### Glassmorphism
Glassmorphism effects are achieved using Tailwind's backdrop-blur utilities combined with semi-transparent backgrounds.

### Responsive Design
The website is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 📝 Notes

- Make sure to replace placeholder images with your own
- Update all social media links with your actual profiles
- Configure EmailJS for the contact form to work
- Customize the content to reflect your personal brand

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Three.js Not Loading
Ensure all dependencies are installed correctly:
```bash
npm install
```

### EmailJS Not Working
- Verify your EmailJS credentials are correct
- Check browser console for error messages
- Ensure your EmailJS service is active

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Icons: [Lucide React](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Images: [Unsplash](https://unsplash.com/) (replace with your own)

---

Built with ❤️ using React, TailwindCSS, and modern web technologies.


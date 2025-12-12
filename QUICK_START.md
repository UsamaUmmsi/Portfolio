# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:5173` (or the port shown in terminal)

## ⚙️ Configuration

### EmailJS Setup (Optional - for Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Public Key
5. Update `src/pages/Contact.jsx` with your credentials:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
)
```

## 🎨 Customization Checklist

- [ ] Update name and job titles in `src/pages/Home.jsx`
- [ ] Add your photo in `src/pages/About.jsx`
- [ ] Update skills and experience in `src/pages/About.jsx`
- [ ] Add your projects in `src/pages/Projects.jsx`
- [ ] Update contact information in `src/pages/Contact.jsx`
- [ ] Update social media links in `src/components/Footer.jsx`
- [ ] Replace project images with your own
- [ ] Configure EmailJS for contact form

## 📦 Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## 🐛 Common Issues

**Port already in use?**
- Vite will automatically use the next available port

**Three.js not loading?**
- Make sure all dependencies are installed: `npm install`

**Styles not applying?**
- Ensure TailwindCSS is properly configured
- Check that `src/index.css` is imported in `src/main.jsx`

## 📚 Need Help?

Check the main [README.md](./README.md) for detailed documentation.


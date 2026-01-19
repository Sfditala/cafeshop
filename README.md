# CafeShop

![CafeShop](./public/hero.png)  

**CafeShop** is a modern **landing page and web application for a café** built with **Next.js 16, React, and Tailwind CSS**.  
The project aims to create a smooth and engaging user experience for displaying coffee menus, image galleries, café information, and individual product pages, all with subtle scroll-triggered animations.

---

## 🏆 Key Features

- **Attractive Landing Page** with a stylish Hero Section.  
- **Gallery Section** with fade-in animation on scroll.  
- **About Section** introducing the café with entrance animations.  
- **Menu Section**:  
  - Cards for each product.  
  - Staggered animation for cards on scroll.  
- **Contact Section**: EmailJS-powered contact form.  
- **Fully responsive** for all devices.  
- **Scroll-triggered animations** for smooth interactions.

---

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [EmailJS](https://www.emailjs.com/) for contact form functionality  
- CSS Transitions & Transform for scroll animations  
- JavaScript ES6+

---

## 🚀 Getting Started Locally

1. **Clone the repository**
```bash
git clone https://github.com/username/CafeShop.git
cd CafeShop
Install dependencies

npm install
# or
yarn install
Run the development server

npm run dev
# or
yarn dev
Open in your browser:

http://localhost:3000
🗂 Project Structure
/app
  /components
     /CardMenu.jsx
    /header.jsx
   /footer.jsx
 /sections
      AboutSection.jsx
      HeroSection.jsx
      GallerySection.jsx
      MenuSection.jsx
      ContactSection.jsx
  /data
    menu.js
  /hooks
    useInView.js
  /menu
      page.jsx   <-- Dynamic product page
/pages
/public
  /images
    hero.png
    gallery1.jpg
    menu1.jpg
...
🔧 Usage
Edit menu.js to add or update products.

Replace images in /public/images as needed.

Scroll-triggered animations are handled via useInView hook.

🎨 Animations & Effects
Sections fade and translate in on scroll.

Menu cards appear one by one (staggered effect).

Hover effects on buttons and cards for interactive feel.

💡 Notes
Mobile-first design for excellent experience on all devices.

Can be extended with a full cart system and dark mode.

Modular and reusable components for scalability.

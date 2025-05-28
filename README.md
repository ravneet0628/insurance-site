# SecureChoice Insurance Website

A modern, responsive insurance broker website built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom brand colors and typography
- **Responsive Layout**: Fully responsive design that works on all devices (≥ 375px)
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Performance**: Lazy-loaded routes, optimized images, and fast loading times
- **Animations**: Smooth animations using Framer Motion
- **Accessibility**: WAI-ARIA compliant with focus management and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v3 with custom design system
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet Async
- **Testing**: Vitest, Testing Library
- **Code Quality**: ESLint, Prettier, Husky

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd insurance-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors and format with Prettier
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI

## 🎨 Design System

### Colors
- **Primary**: `#1e2a78` (Navy blue)
- **Accent**: `#e11d48` (Rose)
- **Neutral Text**: `#374151`
- **Neutral Background**: `#f9fafb`

### Typography
- **Headings**: Ubuntu font family, bold weight
- **Body**: Open Sans font family, normal weight
- **Fluid sizing**: Custom clamp() utilities for responsive text

## 📱 Pages

- **Home** (`/`) - Hero section, product cards, trust badges, about section
- **About** (`/about`) - Company timeline, team grid, mission/vision
- **Services** (`/services`) - Insurance products and services (coming soon)
- **Quote** (`/quote`) - Multi-step quote form (coming soon)
- **Contact** (`/contact`) - Contact information and forms (coming soon)
- **404** (`/*`) - Custom error page

## 🧩 Components

### Layout Components
- `Layout.tsx` - Main layout wrapper with header, footer, and scroll-to-top
- `Navbar.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Comprehensive footer with links and contact info
- `ScrollToTop.tsx` - Floating action button for smooth scroll to top

### UI Components
- `Hero.tsx` - Configurable hero section with background images
- `Card.tsx` - Reusable card component with hover effects
- `CTAButton.tsx` - Call-to-action button with multiple variants
- `LoadingSpinner.tsx` - Loading indicator for lazy-loaded routes

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Connect your repository** to Cloudflare Pages
2. **Set build settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `20`

3. **Environment variables**:
   ```
   VITE_API_BASE=https://your-api-domain.com
   ```

### Other Platforms

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔒 Security

- Content Security Policy headers configured
- No sensitive data in client-side code
- Environment variables for API endpoints

## 📊 Performance

- Lighthouse scores target: ≥ 90 in all categories
- Lazy-loaded route chunks
- Optimized images and assets
- Minimal bundle size

## 🧪 Testing

Tests are set up with Vitest and Testing Library:

```bash
npm run test        # Run tests
npm run test:ui     # Run tests with UI
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email info@securechoice.com or create an issue in the repository.

---

Built with ❤️ by the SecureChoice team

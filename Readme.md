# CV Website - Modern DevOps Portfolio

This is a high-performance, interactive professional CV built with React and TanStack Start, optimized for deployment on Cloudflare Pages.

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (React + TanStack Router)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) (with SSR support)

## 📁 Project Structure

```
narendragodi_cv/
├── src/
│   ├── routes/          # File-based routing (Experience, About, Contact, etc.)
│   ├── components/      # UI components and layout
│   ├── data/            # Centralized content (Experiences, Certs, Profile)
│   └── assets/          # Static images and badges
├── vite.config.ts       # Build configuration
└── wrangler.jsonc       # Cloudflare Pages/Workers configuration
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment (Cloudflare Pages)

This project is configured for Cloudflare Pages with Server-Side Rendering (SSR).

1. Connect this repository to **Cloudflare Pages**.
2. **Build Command**: `npm run build`
3. **Build Output Directory**: `.output/public`
4. **Environment Variable**: Set `NODE_VERSION` to `20` or higher.

## ✨ Key Features

- **Dark/Light Mode** - Automatic system preference detection.
- **SSR Enabled** - Optimized for SEO and initial page load speed.
- **Responsive** - Tailored for mobile, tablet, and desktop viewing.
- **Interactive Experience** - Modern transitions and interactive elements.

## 📄 License

Personal use only.

## 📧 Contact

Narendra Godi - narendragodi@gmail.com

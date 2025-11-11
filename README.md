# DeFi House 42 Website

Modern, responsive website for DeFi House 42 - a DeFi research and development collective.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Beautiful iconography

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌟 Features

- Single-page application with smooth scroll navigation
- Responsive design for all devices
- Dynamic Twitter/X feed integration
- Animated sections with hover effects
- Dark theme with green accents

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── navigation.tsx    # Header navigation
│   └── footer.tsx        # Footer
├── lib/                   # Utilities and configs
│   └── social-links.tsx  # Social media configuration
└── public/               # Static assets
```

## 🔑 Environment Variables

Create a `.env.local` file:

```env
X_BEARER_TOKEN=your_twitter_api_token
```

Get your Twitter API token from [developer.twitter.com](https://developer.twitter.com/)

## 📄 License

MIT License - feel free to use this project as a template!

---

Built with 💚 by DeFi House 42

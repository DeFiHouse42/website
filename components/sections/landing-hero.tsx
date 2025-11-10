import Image from "next/image"
import { ArrowRight } from "lucide-react"

const XIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const LumaIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
    <circle cx="12" cy="15" r="2" />
  </svg>
)

export default function LandingHero() {
  const socials = [
    { name: "X", url: "https://x.com/defihouse42", icon: <XIcon /> },
    { name: "Telegram", url: "https://t.me/DEFIHOUSE42", icon: <TelegramIcon /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/showcase/defi-house-42", icon: <LinkedInIcon /> },
    { name: "YouTube", url: "https://www.youtube.com/@defihouse42", icon: <YouTubeIcon /> },
    { name: "Luma", url: "https://luma.com/defihouse42", icon: <LumaIcon /> },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-black relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-black to-black opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 relative">
            <Image
              src="./defihouse_logo_transparent.png"
              alt="DeFi House Logo"
              width={128}
              height={128}
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">DeFi </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">House</span>
        </h1>

        {/* Tagline */}
        <p className="text-3xl md:text-4xl font-light mb-8 text-green-400">Learn. Connect. Grow.</p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A community initiative dedicated to promoting DeFi literacy and financial sovereignty. Join us for in-person
          events, X spaces, and building the future of decentralized finance together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#events"
            className="px-8 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-all neon-glow flex items-center justify-center gap-2"
          >
            Explore Events <ArrowRight size={20} />
          </a>
          <a
            href="#products"
            className="px-8 py-3 border border-green-400 text-green-400 font-bold rounded hover:bg-green-400/10 transition-all"
          >
            Discover Products
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 hover:scale-110 transition-all"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

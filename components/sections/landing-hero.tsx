import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { socialLinks } from "@/lib/social-links"

export default function LandingHero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 lg:pt-16 bg-black relative overflow-hidden"
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
          {socialLinks.map((social) => (
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

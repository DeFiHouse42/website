"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { label: "Home", id: "home", type: "section" },
    { label: "Docs", id: "https://defihouse42.gitbook.io/docs/", type: "link" },
    { label: "Events", id: "events", type: "section" },
    { label: "Partnerships", id: "partnerships", type: "section" },
    { label: "Products", id: "products", type: "section" },
    { label: "Contact", id: "contact", type: "section" },

  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-green-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" onClick={() => scrollToSection("home")} className="flex items-center gap-2 group">
            <div className="w-16 h-16 relative">
              <Image
                src="/defihouse_logo_v1_round.png"
                alt="DeFi House Logo"
                width={64}
                height={64}
                className="group-hover:brightness-125 transition-all"
              />
            </div>
            <span className="font-bold text-2xl text-green-400">DeFi House 42</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <a
                  key={item.id}
                  href={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-green-400 hover:text-green-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              item.type === "link" ? (
                <a
                  key={item.id}
                  href={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

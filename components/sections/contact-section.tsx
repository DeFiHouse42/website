"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900/20 border-t border-green-900/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-green-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Connect With Us</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-green-400 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a
                    href="mailto:contact@defihouse.io"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    contact@defihouse42.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-green-400 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Community</p>
                  <p className="text-gray-400">Join our Telegram for quick responses</p>
                  <a
                    href="https://t.me/DEFIHOUSE42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    t.me/DEFIHOUSE42
                  </a>
                </div>
              </div>

              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6 mt-8">
                <Link
                  href="#events"
                >
                  <p className="text-sm text-gray-300">
                    <span className="text-green-400 font-semibold">Chicago Based:</span> Join us for monthly in-person
                    events and workshops. Looking to partner? Reach out!
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="event">Event Question</option>
                  <option value="product">Product Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-all neon-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

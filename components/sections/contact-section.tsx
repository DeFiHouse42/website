"use client"

import { Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import { socials } from "@/lib/social-links"
import LatestTweet from "@/lib/x-posts"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900/20 border-t border-green-900/30 flex"
    >
      <div className="max-w-5xl m-auto px-4 sm:px-6 lg:px-8">
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
                    href={socials.lounge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    t.me/DEFIHOUSELOUNGE
                  </a>
                </div>
              </div>

              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6 mt-8">
                <Link href="#partnerships">
                  <p className="text-sm text-gray-300">
                    <span className="text-green-400 font-semibold">Chicago Based:</span> Join us for monthly in-person
                    events and workshops. Looking to partner? Reach out!
                  </p>
                </Link>
              </div>


            </div>
          </div>

          {/* Latest Tweet Embed */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Follow us on X</h3>

            <div className="max-h-[320px] overflow-hidden relative text-sm">
              <div className="w-full [&_*]:!text-sm">
                <LatestTweet />
              </div>
              {/* Optional gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

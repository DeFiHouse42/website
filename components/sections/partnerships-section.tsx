"use client"

import { Download } from "lucide-react"

export default function PartnershipsSection() {
  const partners = [
    { name: "EARN", category: "Liquidity Protocol" },
    { name: "Touch Grass", category: "Meme Token" },
    // { name: "Curve Finance", category: "AMM Protocol" },
    // { name: "OpenZeppelin", category: "Security" },
    // { name: "Arbitrum", category: "L2 Network" },
    // { name: "Optimism", category: "L2 Network" },
  ]

  const sponsors = [
    // { name: "Sponsor Name 1", tier: "Gold" },
    { name: "EARN Protocol", tier: "Silver" },
    // { name: "Sponsor Name 3", tier: "Bronze" },
  ]

  return (
    <section
      id="partnerships"
      className="h-fit py-20 bg-gradient-to-b from-black to-gray-900/20 border-t border-green-900/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Partnerships & </span>
            <span className="text-green-400">Sponsors</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent"></div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white">Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gray-800/40 border border-green-400/20 rounded-lg p-6 text-center hover:border-green-400/50 transition-all"
              >
                <p className="font-semibold text-white mb-1">{partner.name}</p>
                <p className="text-xs text-green-400">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-green-900/30 pt-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sponsors */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Current Sponsors</h3>
              <div className="space-y-3 mb-8">
                {sponsors.map((sponsor, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-gray-800/40 border border-green-400/20 rounded-lg p-4"
                  >
                    <span className="font-semibold text-white">{sponsor.name}</span>
                    <span className="text-xs px-3 py-1 bg-green-400/20 text-green-300 rounded-full">
                      {sponsor.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsorship Package */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Become a Sponsor</h3>
              <div className="bg-gray-800/40 border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all">
                <p className="text-gray-400 mb-6">
                  Interested in supporting DeFi House? Download our sponsorship package to learn about partnership
                  opportunities.
                </p>
                <a
                  href="/pdfs/defihouse_sponsor_packet.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-all neon-glow"
                >
                  <Download size={20} />
                  Download Sponsorship Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

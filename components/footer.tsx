export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-green-900/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-green-400 mb-4">DeFi House</h3>
            <p className="text-sm text-gray-400">Learn. Connect. Grow.</p>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#products" className="hover:text-green-400 transition-colors">
                  DFH Token
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-400 transition-colors">
                  Launchpad
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-400 transition-colors">
                  Prediction Market
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#events" className="hover:text-green-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#partnerships" className="hover:text-green-400 transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900/30 pt-8">
          <p className="text-center text-sm text-gray-500">© {currentYear} DeFi House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

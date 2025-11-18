import { ChevronsLeftRightEllipsis, Banknote, GraduationCap, Coins, Handshake } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "DeFi Education",
      description: "Workshops and resources to educate the next generation of DeFi enthusiasts",
      status: "Active",
      features: ["In-person Workshops", "Community Q&A", "Video Streams"],
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "DFH Token",
      description: "The native token of DeFi House ecosystem, enabling governance and participation",
      ticker: "DFH",
      status: "Launching Soon",
      features: ["Staking", "Community Rewards", "Governance"],
    },
    {
      icon: <Banknote className="w-12 h-12" />,
      title: "P2P Lending Protocol",
      description: "Cross-chain lending platform for crypto and DeFi assets",
      status: "In Development",
      features: ["Cross-chain", "Time-based Liquidations", "Fixed-term", "Over-Collateralized"],
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "DAO Governance",
      description: "A robust framework for decentralized governance and decision-making",
      status: "Planned",
      features: ["Voting Mechanism", "Community Incentives", "Treasury Management"],
    },

  ]

  return (
    <section id="products" className="min-h-screen py-20 bg-black border-t border-green-900/30 flex">
      <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">DeFi House </span>
            <span className="text-green-400">Products</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent"></div>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Discover our innovative products designed to advance DeFi education and create opportunities for the
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 border border-green-400/20 rounded-lg p-8 hover:border-green-400/50 transition-all group"
            >
              <div className="inline-block text-green-400 mb-4 group-hover:scale-110 transition-transform">{product.icon}</div>

              <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
              {product.ticker && <p className="text-green-400 text-sm font-semibold mb-3">Ticker: {product.ticker}</p>}

              <p className="text-gray-400 mb-4">{product.description}</p>

              <div className="inline-block px-3 py-1 bg-green-400/20 text-green-300 text-sm rounded-full mb-6">
                {product.status}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500 font-semibold">Features:</p>
                <ul className="space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

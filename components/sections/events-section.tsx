import { Calendar, Users, Radio } from "lucide-react"
import { socials } from "@/lib/social-links"
import { useEffect, useState } from "react"
import { kv } from "@vercel/kv";

export default function EventsSection() {
  const [xSpaceUrl, setXSpaceUrl] = useState<string>(socials.x.url);

  useEffect(() => {
    fetch("/api/next-x-space").then((response) => response.json()).then((data) => {
      setXSpaceUrl(data.space_url);
    });
  }, [])

  const events = [
    {
      type: "In-Person Event",
      title: "Monthly DeFi Meetup",
      description: "Learn about DeFi and connect with fellow enthusiasts in Chicago",
      icon: <Users className="w-8 h-8" />,
      frequency: "Every 2nd Thursday",
      platform: "Chicago",
      action: "View on Luma",
      link: socials.events.url,
    },
    {
      type: "X Space",
      title: "Crypto Market Talk",
      description: "Weekly discussion on market trends and crypto developments",
      icon: <Radio className="w-8 h-8" />,
      frequency: "Every Tuesday @ 1 PM CST",
      platform: "X (Twitter)",
      action: "Join Space",
      link: socials.x.url,
    },
    {
      type: "Telegram Call",
      title: "Community Q&A",
      description: "Ask anything about DeFi, crypto, and the DeFi House ecosystem",
      icon: <Calendar className="w-8 h-8" />,
      frequency: "Every Thursday @ 9 PM CST",
      platform: "Telegram",
      action: "Join Call",
      link: socials.lounge.url,
    },
  ]

  return (
    <section id="events" className="min-h-screen py-20 bg-black border-t border-green-900/30 flex">
      <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Upcoming </span>
            <span className="text-green-400">Events</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-green-400/20 rounded-lg p-8 hover:border-green-400/50 transition-all group"
            >
              <div className="text-green-400 mb-4">{event.icon}</div>

              <p className="text-green-400 text-sm font-semibold mb-2">{event.type}</p>
              <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
              <p className="text-gray-400 mb-6">{event.description}</p>

              <div className="space-y-2 mb-6 text-sm text-gray-500">
                <p>📅 {event.frequency}</p>
                <p>📍 {event.platform}</p>
              </div>

              <a
                href={event.platform == "X (Twitter)" ? xSpaceUrl : event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-400/10 border border-green-400 text-green-400 font-semibold rounded hover:bg-green-400/20 transition-all"
              >
                {event.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

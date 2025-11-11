'use client'
import { useEffect } from 'react'

declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (element?: HTMLElement) => void
            }
        }
    }
}

export default function LatestTweet() {
    useEffect(() => {
        // ensure script loads only once
        if (!window.twttr) {
            const script = document.createElement('script')
            script.src = 'https://platform.twitter.com/widgets.js'
            script.async = true
            document.body.appendChild(script)
        } else {
            window.twttr.widgets.load()
        }
    }, [])

    return (
        <a
            className="twitter-timeline"
            data-tweet-limit="1"
            data-chrome="noheader nofooter noborders transparent"
            data-theme="dark"
            href="https://x.com/DeFiHouse42"
        >
            Tweets by DeFiHouse42
        </a>
    )
}

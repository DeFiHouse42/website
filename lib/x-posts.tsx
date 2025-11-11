'use client'
import { useEffect, useState } from 'react'
import { Tweet } from 'react-tweet'
// https://x.com/defihouse42/status/1971388564039418295?s=20

const DEFAULT_TWEET_ID = '1971388564039418295'
export default function LatestTweet() {
    const [tweetId, setTweetId] = useState<string>(DEFAULT_TWEET_ID)

    useEffect(() => {
        fetch('/api/latest-x-post')
            .then(res => {
                if (!res.ok) {
                    console.warn(`API returned ${res.status}, using fallback tweet`)
                    return { tweetId: null, error: `API error: ${res.status}` }
                }
                return res.json()
            })
            .then(data => {
                // Check if we got a valid tweet ID
                if (data.tweetId && !data.error) {
                    setTweetId(data.tweetId)
                } else {
                    console.log('Using default tweet ID due to:', data.error || 'No tweet ID')
                    // Keep default tweet ID (already set in state)
                }
            })
            .catch((error) => {
                console.error('Failed to fetch latest tweet:', error)
                // Keep default tweet ID (already set in state)
            })
    }, [])

    return <Tweet id={tweetId} />
}

'use client'
import { useEffect, useState } from 'react'
import { Tweet } from 'react-tweet'

export default function LatestTweet() {
    const [tweetId, setTweetId] = useState<string | null>(null)

    useEffect(() => {

        //https://x.com/defihouse42/status/1971388564039418295?s=20
        // https://x.com/defihouse42/status/1986502197421764895?s=20
        setTweetId("1971388564039418295") // example ID
    }, [])

    if (!tweetId) return null
    return <Tweet id={tweetId} />
}

'use client'

import { useEffect, useRef } from 'react'

export default function Tweet({ id }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = ''
    if (window.twttr) {
      window.twttr.widgets.createTweet(id, ref.current, {
        conversation: 'none',
        dnt: true,
      })
    } else {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.onload = () => {
        window.twttr.widgets.createTweet(id, ref.current, {
          conversation: 'none',
          dnt: true,
        })
      }
      document.body.appendChild(script)
    }
  }, [id])

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
      }}
    />
  )
}

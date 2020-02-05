import React, { useState, useCallback } from 'react'
import './App.css'
import useWindowSize from './hooks/windowSize'
import useEventListener from './hooks/eventListener'
import Youtube from './players/youtube'
// import TwitchEmbedVideo from './players/twitch'

export default () => {
  const [ videoUrl, setVideoUrl ] = useState('')
  const pasteHandler = useCallback(
    event => {
      setVideoUrl((event.clipboardData || window.clipboardData).getData('text'))
    },
    [setVideoUrl],
  )
  useEventListener('paste', pasteHandler)
  const { width, height } = useWindowSize()
  let video

  // const video = <Youtube id="H3WZAw9ctmw" />
  // const video = <TwitchEmbedVideo video="207270826" />

  if (videoUrl) {
    try {
      const url = new URL(videoUrl)
    
      switch (url.hostname) {
        case "www.youtube.com":
          video = <Youtube id="H3WZAw9ctmw" />
          break
      }

    } catch (error) {
      setVideoUrl(null)
    }
  }

  return (
    <div style={{ width, height }}>
      {video}
      
      {!video && (
        <div>
          Paste video url (YouTube, Twitch)
          <br /><br />
          Pasted: {videoUrl}
        </div>
      )}
    </div>
  )
}

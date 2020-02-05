import React from 'react'

export default ({
  id,
  width = '100%',
  height = '100%'
}) => (
  <iframe
    width={width}
    height={height}
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

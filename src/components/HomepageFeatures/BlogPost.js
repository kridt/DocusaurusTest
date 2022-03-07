import React from 'react'

export default function BlogPost({ title, byline, postContent }) {
  return (
    <>
      <p>{byline}</p>  

      <h2>{title}</h2>
      <p>{postContent}</p>

    </>
  )
}

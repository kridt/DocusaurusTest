import React from 'react'
import BlogPost from '../components/HomepageFeatures/BlogPost'
import "../css/myReactPage.css"

export default function blog() {

  const posts = [
    {
      id: 1,
      title: "Filament system update! + bugfixes",
      byline: "- The SimplyPrint team",
      postContent: "Hey SimplyPrinters! We have another update for you; brand new filament page + spool add tool! So if you haven't tried our filament system yet; now is the time! It's now easier than ever, let's dive in to the changes!"
    },
    {
      id: 2,
      title: "Tottenham are the best",
      byline: "- The SimplyPrint team",
      postContent: "Hey SimplyPrinters! We have another update for you; brand new filament page + spool add tool! So if you haven't tried our filament system yet; now is the time! It's now easier than ever, let's dive in to the changes!"
    },

  ]



  return (
    <>
    
    <h1>Welcome to SimplyPrint's blog</h1>

    {posts.map(post => {

      
      return(
        <BlogPost key={post.id} title={post.title} byline={post.byline} postContent={post.postContent} />
      )

    })}

    </>
  )
}

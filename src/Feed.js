import Post from './Post'
import React from 'react'

function Feed({posts}) {
  return (
    <>
    {
    posts.map((post)=>(
        <Post 
        key={post.id}
        post={post}
        />
    ))
}
</>


  )
}

export default Feed
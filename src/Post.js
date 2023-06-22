import React from 'react'
import { Link } from 'react-router-dom'


function Post({post}) {
  return (
    <div>
        <Link to={`post/${post.id}`}><h2>{post.title}</h2></Link>
<p>{post.post}</p>
<p>{
    // post.body
(post.body).length <= 25 ? post.body:`${(post.body).slice(0,25)}...`
}
</p>
<hr style={{width:"100%" ,padding:"10px",margin:"2px"}}></hr>
<br></br>
    </div>
  )
}

export default Post
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';
function PostPage() {
  const {posts,handleDelete}=useContext(DataContext);

    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString() ===id)
  return (
    <main>
        {post &&
        <>
        <h2>
      {post.title}
        </h2>
        <p>{post.body}  
         it is real project of here</p>
        <Link to={`/edit/${post.id}`}><button type="button" id="edit">Edit</button></Link>
         <button onClick={()=>handleDelete(post.id)} type="button" id="del">Del</button>
        </>
}
{!post &&
    <div><h2>PageNotFound</h2>
    <br></br>
    <p>Goto HomePage<Link to="/">Home</Link></p></div>
}
    </main>
  )
}

export default PostPage
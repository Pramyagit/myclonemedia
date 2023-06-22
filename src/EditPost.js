import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {
  const {posts,editBody,editCount,editPost,setEditBody,setEditCount,setEditPost,handleEdit}=useContext(DataContext);
  const {id}=useParams();
  const post=posts.find(post=>(post.id).toString()===id);
  
  useEffect(()=>{
    if(post){
        setEditPost(post.title);
        setEditCount(post.post);
        setEditBody(post.body);
    }
  },[post,setEditBody,setEditCount,setEditPost])
  
  
    return (
    <div className='formNew'>
        {editPost&&
        <>
        <h2>EditPost</h2>
        <form className="newForm" onSubmit={(e)=>{
            e.preventDefault();
        }}>
  <label htmlFor="editpost">Title</label>
  <input 
  type="text"
  id="editpost"
  required
  value={editPost}
  onChange={(e)=>{setEditPost(e.target.value)}}
  ></input>
  <label htmlFor="countword">post</label>
  <input 
  type="text"
  id="countword"
  required
  value={editCount}
  onChange={(e)=>{setEditCount(e.target.value)}}
  ></input>
  <label htmlFor="editBody">Body</label>
<textarea id="editBody"
required
value={editBody}
onChange={(e)=>{
setEditBody(e.target.value)
}}
></textarea>
<button type="submit" id="edit"onClick={()=>handleEdit(post.id)}
>Submit</button>
</form>
</>
}
{!editPost &&
    <div><h2>PageNotFound</h2>
    <br></br>
    <p>Goto HomePage<Link to="/">Home</Link></p></div>
}
        </div>
  )
}

export default EditPost
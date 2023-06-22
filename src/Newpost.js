import React, { useContext } from 'react'
import DataContext from './context/DataContext'

function Newpost() {
 const {handleSubmit,newPost,setNewPost,newBody,setNewBody,newCount,setNewCount}=useContext(DataContext)
  return (
    <div className="formNew">
        <h2>Newpost</h2>
<form className="newForm" onSubmit={handleSubmit}>
  <label htmlFor="newpost">Title</label>
  <input 
  type="text"
  id="newpost"
  required
  value={newPost}
  onChange={(e)=>{setNewPost(e.target.value)}}
  ></input>
  <label htmlFor="countword">post</label>
  <input 
  type="text"
  id="countword"
  required
  value={newCount}
  onChange={(e)=>{setNewCount(e.target.value)}}
  ></input>
  <label htmlFor="newBody">Body</label>
<textarea id="newBody"
required
value={newBody}
onChange={(e)=>{
setNewBody(e.target.value)
}}
></textarea>
<button type="submit"
>Submit</button>
</form>
    </div>
  )
}

export default Newpost
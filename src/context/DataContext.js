import React, { createContext, useEffect, useState } from 'react'
import useWindowSize from '../hook/useWindowSize';
import { useNavigate } from 'react-router-dom';
import api from '../api/posts';
import useAxiosFetch from '../hook/useAxiosFetch';


const DataContext=createContext({});

export const DataProvider=({children})=>{
  const contacts=[{
    id:1,
    names:"ramya",
    email:"123@gmail.com",
    message:"helo"
  },
  {
    id:2,
    names:"prabu",
    email:"prabu@gmail.com",
    message:"helo"
  }
  ]
  const {width}=useWindowSize('')
  const[posts,setPosts]=useState([])
  const[search,setSearch]=useState('')
  const[sresult,setSresult]=useState([])
  const[newPost,setNewPost]=useState('')
  const[newBody,setNewBody]=useState('')
  const[newCount,setNewCount]=useState('')
  // edit
  const[editPost,setEditPost]=useState('')
  const[editBody,setEditBody]=useState('')
  const[editCount,setEditCount]=useState('')
  // contact
  const[contact,setContact]=useState([contacts])
  const[names,setNames]=useState([])
  const[email,setEmail]=useState([])
  const[date,setDate]=useState([])
  const[message,setMessage]=useState([])
  const navigator=useNavigate();
  // admin
  const[user,setUser]=useState([])
  const[pass,setPass]=useState([])
  const[admin,setAdmin]=useState([{
    user:"ramya",
    pass:123
  }])


const{data,fetchError,isLoading}=useAxiosFetch('http://localhost:3500/posts')
useEffect(()=>{
  setPosts(data)
},[data])

// nav-li toogle
const navActive=document.querySelectorAll('.list-item')
navActive.forEach((item)=>{
  item.addEventListener("click",(e)=>{
   navActive.forEach((item)=>{

     item.classList.remove('active')
   })
    item.classList.add('active')
  })
});

 
// axios
  // useEffect(()=>{
  //   const fetchPosts=async()=>{
  //     try{
  //       const response=await api.get('/posts');
  //       setPosts(response.data);
  //     }catch(err){
  //       if(err.response){
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       }else{
  //         console.log(`Error:${err.message}`);
  //       }
  
  //     }
  //   }
  //   fetchPosts();
  
  // },[])
  
  // handlemenu
  const handleMenu=()=>{
  const show=document.getElementById('menu');
  const nav=document.getElementById('navlist');
  show.addEventListener('click',()=>{
  nav.classList.toggle('hide');
  })
  // nav.classList.toggle('hide');
  }
  

  // home search
 
  // search
  
  useEffect(()=>{
    const filterResults=posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSresult(filterResults.reverse())
    },[posts,search])
  
  // admin login
  const handleAdmin=(e)=>{
  e.preventDefault();
  const adminUser={user:user,password:pass}
  console.log(adminUser);
  setAdmin(admin);
  setUser('')
  setPass('')
  }
  // submit button/Post
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const id=posts.length?posts[posts.length-1].id+1:1;
    const newposts={id,title:newPost,post:newCount,body:newBody}; 
    // const submitPost=[...posts,newposts]
    try{const response=await api.post('/posts',newposts)
    const allPosts=[...posts,response.data]
    setPosts(allPosts);
    // setPosts(submitPost);
    setNewPost('');
    setNewCount('');
    setNewBody('');
    navigator('/');
  }
  catch(err){
    console.log(`Error:${err.message}`);
  }
    }
  // contact submit
  const handleContact=async(e)=>{
    e.preventDefault();
    const id=contacts.length?contacts[contacts.length-1].id+1:1;
    const newContact={id,name:names,email:email,date:date,message:message}
    const submitcontact=id?[...contacts,newContact]:newContact;
    setContact(submitcontact);
    localStorage.setItem("contact",JSON.stringify(submitcontact));
    console.log(submitcontact)
    setNames('')
    setEmail('')
    setDate('')
    setMessage('')
    navigator('/contact')
   
  }
  
  // delete
  const handleDelete=async(id)=>{
    try{
      await api.delete(`/posts/${id}`)
    const postList=posts.filter(
      post=>post.id!==id
      );
      console.log("delete")
    setPosts(postList);
    navigator('/');}
    catch(err){
      console.log(`Error:${err.message}`);
    }
  }
  // put/Upade/patch
  const handleEdit=async(id)=>{
  
    // const id=posts.length?posts[posts.length-1].id+1:1;
    const updatePosts={id,title:editPost,post:editCount,body:editBody}; 
    try{
      const response=await api.put(`/posts/${id}`,updatePosts)
      setPosts(posts.map(post=>post.id===id?{...response.data}:post));
      setEditPost('');
      setEditCount('')
      setEditBody('');
      navigator('/');
    }catch(err){
         console.log(`Error:${err.message}`);
    }
  }
    
    
    return(
        <DataContext.Provider value={{
            width,search,setSearch ,handleMenu,posts,handleSubmit,
            newPost,setNewPost,newBody,setNewBody,newCount,setNewCount,
            handleDelete,editBody,editCount,editPost,setEditBody,setEditCount,
            setEditPost,handleEdit,handleContact,names,email,date,message,setNames,
            setEmail,setDate,setMessage,contact,user,pass,handleAdmin,setPass,setUser,
            sresult,isLoading,fetchError
       }}>
{children}
        </DataContext.Provider>
    )
}
export default DataContext
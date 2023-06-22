import './App.css';
import Home from './Home';
import About from './About';
import Nopage from './Nopage';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Newpost from './Newpost';
import { Routes, Route} from 'react-router-dom';
import Contact from './Contact';
import PostPage from './PostPage';
// import Post from './Post';
import Admin from './Admin';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';


// const contacts=[{
//   id:1,
//   names:"ramya",
//   email:"123@gmail.com",
//   message:"helo"
// },
// {
//   id:2,
//   names:"prabu",
//   email:"prabu@gmail.com",
//   message:"helo"
// }
// ]



function App() {
//   const {width}=useWindowSize('')
// const[posts,setPosts]=useState([])
// const[search,setSearch]=useState('')
// const[sresult,setSresult]=useState([])
// const[newPost,setNewPost]=useState('')
// const[newBody,setNewBody]=useState('')
// const[newCount,setNewCount]=useState('')
// // edit
// const[editPost,setEditPost]=useState('')
// const[editBody,setEditBody]=useState('')
// const[editCount,setEditCount]=useState('')
// // contact
// const[contact,setContact]=useState([contacts])
// const[names,setNames]=useState([])
// const[email,setEmail]=useState([])
// const[date,setDate]=useState([])
// const[message,setMessage]=useState([])
// const navigator=useNavigate();
// // admin
// const[user,setUser]=useState([])
// const[pass,setPass]=useState([])
// const[admin,setAdmin]=useState([{
//   user:"ramya",
//   pass:123
// }])



// const{data,fetchError,isLoading}=useAxiosFetch('http://localhost:3500/posts')
// useEffect(()=>{
//   setPosts(data)
// },[data])


// // axios
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


// // handlemenu
// const handleMenu=()=>{
// const show=document.getElementById('menu');
// const nav=document.getElementById('navlist');
// show.addEventListener('click',()=>{
// nav.classList.toggle('hide');
// })
// // nav.classList.toggle('hide');
// }


// // search
// useEffect(()=>{
//   const filterResults=posts.filter((post)=>
    
//     ((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase())
//     )
  
//     setSresult(filterResults.reverse())
//   },[posts,search])

// // admin login
// const handleAdmin=(e)=>{
// e.preventDefault();
// const adminUser={user:user,password:pass}
// console.log(adminUser);
// setAdmin(admin);
// setUser('')
// setPass('')
// }
// // submit button/Post
// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   const id=posts.length?posts[posts.length-1].id+1:1;
//   const newposts={id,title:newPost,post:newCount,body:newBody}; 
//   // const submitPost=[...posts,newposts]
//   try{const response=await api.post('/posts',newposts)
//   const allPosts=[...posts,response.data]
//   setPosts(allPosts);
//   // setPosts(submitPost);
//   setNewPost('');
//   setNewCount('');
//   setNewBody('');
//   navigator('/');
// }
// catch(err){
//   console.log(`Error:${err.message}`);
// }
//   }
// // contact submit
// const handleContact=async(e)=>{
//   e.preventDefault();
//   const id=contacts.length?contacts[contacts.length-1].id+1:1;
//   const newContact={id,name:names,email:email,date:date,message:message}
//   const submitcontact=id?[...contacts,newContact]:newContact;
//   setContact(submitcontact);
//   localStorage.setItem("contact",JSON.stringify(submitcontact));
//   console.log(submitcontact)
//   setNames('')
//   setEmail('')
//   setDate('')
//   setMessage('')
//   navigator('/contact')
 
// }

// // delete
// const handleDelete=async(id)=>{
//   try{
//     await api.delete(`/posts/${id}`)
//   const postList=posts.filter(
//     post=>post.id!==id
//     );
//     console.log("delete")
//   setPosts(postList);
//   navigator('/');}
//   catch(err){
//     console.log(`Error:${err.message}`);
//   }
// }
// // put/Upade/patch
// const handleEdit=async(id)=>{

//   // const id=posts.length?posts[posts.length-1].id+1:1;
//   const updatePosts={id,title:editPost,post:editCount,body:editBody}; 
//   try{
//     const response=await api.put(`/posts/${id}`,updatePosts)
//     setPosts(posts.map(post=>post.id===id?{...response.data}:post));
//     setEditPost('');
//     setEditCount('')
//     setEditBody('');
//     navigator('/');
//   }catch(err){
//        console.log(`Error:${err.message}`);
//   }
// }

  return (
    <div className="App">
      <DataProvider>

      <Header
      // width={width}
      title="My Media Clone"/>
      <Nav
      // search={search}
      // setSearch={setSearch}
      // handleMenu={handleMenu}
      />
      <Routes>
<Route path="/" element={<Home 
//  posts={sresult}
// fetcherror={fetchError}
// isLoading={isLoading}
/>} />
  <Route path="post">
       <Route  index element={ <Newpost
      // handleSubmit={handleSubmit}
      // newPost={newPost}
      // setNewPost={setNewPost}
      // newBody={newBody}
      // setNewBody={setNewBody}
      // newCount={newCount}
      // setNewCount={setNewCount}
      />} />
      <Route path=":id" element={<PostPage
      // posts={posts}
      // handleDelete={handleDelete}
      />}/>
 </Route>
 <Route path="/edit/:id" element={<EditPost 
      //  posts={posts}
      // handleEdit={handleEdit}
      // editPost={editPost}
      // setEditPost={setEditPost}
      // editBody={editBody}
      // setEditBody={setEditBody}
      // editCount={editCount}
      // setEditCount={setEditCount}  
      />}/>
 <Route path="about" element={ <About/>}/>
 <Route path="contact">
       <Route index element={ <Contact 
      //  handleContact={handleContact}
      //  names={names}
      //  email={email}
      //  date={date}
      //  message={message}
      //  contact={contact}
      //  setNames={setNames}
      //  setEmail={setEmail}
      //  setDate={setDate}
      //  setMessage={setMessage}
      //  setContact={setContact}
      />}/>
       {/* <Route path='/contact:id' element={<Contactpost
       names={names}
       email={email}
       date={date}
       message={message}
       contact={contact}
       setNames={setNames}
       setEmail={setEmail}
       setDate={setDate}
       setMessage={setMessage}
       setContact={setContact}
       contacts={contacts}
      />} /> */}
</Route>
 <Route path="admin" element={ <Admin
//  user={user}
//  pass={pass}
//  setUser={setUser}
//  setPass={setPass}
//  handleAdmin={handleAdmin}
/>}/>
 <Route path="*" element={ <Nopage/>}/>
 </Routes>
<Footer/>

</DataProvider>
    </div>

  );
}

export default App;

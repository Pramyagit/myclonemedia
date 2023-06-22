import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

function Admin() {
  const {user,pass,handleAdmin,setPass,setUser}=useContext(DataContext)
  return (
    <div><h2>Admin</h2>
    <form className='formAdmin' onSubmit={handleAdmin}>
    <label htmlFor='user'>User</label>
    <input id="user" required value={user} type="text" onChange={(e)=>setUser(e.target.value)} ></input>
    <label htmlFor='pass'>Password</label>
    <input id="pass" required value={pass}type="password" onChange={(e)=>setPass(e.target.value)} ></input>
    <Link to="admin"><button type="submit" >Login</button></Link>
    </form>
    </div>
  )
}

export default Admin
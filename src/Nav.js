import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext';
function Nav() {
  const {search,setSearch ,handleMenu ,searchHome}=useContext(DataContext);
  return (
    <nav className="nav">
     <span id="menu" className='menu' onClick={handleMenu}><FaBars/></span>
     <div className='Listnav' id="Listnav">
    <ul className="navList"  id="navlist">
        <li className='list-item active'><Link to="/">Home</Link></li>
        <li className='list-item'><Link to="about">About</Link></li>
        <li className='list-item'><Link to="contact">Contact</Link></li>
        <li className='list-item'><Link to="Post">Post</Link></li>
        <li className='list-item'><Link to="admin">Admin</Link></li>
    </ul>
    <form className="searchForm" onSubmit={(e)=>{e.preventDefault();}}>
        <label htmlFor="search">Search</label>
        <input 
        id="search"
        type="text"
        placeholder="searchpost"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onFocus={searchHome}>
        </input>

    </form>
     </div>
    
   </nav>
  )
}

export default Nav
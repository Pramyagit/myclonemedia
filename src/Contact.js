import React, { useContext } from 'react'
import DataContext from './context/DataContext'
function Contact() {
  const {handleContact,names,email,date,message,setNames,setEmail,setDate,setMessage}=useContext(DataContext);
  return (
    <div className='formNew'>
        <h2>Contact</h2>
       <form onSubmit={handleContact} className='newContact'>
        <label htmlFor="name">Name:</label> 
        <input 
        type="text"
        value={names}
         id="name" 
         onChange={(e)=>{setNames(e.target.value)}} 
         required></input><br></br>
        <label htmlFor="email">Email:</label> 
        <input 
         value={email}
         type="email" 
         id="email" onChange={(e)=>setEmail(e.target.value)} 
         required></input><br></br>
        <label htmlFor="date">Date:</label> 
        <input 
         value={date}
         type="date"
         id="date"onChange={(e)=>setDate(e.target.value)}
          required></input><br></br>
        <label htmlFor="msg">Message</label>  
        <textarea 
        value={message} 
        onChange={(e)=>setMessage(e.target.value)}
        id="msg" required></textarea><br></br>
     <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default Contact
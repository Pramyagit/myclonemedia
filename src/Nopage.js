import React from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
  return (
    <div><h2>PageNotFound</h2>
    <br></br>
    <p>Goto HomePage<Link to="/">Home</Link></p></div>
  )
}

export default Nopage
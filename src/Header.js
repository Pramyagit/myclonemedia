import React, { useContext } from 'react'
import { FaLaptop,FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import DataContext from './context/DataContext'

function Header({title}) {
  const {width}=useContext(DataContext)
  return (
    <header>
        <h1>{title}</h1>
<span className='hook'>{width<768 ?<FaMobileAlt style={{fontSize:"30px"}}/>:width<992?<FaTabletAlt style={{fontSize:"30px"}}/>:<FaLaptop style={{fontSize:"30px"}}/>}</span>
    </header>
  )
}

export default Header
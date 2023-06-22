import React from 'react'

const Contactpost = (contacts) => {
    
    
    return (
        <div>Contactpost 

            {
contacts.map((item)=>{
    <p>{item.names}</p>
})
            }
    </div>
    
  )
}

export default Contactpost
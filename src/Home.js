import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'
function Home() {
 const {sresult,isLoading,fetchError}= useContext(DataContext)
  return (
   <main className='homeLoad'>
    {/* {sresult.length?
    (<Feed 
    posts={sresult}
    />):
    <p>No post display.</p>} */}

    {isLoading && <div className="load">Loading<p className="loader"></p></div>}
    {!isLoading && fetchError && <p className='error'>{fetchError}</p>}
   {!isLoading &&!fetchError && (sresult.length?
    (<Feed 
    posts={sresult}
    />):
    <p>No post display.</p> )}
   </main>
  )
}

export default Home
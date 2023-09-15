import React, { useState } from 'react'

const App = () => {
    const[incrmnt,setIncrmnt]=useState(0);

    const first=()=>{
        setIncrmnt(incrmnt+1)
    }
    const secnd=()=>{
        if(incrmnt>0){
        setIncrmnt(incrmnt-1)
        }else{
            alert("sorry!!! 0 is reached")
            setIncrmnt(0)
        }
    }
  return (
    <>
     <div className='mains_div'>
     <div className='iner_div'>
     <h1>{incrmnt}</h1>
     <div className='btn_div'>
        <button onClick={first}>Incremnt</button>
        <button onClick={secnd}>Decremnt</button>
        <div>ufaq</div>
     </div>

     </div>

     </div> 
    </>
  )
}

export default App;


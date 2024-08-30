import React, { useEffect } from 'react'
import { useState } from 'react'
const MainSection = () => {
    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const formattedTime=(time)=>{
        let mins=Math.floor(time/60)
        const secs=time%60
        return `${mins<10?"0":""}${mins}:${secs<10?"0":""}${secs}`
    }
     useEffect(()=>{
        let timer;
        if(isRunning){
        timer=setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000)
        }
    return ()=>{
        if(timer){
        clearInterval(timer)
        }
    }
     },[isRunning])
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{borderRadius:'10px',border:'3px solid black',height:'200px',width:'200px'}}>
     <h1>StopWatch</h1>
     <div style={{fontSize:'15px',fontWeight:'600',margin:'10px'}}>time:{formattedTime(time)}</div>
     <button type="submit" onClick={()=>setIsRunning((prev)=>!prev)}
        >{isRunning?"stop":"start"}</button>
     <button type='reset' onClick={()=>{
        setTime(0)
        setIsRunning(false)
     }}>Reset</button>
     </div>
    </div>
  )
}

export default MainSection
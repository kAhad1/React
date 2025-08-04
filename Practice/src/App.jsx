
import React, { useState } from 'react'
import Navbar from './components/Navbar'
const App = () => {
  const submitHandler = (e) => {

    e.preventDefault()
    console.log(name) 
    setname("")
   }
   
   const [name, setname] = useState('')



  return (
  <>
  <Navbar/>
    <div> <form  onSubmit={(e)=>{
      submitHandler(e)}
      
    }>
    <input value={name} className='bg-amber-50' placeholder='Enter your name' onChange={(e)=>{
      setname(e.target.value)
    }} />
    <button> Submit</button>
    

  </form></div></>
  )
}

export default App
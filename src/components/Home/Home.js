import React from 'react'
import photo from "../SaranshRegmi.jpg"
import "../Home/home.css"

export default function Home() {
  return (
    <div>
        <div className='home'>
        <h1>Welcome to Angular App</h1>
        <h2>Hello, My Name is Saransh Regmi</h2>
        <img src={photo} alt='photo'/>
        </div>
    </div>
  )
}

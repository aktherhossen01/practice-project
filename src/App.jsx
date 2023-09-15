
import { useState } from 'react'
import './App.css'
import Bloges from './component/Bloges/Bloges'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'


function App() {
  const [book,setBook]= useState([])
  
  const handleClick = bolg=>{
    const newBook = [...book, bolg]
    setBook(newBook) 
  }
  

  return (
    <>
      <Header></Header>
      <div className='flex justify-between max-w-5xl mx-auto'>
        <Bloges handleClick={handleClick}></Bloges>
        <Bookmarks book={book}></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App

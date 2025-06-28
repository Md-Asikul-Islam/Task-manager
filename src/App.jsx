import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import TaskBoard from './Components/TaskBoard';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='bg-[#191D26]'>
      <Header/>
      <HeroSection/>
      <TaskBoard/>
      <Footer/>
    </div>
  )
}

export default App

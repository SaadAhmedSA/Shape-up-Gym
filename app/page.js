import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Servive from './component/servive'
import Profile from './component/Profile'
import ContactSection from './component/Contact'

const page = () => {
  return (
    <>
    <section id='home' className='h-[100vh]  font-sans  text-white flex justify-center items-center'>
    <div className="bg-black bg-opacity-50 md:mx-20 pt-20 p-8 rounded-md text-white half-w-lg  text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Body, Elevate Your Life</h1>
        
        <p className="text-lg md:text-xl mb-10">
          Join the <strong className='text-yellow-500'>Shape-Up</strong> family and unlock a stronger, healthier you with expert trainers,
          personalized programs, and a community that motivates you every step of the way.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/get-started" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded">
            Get Started
          </a>
          <a href="/classes" className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded hover:bg-white hover:text-black transition duration-200">
            View Classes
          </a>
        </div>
                <p className="text-sm text-yellow-400 mt-6">Free first class for new members — Book now!</p>
      </div>
    </section>
    <About/>
    <Servive/>
    <Profile/>
    <ContactSection/>
    
    
    </>
  )
}

export default page
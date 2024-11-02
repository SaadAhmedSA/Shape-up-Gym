import Image from 'next/image'
import React from 'react'
import img from "@/public/ab.avif"

const About = () => {
  return (
    <section id="about-us" className="bg-black text-white p-10  space-y-8">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-yellow-500">About Us</h2>
    <p className="text-lg mt-4">
      At <span className="font-bold text-yellow-500">Shape-Up</span> , we believe fitness should be accessible, empowering, and transformative. 
      Founded in 2020, our gym was created to help individuals reach their full potential through health and fitness.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div className="p-6 ">
      <Image src={img} alt='hero' className='rounded-lg shadow-lg w-full h-auto object-cover' />
    </div>

    <div className="p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-yellow-500">Why Choose us?</h3>
      <h2 className=" font-semibold my-4 text-yellow-500">Mission & Vision</h2>
      <p>
      Mission: To inspire our members to lead healthier, happier lives.
      Vision: To be a supportive community where everyone can reach their fitness goals.
      </p>

      <h2 className=" font-semibold my-4 text-yellow-500">Our team</h2>
      <p>Meet our certified trainers and expert staff who are dedicated to guiding and supporting you in your fitness journey.</p>

      
    </div>
  </div>
</section>

  )
}

export default About
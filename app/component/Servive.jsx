import Image from 'next/image'
import React from 'react'
import s1 from '@/public/s1.avif'
import s2 from '@/public/s2.avif'
import s3 from '@/public/s3.avif'

const Servive = () => {
 
  return (
    <>
    <h2 className="text-4xl font-semibold bg-black text-center  text-yellow-500 pb-10">Our Fitness Program</h2>


    <section className='bg-black py-12 ' id='servive'>

        <div className='container mx-auto flex flex-wrap justify-evenly items-center   gap-4'>
    <div className="max-w-xs w-full bg-yellow-500 text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center rounded text-yellow-500  mb-2 mx-auto">
      <Image src={s1} alt='strenght' height={150} className='rounded'/>       
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">Strength Training</h3>
      <p className="text-gray-700 text-center">
        Build and tone muscles with expert guidance and state-of-the-art equipment designed for all fitness levels.
      </p>
      <button className="mt-4 text-gray-800 font-semibold hover:underline block mx-auto">
        Learn More
      </button>
    </div>
      
    <div className="max-w-xs w-full bg-yellow-500 text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center  text-yellow-500  mb-2 mx-auto">
      <Image src={s3} alt='strenght' height={150}  className='rounded'/>       
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">fitness Training</h3>
      <p className="text-gray-700 text-center">
        Build and tone muscles with expert guidance and state-of-the-art equipment designed for all fitness levels.
      </p>
      <button className="mt-4 text-gray-800 font-semibold hover:underline block mx-auto">
        Learn More
      </button>
    </div>
      
    <div className="max-w-xs w-full bg-yellow-500 text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center  text-yellow-500  mb-2 mx-auto">
      <Image src={s2} alt='strenght' height={150}  className='rounded'/>       
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">Yoga Training</h3>
      <p className="text-gray-700 text-center"> 
        Build and tone muscles with expert guidance and state-of-the-art equipment designed for all fitness levels.
      </p>
      <button className="mt-4 text-gray-800 font-semibold hover:underline block mx-auto">
        Learn More
      </button>
    </div>
      
    </div>
 
    </section>
    </>
  )
}

export default Servive
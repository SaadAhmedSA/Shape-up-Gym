import React from 'react'
import r1 from "@/public/r1.avif"
import t2 from "@/public/t2.avif"
import t3 from "@/public/t3.avif"
import Image from 'next/image'

const Profile = () => {
    const trainer = [
        {
        name: 'Alex John',
        imaga: r1,
        specialty: 'Strength & Conditioning',
        experience: 8,
        instagram: 'https://instagram.com/trainer',
        facebook: 'https://facebook.com/trainer',
        twitter: 'https://twitter.com/trainer',
      },
        {
        name: 'Michel John',
        imaga:t2,
        specialty: 'Yoga & Health',
        experience: 3,
        instagram: 'https://instagram.com/trainer',
        facebook: 'https://facebook.com/trainer',
        twitter: 'https://twitter.com/trainer',
      },
        {
        name: 'Jhon thomas',
        imaga:t3,
        specialty: 'Body Building',
        experience: 5,
        instagram: 'https://instagram.com/trainer',
        facebook: 'https://facebook.com/trainer',
        twitter: 'https://twitter.com/trainer',
      },
       
    ]
      ;
  return (
    <>
          <h2 className="text-4xl font-semibold bg-black text-center  text-yellow-500 pb-10">Our Trainer</h2>
    <div className='flex bg-black flex-wrap justify-evenly mx-auto items-center gap-4 py-10' id="trainer">

        {trainer.map((trainer, index)=>{
          return(
            <div key={index} className="max-w-xs w-full bg-gray-900 text-yellow-500  mb-2 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className=" rounded text-yellow-500 h-50 mb-2 flex justify-center">
            <Image src={trainer.imaga} alt='strenght' height={200} width={200} className='rounded'/>       
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{trainer.name}</h3>
            <p className=" text-center">
            {trainer.specialty}            
            </p>
            <p className=" text-center">
            Experience : {trainer.experience} years           
            </p>
           
            <button className="mt-4  font-semibold hover:underline block mx-auto">
              Make a Appointment
            </button>
          </div>)

})}
        
    </div>
</>
  )
}

export default Profile

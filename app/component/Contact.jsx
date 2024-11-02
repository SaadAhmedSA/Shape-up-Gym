import Image from 'next/image';
import React from 'react';
import im from "@/public/logo.avif"

const ContactSection = () => {
  return (
    <section className="bg-black text-yellow-500 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <div className='flex justify-evenly items-start flex-wrap py-5'>
            <Image src={im} height={200} className='rounded-full mb-10 '/>
        <form className="max-w-xl w-full  bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-200 text-black font-bold py-2 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

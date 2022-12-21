import React from 'react'

function About() {
  return (
    <div className='text-primary-content'>
      <h1 className="text-4xl mb-5">Our Mission</h1>
      <p className="text-lg text-white-400">
        We are students from South Florida looking to improve student learning by using our knowledge in programming and app design. As students ourselves, we know how difficult it can be to study for a class. FlashStudy aims to solve this problem by making a simple, easy to use, and intuitive way to study for any class, with study sets created by students & teachers.
      </p>
      <p className='mt-4 text-lg text-gray-400'>
        Project By:
        <a href="#" className="text-white"> Rayhan Marrero</a>
      </p>
      <p className='mt-4 text-lg text-gray-400'>
        Logo By:
        <a href="#" className="text-white"> Varun Nair</a>
      </p>
      <p className='mt-4 text-lg text-gray-400'>
        Text By:
        <a href="#" className="text-white"> Ameer Syed</a>
      </p>
    </div>
  )
}

export default About
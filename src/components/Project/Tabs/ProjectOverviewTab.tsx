import React from 'react'

const ProjectOverviewTab = () => {
  return (
    <div id='overview'>
            <div className='mt-8 p-4 rounded-md bg-primary/10'>
              <div className='font-semibold text-black'>Description</div>
              <div className='text-sm mt-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis temporibus aut earum explicabo placeat? Quo vero distinctio molestias pariatur quis! Animi dolorem voluptatum ullam labore nesciunt ea explicabo alias?</div>
            </div>
            <div className='mt-6 grid grid-cols-2'>
              <div>
                <div className='font-semibold'>Project Difficulty</div>
                <div className=' mt-2 text-gray-600'>Intermediate / Difficult</div>
              </div>
              <div>
                <div className='font-semibold'>Expected size of the project</div>
                <div className=' mt-2 text-gray-600'>350 hours</div>
              </div>
            </div>
            <div className='mt-6'>
              <div>
                <div className='font-semibold'>Project skills / Pre-requisites</div>
                <div className=' mt-2 text-gray-600'>React / Php / Symphony</div>
              </div>
            </div>
            <div className='mt-6'>
              <div className='font-semibold'>Project Goals</div>
              <ul className='list-inside list-disc mt-3 text-gray-600'>
                <li>To create a new interaction model Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, distinctio.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.  ut vero consectetur sit velit nulla quibusdam maiores!</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, explicabo in voluptas quaerat quas dolor?</li>
              </ul>
            </div>
          </div>
  )
}

export default ProjectOverviewTab
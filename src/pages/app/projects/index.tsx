import ProjectCard from '@/components/Projects/ProjectCard'
import { BaseLayout } from '@/components/layouts'
import React from 'react'

const Projects = () => {
  return (
    <BaseLayout >
    <div className='px-8 py-8'>
        <div className='grid gap-10 grid-cols-[1.2fr_1fr]'>
            <div className='w-full'>
                <input className='w-full outline-none border placeholder:text-sm px-4 py-2 rounded-md' placeholder='Search Project by tech mentor, title..'/>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <select className='w-full border placeholder:text-sm px-4 py-2 rounded-md'>
                    <option>Technology</option>
                </select>
                <select className='w-full border placeholder:text-sm px-4 py-2 rounded-md'>
                    <option>Difficulty</option>
                </select>
            </div>
        </div>
        <div className='mt-10 grid grid-cols-3 gap-10'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        </div>
    </BaseLayout>
  )
}

export default Projects
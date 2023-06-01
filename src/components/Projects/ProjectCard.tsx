import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

interface IProjectDetail {
    title: string;
    value: string;
}

const ProjectDetail = ({
    title,
    value
}: IProjectDetail) => {
    return (
        <div className=''>
            <div className='text-sm font-[600]'>{title}</div>
            <div className='text-sm mt-[3px]'>{value}</div>
        </div>
    )
}

const ProjectCard = () => {
    return (
        <div className='w-full bg-[#F5F5F5] bg-opacity-30 rounded-md py-4 px-5 border'>
            <div className='bg-primary/10 text-primary text-sm px-3 py-1 rounded-3xl w-fit'>GSOC 2023</div>
            <div className='text-xl font-semibold mt-3'>GSOC LMS Portal for Drupal</div>
            <div className='mt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt labore at unde, nihil quia esse id ratione laboriosam obcaecati.</div>
            <div className='gap-y-4 mt-4 grid grid-cols-2'>
                <ProjectDetail title="Difficulty" value="Intermediate/Difficult" />
                <ProjectDetail title="Expected Duration / Size" value="350 Hours" />
            </div>
            <div className='mt-4'></div>
            <ProjectDetail title="Technologies" value="React / PHP / Symphony / Drupal" />
            <div className='mt-5 flex items-center gap-5'>
                <button className='py-2 rounded-md text-white px-7 bg-primary text-sm border border-transparent'>Start Contributing</button>
                <button className='py-2 rounded-md  px-7 text-primary text-sm border border-primary flex items-center gap-3'>Read More
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
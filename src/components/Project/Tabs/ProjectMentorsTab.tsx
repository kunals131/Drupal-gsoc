import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineSlack } from 'react-icons/ai'


const MentorProfileCard = ()=>{
    return (
        <div className='flex items-center py-4 px-5 rounded-md bg-black/5 justify-between'>
            <div className='flex items-center gap-2'>
                <div className='w-[50px] h-[50px] rounded-full test-user-image border-2 border-primary' ></div>
                <div>
                    <div className='text-base font-semibold'>Test User</div>
                    <div className='opacity-40 text-xs'>test@gmail.com</div>
                </div>
            </div>
            <div className='flex text-2xl items-center gap-4'>
                <AiFillGithub className='opacity-60 hover:opacity-100 cursor-pointer'/>
                <AiFillLinkedin className='opacity-60 hover:opacity-100 cursor-pointer'/>
                <AiOutlineSlack className='opacity-60 hover:opacity-100 cursor-pointer'/>
                <button className='border py-[6px] text-sm px-5 bg-white rounded-md'>Send Message</button>
            </div>
        </div>
    )
}


const ProjectMentorsTab = () => {
  return (
    <div className='mt-8 space-y-4'>
        <MentorProfileCard/>
        <MentorProfileCard/>
    </div>
  )
}

export default ProjectMentorsTab
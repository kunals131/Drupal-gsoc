import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const ProfileOverviewTab = () => {
    return (
        <div className='px-5 py-0'>
            <div className='space-y-6'>
                <div className=''>
                    <div className='text-lg font-bold'>Profile Summary</div>
                    <div className='text-sm mt-2 w-[60%] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat animi, deserunt corrupti incidunt dolorem! Omnis neque est Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque distinctio blanditiis aliquid quae culpa doloribus possimus quibusdam iure facilis recusandae veniam, temporibus nostrum fugiat sequi ipsum id. Quidem, iusto. reprehenderit nobis consequuntur eius, officia quaerat iste perferendis magnam voluptatem, ab officiis!</div>
                </div>
                <div className=''>
                    <div className='text-lg font-bold'>Linkedin</div>
                    <div className='flex mt-1 items-center gap-3 text-blue-500'>
                        <BsLinkedin size={22} /> <div className='text-blue-500 border-b border-b-blue-600 pb-[2px]'>linkedin.com/in/kunal-sangtiani</div>
                    </div>
                </div>
                <div className=''>
                    <div className='text-lg font-bold'>Github</div>
                    <div className='flex mt-1 items-center gap-3 text-black'>
                        <BsGithub size={22} /> <div className=' border-b border-b-black pb-[2px]'>github.com/kunal-sangtiani</div>
                    </div>
                </div>
                <div className=''>
                    <div className='text-lg font-bold'>Resume</div>
                  
                </div>
            </div>
        </div>
    )
}

export default ProfileOverviewTab
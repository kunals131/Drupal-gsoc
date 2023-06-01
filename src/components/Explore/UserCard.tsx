import React from 'react'

const UserCard = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full bg-gray-400'></div>
            <div>
                <div className='text-sm font-[500]'>Alan Jones</div>
                <div className='opacity-40 text-xs'>GSOC Mentor 2022</div>
            </div>
        </div>
        <button className='border rounded-md px-4 py-[5px] text-xs border-black/30 hover:text-white hover:bg-black transition-all'>Message</button>
    </div>
  )
}

export default UserCard
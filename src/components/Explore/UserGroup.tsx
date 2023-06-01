import React from 'react'
import { RiUserStarLine } from 'react-icons/ri'
import UserCard from './UserCard'
import { AiOutlineArrowRight } from 'react-icons/ai'

const UserGroup = () => {
  return (
    <div>
        <div className='flex items-center gap-3'>
            <RiUserStarLine/>
            <div className='font-semibold'>Connect with mentors</div>
        </div>
        <div className='mt-5 space-y-5'>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
        <div className='flex items-center  gap-1  mt-4 font-[500] text-sm cursor-pointer justify-end'>
          <div>View All</div>
          <AiOutlineArrowRight/>
        </div>
    </div>
  )
}

export default UserGroup
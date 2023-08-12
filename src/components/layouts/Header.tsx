import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi';
import { BsBell, BsBookmarks } from 'react-icons/bs';
import { MdNotificationsNone, MdOutlineBookmarks } from 'react-icons/md';
import {FiBell} from 'react-icons/fi'
import { TEST_USER_IMG } from '@/utils/assets';
import { controlTypes } from './BaseLayout';
const HeaderIcon = ({icon} : {icon: React.ReactNode})=>{
    return (
        <div className='flex items-center justify-center text-gray-500 w-[50px] h-[50px] rounded-full bg-gray-50'>
            {icon}
        </div>
    )
}

const Header = ({headerControl}:{
    headerControl ?: controlTypes
}) => {
  return (
    <div className='flex items-center justify-between h-[90px] px-8 border-b py-3'>
        <div className=''>
            <div className='flex items-center relative'>
                <input placeholder='Search Projects, mentors..' className='rounded-lg placeholder:text-sm py-[10px] w-[400px] border p-2'/>
                <RiSearchLine className='absolute sm right-2 opacity-50'/>
            </div>
        </div>
        <div className='flex items-center  gap-6'>
                <HeaderIcon icon={<BiMessageDetail className='text-2xl '/>} />
                <HeaderIcon icon={<MdNotificationsNone className='text-2xl '/>} />
                <HeaderIcon icon={<MdOutlineBookmarks className='text-2xl '/>} />
                <div style={{background :`url(${TEST_USER_IMG}) center center/cover` }} className='w-[48px] border-4 border-primary h-[48px] rounded-full'></div>
            </div>
    </div>
  )
}

export default Header
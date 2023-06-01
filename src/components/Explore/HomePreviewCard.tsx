import { HOME_PREVIEW_CARD_IMG, TEST_USER_IMG } from '@/utils/assets'
import React from 'react'
import { BsBookmark } from 'react-icons/bs'



const HomePreviewCard = () => {
  return (
    <div className='grid grid-cols-[1fr_1.2fr] gap-4 w-full'>
        <div style={{background : `url(${HOME_PREVIEW_CARD_IMG}) center center/cover`}} className='w-full h-auto rounded-md'></div>
        <div className='py-1'>
            <div className='text-base '>How to make better contributions..</div>
            <div className='text-xs mt-1 opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.ellendus temporibus facere nisi dolore totam odio?..</div>
            <div className='flex mt-1 items-center gap-2'>
                <div className='w-[30px] h-[30px] rounded-full' style={{background  :`url(${TEST_USER_IMG}) center center/cover`}}></div>
                <div className='text-xs'>Kunal Sangtiani</div>
            </div>
            <div className='mt-3 pr-2 flex items-center justify-between'>
                <div className='text-xs opacity-60'>12m ago</div>
                <BsBookmark className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default HomePreviewCard
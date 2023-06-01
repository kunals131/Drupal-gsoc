import { HOME_PREVIEW_CARD_IMG, TEST_USER_IMG } from '@/utils/assets'
import React from 'react'
import { BsBookmark } from 'react-icons/bs'
import { MdBookmark } from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai';

const HomeCategoryPreviewCard = () => {
    return (
        <div className='grid grid-cols-[1.6fr_4fr] gap-5'>
            <div style={{background : `url(${HOME_PREVIEW_CARD_IMG}) center center/cover`}} className='w-full h-auto rounded-md'></div>
            <div className='py-1 w-full'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='text-lg font-semibold'>How I created my project from scratch during GSOC and..</div>
                    <div className='text-xs opacity-50'>June 2022</div>
                </div>
                <div className='opacity-50 text-sm mt-2'>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repudiandae. Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur, adipisicing elit. Enim omnis illum in, beatae architecto dicta harum quas nemo quos quam voluptate dolore..</div>
                <div className='flex items-center mt-3 justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[40px] w-[40px] rounded-full' style={{background : `url(${TEST_USER_IMG}) center center/cover`}}></div>
                        <div className='text-sm'>Kunal Sangtiani</div>
                    </div>
                    <div className='text-sm opacity-50'>GSOC 2022</div>
                </div>
                <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <BsBookmark/> 
                        <div className='text-xs'>Save for later</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-xs'>Read More</div>
                        <AiOutlineArrowRight/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeCategoryPreviewCard
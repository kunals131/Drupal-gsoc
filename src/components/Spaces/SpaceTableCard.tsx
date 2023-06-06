import React from 'react'

const SpaceTableCard = ()=>{
    return (
        <tr>
        <td className='flex items-center gap-2 px-2 py-3'>
            <div className='w-[60px] h-[40px] rounded-md bg-gray-300'></div>
            <div className='text-sm font-semibold'>Drupal LMS Space -1</div>
        </td>
        <td className=' font-semibold'>
            Drupal Portal for GSOC
        </td>
        <div className='flex items-center py-3'>
            <div className='w-[45px] h-[45px] bg-gray-500 relative z-[3] rounded-full border-white border-2'></div>
            <div className='w-[45px] h-[45px] relative z-[2] bg-black -left-6 rounded-full border-white border-2'></div>
            <div className='w-[45px] h-[45px] bg-gray-600 rounded-full z-[1] relative -left-12 border-white border-2'></div>
        </div>
        <td>350 hours</td>
        <td>2d ago</td>
    </tr>   
    )
}


export default SpaceTableCard
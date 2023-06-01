import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'


const ResourceComponent = ()=>{
    return (
        <div className='flex items-center cursor-pointer border-b py-2 justify-between'>
            <div className='text-sm font-[500]'>Drupal conribution guide</div>
            <AiOutlineArrowRight/>
        </div>
    )
}

const UserfulResourcesCollection = () => {
  return (
    <div className='mt-5 py-4 border-t'>
        <div className='flex items-center gap-4'>
            <BsLink45Deg className='text-2xl'/>
            <div className="font-semibold">Useful Resources</div>
        </div>
        <div className='mt-6 space-y-3'>
            <ResourceComponent/>
            <ResourceComponent/>
            <ResourceComponent/>
        </div>
    </div>
  )
}

export default UserfulResourcesCollection
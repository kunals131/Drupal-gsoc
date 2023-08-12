import WorkSpaceLayout from '@/components/layouts/WorkspaceLayout'
import React from 'react'

const WorkSpace = () => {
  return (
    <WorkSpaceLayout>
      <div className='p-5 grid grid-cols-[4fr_1fr]'>
        <div>
        <div className='font-semibold text-sm text-gray-400'>
          Dashboard / Spaces / <span className='text-black font-bold'>Drupal LMS-1 Space</span>
        </div>
        <div className='mt-3 text-2xl font-black'>
          Drupal LMS -1 Space
        </div>
        <div className='mt-2 text-xs text-gray-400 font-semibold'>Updated 1 day ago</div>
            
        </div>
      </div>
    </WorkSpaceLayout>
  )
}

export default WorkSpace
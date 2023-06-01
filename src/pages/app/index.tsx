import CategoryOption from '@/components/Explore/CategoryOption'
import HomeCategoryPreviewCard from '@/components/Explore/HomeCategoryPreviewCard'
import HomePreviewCard from '@/components/Explore/HomePreviewCard'
import UserGroup from '@/components/Explore/UserGroup'
import UserfulResourcesCollection from '@/components/Explore/UserfulResourcesCollection'
import { BaseLayout } from '@/components/layouts'
import React from 'react'

const ExploreAppPage = () => {
  return (
    <BaseLayout>
    <div className='grid grid-cols-[3fr_1fr]'>
      <div className='px-8 py-8'>
        <div className='text-2xl'>Explore</div>
        <div className='mt-6 grid grid-cols-2 gap-3 gap-y-6'>
          <HomePreviewCard/>
          <HomePreviewCard/>
          <HomePreviewCard/>
          <HomePreviewCard/>
        </div>
        <div className='mt-10 py-7 border-t'>
          <div className='flex items-center gap-5'>
            <CategoryOption title='Experieces'/>
            <CategoryOption title='Tech Blogs'/>
            <CategoryOption title='Popular'/>
            <CategoryOption title='New'/>
          </div>
          <div className='mt-8 flex flex-col space-y-8'>
            <HomeCategoryPreviewCard/>
            <HomeCategoryPreviewCard/>
            <HomeCategoryPreviewCard/>
          </div>
        </div>
      </div>
      <div className='border-l px-4 pr-0 py-8'>
        <UserGroup/>
        <div className='mt-6 py-4 border-t'>
          <UserGroup/>
        </div>
        <UserfulResourcesCollection/>
      </div>
    </div>
    </BaseLayout>
  )
}

export default ExploreAppPage
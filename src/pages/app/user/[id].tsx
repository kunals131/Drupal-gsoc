import ProfileOverviewTab from '@/components/UserProfile/Tabs/ProfileOverviewTab';
import { BaseLayout } from '@/components/layouts'
import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineRead } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { TiTabsOutline } from 'react-icons/ti';

interface IProjectTab {
  label: string;
  tab: number;
  activeTab: number;
  setTab: (value: number) => void;
  icon: React.ReactNode
}

const InfoTab = ({ label, tab, activeTab, setTab, icon }: IProjectTab) => {
  const isActive = tab == activeTab;
  return (
    <div onClick={() => setTab(tab)} className={`${isActive ? 'border-b-primary text-primary' : 'hover:text-primary hover:border-b-primary text-gray-600'} cursor-pointer flex items-center gap-3 text-base px-12  py-2 border-b`}>{icon}{label}</div>
  )
}

const UsersPage = () => {
  const [tab, setTab] = useState(0);
  return (
    <BaseLayout>
      <div className='p-8'>
        <div className=''>
          <button className='flex px-4 py-[6px] bg-gray-100 rounded-md items-center gap-2'>
            <AiOutlineArrowLeft />Back
          </button>
        </div>
        <div className='flex items-center mt-8 justify-between'>
          <div className='flex items-center gap-4'>
            <div className='w-[90px] bg-gray-200 h-[90px] rounded-full bg-user-main'></div>
            <div className='flex items-center justify-between'>
              <div className=''>
                <div className='flex items-center gap-20'>
                  <div className='text-xl font-semibold'>Kunal Sangtiani</div>
                  <div className='px-5 py-[4px] font-semibold text-orange-500 border rounded-3xl border-orange-400 text-xs bg-orange-500/20'>Candidate</div>
                </div>
                <div className='text-sm opacity-60'>Student  · GSOC 2023 Candidate</div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-10'>
            <div className='flex cursor-pointer items-center gap-3'>
              <BsBookmark />Save for later
            </div>
            <button className='px-6 hover:bg-black hover:text-white transition-all py-2 border border-gray-400 rounded-3xl'>Message</button>
          </div>
        </div>
        <div className='flex items-end mt-8'>
          <InfoTab icon={<HiOutlineUser />} tab={0} setTab={setTab} activeTab={tab} label='About' />
          <InfoTab icon={<TiTabsOutline />} tab={1} setTab={setTab} activeTab={tab} label='Spaces' />
          <InfoTab icon={<AiOutlineRead />} tab={2} setTab={setTab} activeTab={tab} label='Blogs' />
        </div>
        <div className='mt-8'>
          {tab==0&&<ProfileOverviewTab/>}
        </div>
      </div>
    </BaseLayout>
  )
}

export default UsersPage
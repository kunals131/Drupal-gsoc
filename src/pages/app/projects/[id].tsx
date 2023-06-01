import ProjectExperiencesTab from '@/components/Project/Tabs/ProjectExperiencesTab';
import ProjectMentorsTab from '@/components/Project/Tabs/ProjectMentorsTab';
import ProjectOverviewTab from '@/components/Project/Tabs/ProjectOverviewTab';
import ProjectSimilarPreviousTab from '@/components/Project/Tabs/ProjectSimilarPreviousTab';
import { BaseLayout } from '@/components/layouts'
import React, {useState} from 'react'


interface IProjectTab {
  label: string;
  tab : number;
  activeTab: number;
  setTab : (value: number)=>void;
}

const ProjectTab = ({ label, tab,activeTab,setTab }: IProjectTab) => {
  const isActive = tab == activeTab;
  return (
    <div onClick={()=>setTab(tab)} className={`${isActive ? 'border-b-primary text-primary' : 'hover:text-primary hover:border-b-primary text-gray-600'} cursor-pointer text-sm px-8  py-2 border-b`}>{label}</div>
  )
}

const ProjectPage = () => {
  const [tab,setTab] = useState(0);
  return (
    <BaseLayout>
      <div className='p-8 grid grid-cols-[1fr_0.3fr] gap-8'>
        <div className='w-full'>
          <div className='w-fit px-3 py-2 text-sm bg-primary/20 text-primary font-semibold rounded-3xl'>GSOC 2023</div>
          <div className='text-2xl mt-3 font-semibold'>Implement CAT functionality for Drupal translations</div>
          <div className='text-sm opacity-40 mt-2'>Last updated 3d ago</div>
          <div className='flex items-center gap-5 mt-6'>
            <button className='primary px-6 py-2 bg-primary text-white rounded-md'>Start Contributing</button>
            <button className='primary px-6 py-2 border  text-gray-600 rounded-md'>Save for later</button>
          </div>
          <div className='flex items-end mt-8'>
            <ProjectTab tab={0} setTab={setTab} activeTab={tab} label='Overview'  />
            <ProjectTab tab={1} setTab={setTab} activeTab={tab} label='Mentors'/>
            <ProjectTab tab={2} setTab={setTab} activeTab={tab} label='Experiences' />
            <ProjectTab tab={3} setTab={setTab} activeTab={tab} label='Similar Previous Projects' />
          </div>
          {tab===0&&<ProjectOverviewTab/>}
          {tab===1&&<ProjectMentorsTab/>}
          {tab===2&&<ProjectExperiencesTab/>}
          {tab===3&&<ProjectSimilarPreviousTab/>}
        </div>
        <div className=''>
          <div className='pb-2 border-b-black/25 border-b text-lg'>Project Resources</div>
          <div className='mt-4 text-sm opacity-40'>No Resources Found!</div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default ProjectPage
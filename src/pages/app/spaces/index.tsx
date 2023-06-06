import SpaceTableCard from '@/components/Spaces/SpaceTableCard';
import { BaseLayout } from '@/components/layouts'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';


interface ISpaceTabProps {
    label: string;
    count: number;
    tab: number;
    setTab: (value: number) => void;
    activeTab: number;

}

const SpacesTab = ({ label, count, tab, setTab, activeTab }: ISpaceTabProps) => {
    const isActive = activeTab == tab;
    return (
        <div className='flex items-center gap-2 relative py-2 px-6'>
            {isActive && <div className='absolute bottom-0 left-0 bg-primary h-[2px] w-full'></div>}
            <div className={`text-sm font-semibold cursor-pointer ${activeTab === tab ? 'text-black' : 'text-gray-500'}`} onClick={() => setTab(tab)}>{label}</div>
            <div className='p-1 bg-gray-200 rounded-lg text-sm px-2'>{count}</div>
        </div>
    )
}

const Spaces = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <BaseLayout>
        <div className='z-[100] absolute bg-white '></div>
            <div className='p-8'>
                <div className='text-3xl font-semibold'>My Spaces</div>
                <div className='mt-2 opacity-60'>You{"'"}ll find all the project{"'"}s spaces you are contributing to here.</div>
                <div className='mt-6 border-b flex items-center justify-between'>
                    <div className='flex items-center'>
                        <SpacesTab tab={0} activeTab={activeTab} setTab={setActiveTab} label='Active Spaces' count={0} />
                        <SpacesTab tab={1} activeTab={activeTab} setTab={setActiveTab} label='Inactive Spaces' count={0} />
                    </div>
                    <div className='flex items-center gap-7'>
                        <select>
                            <option>All</option>
                            <option>One</option>
                        </select>
                        <RiSearchLine className='text-xl' />
                        <button className='flex items-center gap-3 px-8 py-[6px] bg-primary text-white rounded-md'>
                            + New
                        </button>
                    </div>
                </div>
                <div className='border rounded-md mt-10'>
                    <table className="table-auto w-full">
                        <thead className=' border-b  '>
                            <tr className='px-3'>
                                <th className='uppercase text-sm font-semibold px-3 !text-left py-4'>Space</th>
                                <th className='uppercase text-sm font-semibold  !text-left py-4'>Project</th>
                                <th className='uppercase text-sm font-semibold  !text-left py-4'>Contributors</th>
                                <th className='uppercase text-sm font-semibold  !text-left py-4'>Duration</th>
                                <th className='uppercase text-sm font-semibold  !text-left py-4'>Last updated</th>
                            </tr>
                        </thead>
                        <tbody>
                          <SpaceTableCard/>
                        </tbody>
                    </table>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Spaces
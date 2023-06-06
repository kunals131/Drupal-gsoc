import { BaseLayout } from '@/components/layouts'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineLink, AiOutlineMail, AiOutlinePlusCircle, AiOutlineUserAdd } from 'react-icons/ai';
import { BsChatLeftText, BsGithub, BsLinkedin } from 'react-icons/bs';
import { TbDiscountCheck, TbPhoneCall } from 'react-icons/tb';
import { HiOutlineInboxArrowDown } from 'react-icons/hi2';
import { CiShare1 } from 'react-icons/ci';

const ChatCard = () => {
    return (
        <div className='w-full bg-white hover:bg-primary transition-all p-2 cursor-pointer group rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='h-[10px] rounded-full group-hover:bg-green-200 w-[10px] bg-green-500/50'></div>
                <div className='text-xs opacity-70 group-hover:text-white'>12:45am</div>
            </div>
            <div className='flex mt-1 items-center gap-2'>
                <div className='w-[50px] border-4 border-transparent group-hover:border-white test-user-image h-[50px] rounded-full shrink-0'></div>
                <div className=''>
                    <div className='text-sm font-semibold group-hover:text-white'>Kunal Sangtiani</div>
                    <div className='text-xs opacity-40 group-hover:text-white'>Lorem Lorem, ipsum dolor. ipsum dolor sit amet...</div>
                </div>
            </div>
        </div>
    )
}

const GeneralChat = () => {
    return (
        <BaseLayout>
            <div className='grid min-h-[90vh] grid-cols-[1.7fr_4fr_1.7fr]'>
                <div className='border-r w-full'>
                    <div className='flex p-4 items-center justify-between'>
                        <div className="font-semibold">General Inbox</div>
                        <div className='flex items-center gap-3'>
                            <RiSearchLine />
                            <AiOutlinePlusCircle />
                        </div>
                    </div>
                    <div className='mt-2 p-4 pt-0 flex items-center gap-4'>
                        <div className='flex text-sm transition-all hover:opacity-100 cursor-pointer items-center gap-2'>
                            <BsChatLeftText />Active
                        </div>
                        <div className='flex opacity-80 transition-all hover:opacity-100 cursor-pointer text-sm items-center gap-2'>
                            <TbDiscountCheck />Important
                        </div>
                    </div>
                    <div className='p-3 h-auto bg-primary/10 space-y-3'>
                        <ChatCard />
                        <ChatCard />
                        <ChatCard />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='py-3 w-full px-5 border-b flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <div className='h-[45px] rounded-full test-user-image w-[45px]'></div>
                            <div className='text-gray-500 '>Conversaion with <span className='font-bold text-black ml-1'>Kunal Sangtiani</span></div>
                        </div>
                        <div className='flex text-xl items-center gap-6'>
                            <RiSearchLine className='opacity-70 cursor-pointer hover:opacity-100 transition-all' />
                            <HiOutlineInboxArrowDown className='opacity-70 cursor-pointer hover:opacity-100 transition-all' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center p-5 py-7 border-l  flex-col'>
                    <div className='h-[90px] rouded-full test-user-image rounded-full w-[90px]'></div>
                    <div className='mt-2 font-bold text-lg'>Kunal Sangtiani</div>
                    <div className='opacity-60 text-sm'>ksangtiani13@gmail.com</div>
                    <div className='flex mt-5 items-center  w-full px-6 text-lg justify-between'>
                        <AiOutlineMail />
                        <TbPhoneCall />
                        <AiOutlineUserAdd />
                        <AiOutlineLink />
                        <CiShare1 />
                    </div>
                    <div className='mt-8 w-full text-left'>
                        <div className='text-base font-bold '>Profile Summary</div>
                        <div className='text-sm mt-1 opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestias rem recusandae corporis incidunt eveniet aliquid aliquam ratione impedit ut corrupti inventore. m iusto id veritatis, totam mollitia rerum corrupti quasi laborum nulla...</div>
                    </div>
                    <div className='mt-5 w-full'>
                        <div className='text-base font-bold'>Linkedin</div>
                        <div className='flex text-sm mt-1 items-center gap-3 text-blue-500'>
                            <BsLinkedin size={18} /> <div className='text-blue-500 border-b border-b-blue-600 pb-[2px]'>linkedin.com/in/kunal-sangtiani</div>
                        </div>
                    </div>
                    <div className='mt-5 w-full'>
                        <div className='text-base font-bold'>Github</div>
                        <div className='flex mt-1 text-sm items-center gap-3 text-black'>
                            <BsGithub size={18} /> <div className=' border-b border-b-black pb-[2px]'>github.com/kunal-sangtiani</div>
                        </div>
                    </div>
                   <div className='mt-8 space-y-2 w-full'>
                    <button className='w-full py-[6px] rounded-md bg-primary text-white'>Complete Profile</button>
                    <button className='w-full py-[6px] rounded-md border text-gray-500 '>Save for later</button>
                   </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default GeneralChat
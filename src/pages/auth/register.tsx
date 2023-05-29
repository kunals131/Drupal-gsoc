import AuthInput from '@/components/common/Input'
import { ColoredLogoPNG } from '@/utils/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const RegisterPage = () => {
    const [registerStep,setRegisterStep] = useState(2);
    return (
        <div className='px-32 py-10'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap'>
                    <div className='w-[50px]'><Image src={ColoredLogoPNG} alt='drupal-logo' /></div>
                    <div className='text-2xl font-bold text-primary'>Droopler</div>
                </div>
            </div>
            <div className={`${registerStep==1?'mt-24':'mt-16'} px-8 w-[550px] `}>
                {registerStep == 1?<>
                <div className='text-3xl font-semibold'>Get Started</div>
                <div className='mt-1 opacity-70'>Enter your details to create your account</div>
                <div className='mt-8 space-y-5'>
                    <AuthInput label='Full Name' placeholder='test@gmail.com' />
                    <AuthInput label='Email' placeholder='Enter password' />
                    <div className='grid grid-cols-2 gap-5'>
                        <AuthInput label='Password' placeholder='test@gmail.com' />
                        <AuthInput label='Confirm Password' placeholder='Enter password' />
                    </div>
                </div>
                <div className='mt-5'>
                    <button className='bg-primary text-white rounded-md py-3 w-full'>Continue</button>
                </div>
                <div className='mt-5 text-center text-gray-600'>Already have an account? <span className='text-primary underline cursor-pointer'>Login Here</span></div>
                </>:<>
                <div className='text-2xl font-semibold'>Candidate Information</div>
                <div className='text-xs text-gray-600'>Enter your details to create your account</div>
                <div className='mt-8 flex items-center gap-6'>
                    <div className='w-[80px] h-[80px] bg-gray-300 rounded-full'></div>
                    <button className='border border-primary text-primary rounded-sm text-sm px-4 py-1'>Add profile image</button>
                </div>
                <div className='mt-8 space-y-6'>
                    <AuthInput isTextArea label='Summary' textAreaProps={{
                        rows : 5,
                        placeholder : "Enter a max. 200 words bio.."
                    }}/>
                    <AuthInput label='Linkedin URL' placeholder='https://linkedin/in..'/>
                    <AuthInput label='Drupal Profile URL' placeholder='https://durpal/in..'/>
                    <AuthInput label='Github URL' placeholder='https://github.com/..'/>
                    <AuthInput label='Portfolio URL' placeholder='https://github.com/..'/>
                </div>
                <div className='mt-6'>
                    <label className='font-semibold'>Resume</label>
                    <div className='mt-2 border-dashed border opacity-60 hover:opacity-100 transition-all cursor-pointer border-gray-500 rounded-md flex items-center justify-center py-4'>
                        Drop or click to upload the resume
                    </div>
                </div>
                <div className='mt-10 flex items-center gap-5 justify-end'>
                    <button className='bg-gray-400 rounded-sm text-white px-5 py-2'>Skip</button>
                    <button className='bg-primary rounded-sm text-white px-5 py-2'>Create profile</button>
                </div>
                </>}
            </div>
        </div>
    )
}
export default RegisterPage
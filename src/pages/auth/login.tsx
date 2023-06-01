import AuthInput from '@/components/common/Input'
import { ColoredLogoPNG } from '@/utils/assets'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='px-32 py-10'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap'>
          <div className='w-[50px]'><Image src={ColoredLogoPNG} alt='drupal-logo' /></div>
          <div className='text-2xl font-bold text-primary'>Droopler</div>
        </div>
      </div>
      <div className='px-8 w-[550px] mt-24'>
        <div className='text-3xl font-semibold'>Login</div>
        <div className='mt-1 opacity-70'>Login to access your account, projects and much more!</div>
        <div className='mt-8 space-y-5'>
        <AuthInput label='Email' placeholder='test@gmail.com' />
        <AuthInput label='Password' placeholder='Enter password' />
        </div>
        <div className='mt-5'>
          <button className='bg-primary text-white rounded-md py-3 w-full'>Continue</button>
        </div>
        <div className='mt-5 text-center text-gray-600'>Don{"'"}t have an account? <span className='text-primary underline cursor-pointer'>Register Here</span></div>
      </div>  
    </div>
  )
}

export default LoginPage
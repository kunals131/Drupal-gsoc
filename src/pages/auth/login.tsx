import AuthInput from '@/components/common/Input'
import { useLogin } from '@/hooks/services/auth/useLogin'
import { ColoredLogoPNG } from '@/utils/assets'
import Image from 'next/image'
import React, { useState, ChangeEvent } from 'react'

const LoginPage = () => {
  const { callLogin, error, isError, isLoading } = useLogin({});
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  const handleLogin = () => {
    const { username, password } = loginForm;
    if (!username || !password) return alert('Enter credentails');
    callLogin({
      password,
      username
    })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
          <AuthInput onChange={handleChange} label='Username' name='username' value={loginForm.username} placeholder='test@gmail.com' />
          <AuthInput onChange={handleChange} name='password' type='password' value={loginForm.password} label='Password' placeholder='Enter password' />
        </div>
        <div className='mt-5'>
          <button onClick={handleLogin} disabled={isLoading} className='bg-primary text-white rounded-md py-3 w-full'>{isLoading ? 'Loading..' : 'Continue'}</button>
        </div>
        <div className='mt-5 text-center text-gray-600'>Don{"'"}t have an account? <span className='text-primary underline cursor-pointer'>Register Here</span></div>
      </div>
    </div>
  )
}

export default LoginPage
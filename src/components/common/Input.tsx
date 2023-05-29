import React from 'react'

interface IAuthInputProps {
  label:string;
  error?:string;
  isTextArea ?: boolean
  textAreaProps ?: React.HTMLProps<HTMLTextAreaElement>;
  helperText ?: string
}

const AuthInput = ({label,error,isTextArea,textAreaProps,helperText,...props}:IAuthInputProps&React.HTMLProps<HTMLInputElement>) => {
  return (
    <div className='w-full'>
      <div className='text-base font-semibold'>{label}</div>
     {isTextArea?<textarea {...textAreaProps} className='py-2 mt-2 w-full px-3 border rounded-sm'></textarea>:<input {...props} className='py-2 mt-2 w-full px-3 border rounded-sm'/>}
      {(error || helperText)&&<div className='text-sm font-semibold italic'>{error || helperText}</div>}
    </div>
  )
}

export default AuthInput
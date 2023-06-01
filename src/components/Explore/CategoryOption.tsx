import React from 'react'

interface ICategoryOption { 
    title : string;
}

const CategoryOption = ({title}:ICategoryOption) => {
  return (
    <div className='px-6 py-2 cursor-pointer font-[500] border-black/20 hover:bg-black hover:text-white transition-all rounded-3xl border'>
        {title}
    </div>
  )
}

export default CategoryOption
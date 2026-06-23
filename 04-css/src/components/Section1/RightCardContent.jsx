import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
            <h2 className='w-8 h-8 rounded-full font-medium bg-gray-200 flex justify-center items-center'>
                {props.id+1}</h2>
            <div>
                <p className='mb-10 text-base text-left text-gray-200 justify-center'>
                    {props.intro}
                </p>

                <div className='flex justify-between'>
                    <button className='text-white text-sm font-medium bg-blue-600 rounded-full px-4 py-1'>{props.tag}</button>
                    <button className='text-white text-sm font-medium bg-blue-600 rounded-full px-2 py-1'> <i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
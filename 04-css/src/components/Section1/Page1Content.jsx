import React from 'react'
import LeftTextContent from './LeftTextContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
    return (
        <div className='pb-12 pt-6 flex items-center justify-betweenpy-4 px-18 py-8 gap-10 h-[90vh]'>
            <LeftTextContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Page1Content
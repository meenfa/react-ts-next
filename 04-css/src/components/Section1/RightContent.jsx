import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-2 flex flex-nowrap gap-4'>
      {/* <RightCard users={props.users}/> */}
      {/* <RightCard />
      <RightCard /> */}

       {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} intro={elem.intro} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
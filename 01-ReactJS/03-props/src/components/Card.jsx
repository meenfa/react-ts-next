import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = ({ props }) => {
    return (
      <div className="card">
      <div>
          <div className="top">
          <img src={props.logo} alt="" />
          <button>Save<Bookmark size={10}/></button>
        </div>
        <div className="center">
          <h3>{props.companyName}  <span>{props.timeAgo}</span></h3>
          <h2>{props.role} </h2>

          <div className='tag'>
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
      </div>

        <div className="bottom">
          <div className='pay'>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>


  )
}


export default Card
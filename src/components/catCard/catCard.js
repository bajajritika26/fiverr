import React from 'react'
import "./CatCard.css"
import { Link } from 'react-router-dom'
const CatCard = ({ card }) => {
  return (
    <Link to="/gigs?cat=design">

    <div className='catCard'>
      <img src={card.img} alt=''/>
<span className='catCardDesc'>{card.desc}</span>
<span className='catCardTitle'>{card.title}</span>

    </div>

    </Link>
  )
}

export default CatCard;

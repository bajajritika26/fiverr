import React from 'react'
import "./GigCard.css";
import { Link } from "react-router-dom"
import Star from "../../img/star.png"
import Heart from "../../img/heart.png"

const GigCard = ({ gig }) => {
    return (
        <Link to="/gig/123" className='link'>
            <div className='gigCard'>
                <img src={gig.img} alt='' />
                <div className='gigCardInfo'>
                    <div className='gigCardUser'>
                        <img src={gig.pp} alt='' />
                        <span>{gig.username}</span>
                    </div>
                    <p>{gig.desc}</p>
                    <div className='star'>
                        <img src={Star} alt='' />
                        <span>{gig.star}</span>
                    </div>
                </div>
                <hr />
                <div className='gigCardDetails'>
                    <img src={Heart} alt='' />
                    <div className='gigCardPrice'>
                        <span>STARTING AT</span>
                        <h2>${gig.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard;

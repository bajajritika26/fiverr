import React, { useState } from 'react'
import "./Gigs.css";
import GigCard from '../../components/gigCard/GigCard';
import Down from "../../img/down.png"
import { gigs } from '../../data';
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  return (
    <>
      <div className='gigs'>
        <div className='gigsContainer'>
          <span className='gigsHead'>FIVERR > GRAPHICS & DESIGN > </span>
          <h1>AI Artists</h1>
          <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
          <div className='gigsMenu'>
            <div className='gigsLeft'>
              <span>Budged</span>
              <input placeholder='min' type='text' />
              <input placeholder='max' type='text' />

              <button>Apply</button>
            </div>
            <div className='gigsRight'>
              <span className='sortBy'>Sort By</span>
              <span className='sortType' >{sort === "sales" ? "Best Selling" : "Newest"} </span>
              <img src={Down} alt='' onClick={() => setOpen(!open)} />
              {open && <div className='rightMenu'>
                {sort === "sales" ? <span onClick={() => reSort("createdAt")}>Newest</span>
                  : <span onClick={() => reSort("sales")}>Best Selling</span>}

              </div>}
            </div>

          </div>

        </div>
      </div>
      <div className='gigsCards'>
        <div className='gigsCardsContainer'>

          {gigs.map((gig) => (

            <GigCard gig={gig} key={gig.id} />

          ))}
        </div>
      </div>
    </>
  )
}

export default Gigs

import React from 'react'
import "./Featured.css";
import Man from "../../img/man.png"
import Search from "../../img/search.png"
const Featured = () => {
    return (
        <div className='featured'>
            <div className='container'>
                <div className='featuredLeft'>
                    <h1>Find the perfect <i>freelance</i> services for your business</h1>
                    <div className='search'>
                        <div className='searchInput'>
                            <img src={Search} alt='' />
                            <input type='text' placeholder='Try "building mobile app"' />
                        </div>
                        <button className='searchButton'>Search</button>
                    </div>
                    <div className='popular'>
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className='featuredRight'>
                    <img src={Man} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Featured;

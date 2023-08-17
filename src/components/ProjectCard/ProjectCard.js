import React from 'react'
import "./ProjectCard.css"
import { Link } from 'react-router-dom'
const ProjectCard = ({ project }) => {
  return (
    <Link to="/gigs?cat=design" className='link'>

    <div className='projectCard'>
      <img className='projectUserImg'  src={project.img} alt=''/>
<div className='projectInfo'>
  <img src={project.pp} alt=''/>
  <div className='projectTexts'>
    <span>{project.cat}</span>
    <span>{project.username}</span>

  </div>
</div>

    </div>

{/* <div className='catCard'>
      <img src="" alt=''/>
<span className='desc'>dexc</span>
<span className='title'>username</span>

    </div> */}
    </Link>
  )
}

export default ProjectCard;

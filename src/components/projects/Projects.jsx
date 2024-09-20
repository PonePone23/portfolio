import React from 'react'
import movie from '../../assets/movie-review.png'
import Graduate from '../../assets/Graduate.png'
import "./projects.css"
const Projects = () => {
  return (
    <>
    <section id="#projects">
       <h5>My Recent Projects</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={movie} alt="" />
            </div>
            <h3>Movie Review App</h3>
            <a href="https://github.com/PonePone23/movie-review-app" className='btn'>Github</a>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Graduate} alt="" />
            </div>
            <h3>Graduate Admission Prediction</h3>
            <a href="https://github.com/PonePone23/graduate-admission-prediction" className='btn'>Github</a>
        </article>
       </div>
    </section>
    </>
  )
}

export default Projects

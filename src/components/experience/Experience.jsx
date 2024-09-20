import React from 'react'
import "./experience.css"
import { FaRegStar } from "react-icons/fa";

const Experience = () => {
  return (
   <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      {/* front end */}
      <div className="experience__frontend">
        <h3>Fronted Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <FaRegStar/>
            <h4>HTML</h4>
          </article>
          <article className='experience__details'>
            <FaRegStar/>
            <h4>CSS</h4>
          </article>
          <article className='experience__details'>
            <FaRegStar/>
            <h4>Bootstrap</h4>
          </article>
          <article className='experience__details'>
            <FaRegStar/>
            <h4>React</h4>
          </article>
        </div>
      </div>
      {/* back end */}
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <FaRegStar/>
            <h4>PHP</h4>
          </article>
          <article className='experience__details'>
            <FaRegStar/>
            <h4>MySQL</h4>
          </article>
          <article className='experience__details'>
            <FaRegStar/>
            <h4>Python</h4>
          </article>
          <article className='experience__details'>
            <FaRegStar/>
            <h4>Ruby On Rails</h4>
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Experience
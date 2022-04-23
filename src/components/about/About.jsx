import React from 'react'
import './about.css'
import ME from '../../assets/grad-transformed.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">

          <p>
          I'm currently a student at New York University College of Arts and Sciences majoring in Computer Science with a minor in Data Science. 
          I have experience working with Java in Java, JavaScript and Python. I am currently seeking opportunities in Software Development and Data Science
          to further my knowledge and interests. When I'm not at my desk I love reading, working out, and playing tennis. 
           
          </p>


        </div>
      </div>
    </section>
  )
}

export default About
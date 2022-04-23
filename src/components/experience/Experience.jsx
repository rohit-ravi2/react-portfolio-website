import React from 'react'
import './experience.css'
import {FaJava, FaPython, FaJs, FaLinux, FaGit, FaReact, FaHtml5, FaCss3} from 'react-icons/fa'
import {SiNumpy, SiScikitlearn, SiPandas, SiScipy, SiJquery, SiBootstrap, SiEclipseide, SiVisualstudiocode} from 'react-icons/si'
import {BsPatchCheckFill} from 'react-icons/bs'
// DiMysql
// SiMongoDb, SiNumpy, SiScikitlearn, SiPandas, SiScipy
// FaReact, 

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      
      <div className="container experience__container">



        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaJs className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
              </div>
            </article>
          </div>
          <h3>Data Science Technologies</h3>

          <div className="experience__content">
            <div className="experience__content">
            <article className='experience__details'>
              <SiNumpy className='experience__details-icon' />
              <div>
                <h4>NumPy</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiScikitlearn className='experience__details-icon' />
              <div>
                <h4>SciKit</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiPandas className='experience__details-icon' />
              <div>
                <h4>Pandas</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiScipy className='experience__details-icon' />
              <div>
                <h4>SciPy</h4>
              </div>
            </article>
          </div>
      

          </div>
          <h3>Web Technologies</h3>
          <div className="experience__content">
            <div className="experience__content">
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>ReactJs</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJquery className='experience__details-icon' />
              <div>
                <h4>JQuery</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
          
          </div>
          <h3>Other Tools</h3>
          <div className="experience__content">
            <div className="experience__content">
            <article className='experience__details'>
            <FaLinux className='experience__details-icon' />
              <div>
                <h4>Linux</h4>
              </div>
            </article>
            <article className='experience__details'>
            <FaGit className='experience__details-icon' />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
            <SiEclipseide className='experience__details-icon' />
              <div>
                <h4>Eclipse</h4>
              </div>
            </article>
            <article className='experience__details'>
            <SiVisualstudiocode className='experience__details-icon' />
              <div>
                <h4>VSCode</h4>
              </div>
            </article>
          </div>
          
      

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
import React from 'react'
import './header.css'
import ME from '../../assets/avatar.png'
import Typewriter from 'typewriter-effect'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaEnvelope} from 'react-icons/fa'
import{MdAssignment} from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <div className="container header__container">


        <h1>Hey, I'm Rohit!</h1>
        <Typewriter className="text-light"
          onInit={(typewriter) =>{
            typewriter.changeDelay(50).typeString("I'm a student at NYU with a passion for learning").start();
            
          }
          }
        />
        <div className="container socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin className="social_icons" size="2em"/></a>
        <a href="https://github.com" target="_blank"><FaGithub className="social_icons" size="2em"/></a>
        <a href="mailto:rohit.ravi2@gmail.com" target="_blank"><FaEnvelope className="social_icons" size="2em"/></a>
        <a href="../../assets/resume.pdf" target="_blank"><MdAssignment className="social_icons" size="2em"/></a>
        </div>



        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header

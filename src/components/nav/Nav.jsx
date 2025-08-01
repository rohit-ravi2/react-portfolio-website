import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <nav>
      <Link to="/"         className={pathname === '/' ?        'active' : ''}><AiOutlineHome/></Link>
      <Link to="/about"    className={pathname === '/about' ?   'active' : ''}><AiOutlineUser/></Link>
      <Link to="/projects" className={pathname === '/projects'?'active' : ''}><BiBook/></Link>
      <Link to="/writing"  className={pathname === '/writing'? 'active' : ''}><RiServiceLine/></Link>
      <Link to="/contact"  className={pathname === '/contact'? 'active' : ''}><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav

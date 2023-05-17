import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const { dark, language } = useSelector(state => state.site)

  return (
    <div>
      <h1>Header</h1>
      <nav>
        <NavLink to='/' exact={true} className='me-3' activeClassName='active'>Home</NavLink>
        <NavLink to='/about' exact={true} className='me-3' activeClassName='active'>About</NavLink>
        <NavLink to='/profile' exact={true} className='me-3' activeClassName='active'>Profile</NavLink>
      </nav>
      <div>
        <h2>
            Dark Mode = {dark ? 'Yes' : 'No'}
        </h2>
        <h2>
            Current language = {language}
        </h2>
      </div>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode, setLanguage } from '../stores/site'
import { logout } from '../stores/auth'

export default function Footer() {

    const {user} = useSelector(state => state.auth)

    const { dark, language } = useSelector(state => state.site)
    const dispatch = useDispatch()
    const languages = ['en', 'tr', 'de', 'pl', 'fr']

    const handleLanguage = lang => {
        dispatch(setLanguage(lang))
    }

  return (
    <div>
      <h1>Footer</h1>
      <div className='mb-3'>
        <h2>
            {languages.map((lang, index) => (
                <button onClick={() => handleLanguage(lang)} key={index} type="button" className={lang === language ? 'btn btn-success me-2' : 'btn btn-primary me-2'}>{lang}</button>
            ))}
        </h2>
      </div>
    <div className="form-check form-switch" style={{cursor: 'pointer'}}>
        <input onClick={() => dispatch(setDarkMode())} className="form-check-input" type="checkbox" role="switch" id="theme"></input>
        <label className="form-check-label" htmlFor='theme'>{dark ? 'Switch Light mode' : 'Switch Dark mode'}</label>
    </div>
    {
        user && <button onClick={() => dispatch(logout())} className={dark ? 'btn btn-light mt-5' : 'btn btn-dark mt-5'} type='button'>Log Out</button>
    }
    </div>
  )
}

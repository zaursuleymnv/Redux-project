import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../stores/auth'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = () => {

    const dummyData = {
      id: 1,
      name: 'Zaur',
      token: '27sjlkj289iiwdsi822'
    }

    localStorage.setItem('auth', dummyData)
    dispatch(login(dummyData))
    navigate('/')

  }

  return (
    <div className='m-4 ms-0' style={{background: 'lightblue'}}>
      <h3>Log In</h3>
      <button onClick={handleLogin} type="button" className="btn btn-dark">Log In</button>
    </div>
  )
}

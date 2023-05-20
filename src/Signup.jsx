import React, { useState } from 'react'
import axios from 'axios'
import { store } from './store'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  return (
    <main className='login__main'>
      <div className="main__login">
        <p className="login__title">Sign Up</p>

        <div className="login__inputs">
          <input type="email" className="email" placeholder='Start typing to dimiss this...' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <input type="password" className="password" placeholder='Start typing to dimiss this...' value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </div>

        <form action="submit" className="signup__form" onSubmit={(e) => {
          e.preventDefault()
          if (email != '' && password != '') {
            axios.post('http://localhost:8001/signup', { email: email, password: password })
              .then(res => {
                setMessage(res.data.message)

                if (res.data.message == 'successful') {
                  window.location.href = '/profile'
                }
              })
          }
          localStorage.setItem('signEmail', email)
        }}>
          <button className="user__login">Sign Up</button>
        </form>
        <a href="/" className="send__to__signup">Already on this platform? Login.</a>
      </div>
      {message == 'User already exist' &&
        <div className="message__main">
          <div className="misc">
            <p className="login__message">User already exists</p>
            <svg aria-label="Close" color="black" fill="black" height="18" role="img" viewBox="0 0 48 48" width="18" className='cross' onClick={() => {
              document.querySelector('.message__main').setAttribute('class', 'message__main__secondary')
              setTimeout(function () {
                setMessage('')
              }, 600)
            }}><title>Close</title><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
          </div>

        </div>
      }
    </main>
  )
}

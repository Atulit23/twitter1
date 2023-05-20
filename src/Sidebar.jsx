import axios from 'axios'
import React, { useState, useEffect } from 'react'
import logout from './logout.png'
import { store } from './store'

export default function Sidebar() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/profile').then((req, res) => {
            setData(req.data)
        })
    }, [data])

    return (
        <>
            <div className="sidebar">
                <a href="/" ><svg viewBox="0 0 24 24" id='twitter__bird' color='white' className="twitter__icons" fill='white' aria-hidden="true" ><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg></a>
                <a href="/"><div className="home">
                    <svg viewBox="0 0 24 24" aria-hidden="true" color='white' fill='white' className="twitter__icons"><g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g></svg>
                    <p>Home</p>
                </div></a>
                <a href="/explore"><div className="explore">
                    <svg viewBox="0 0 24 24" aria-hidden="true" color='white' fill='white' className="twitter__icons" ><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                    <p>Explore</p>
                </div></a>
                <a href="/messages"><div className="messages">
                    <svg viewBox="0 0 24 24" aria-hidden="true" color='white' fill='white' className="twitter__icons" ><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                    <p>Messages</p>
                </div></a>
                <a href="/bookmarks"><div className="bookmarks">
                    <svg viewBox="0 0 24 24" aria-hidden="true" color='white' fill='white' className="twitter__icons"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                    <p>Bookmarks</p>
                </div></a>
                <a href="/profile"><div className="profile">
                    <svg viewBox="0 0 24 24" aria-hidden="true" color='white' fill='white' className="twitter__icons"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                    <p>Profile</p>
                </div></a>
                <button className="logout_" ><div className="logout" onClick={() => {
                    store.dispatch({
                        type: 'ADD_MSG',
                        text: { message: '', email: '', dp: '', name: '', username: '' }
                    })
                    window.location.href = '/'
                }}>
                    <img src={logout} alt="" />
                    <p>Logout</p>
                </div></button>
                <button className="tweet">Tweet</button>
                {
                    data.map((profile, index) => {
                        return (
                            profile.email == store.getState().msgs[0].email && <div className="profile__">
                                <img src={profile.dp} alt="" className="dp__main" />
                                <div className="profile__main__details">
                                    <p className='profile__name'>{profile.name}</p>
                                    <p className="username__main">@{profile.username}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

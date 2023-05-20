import React from 'react'
import axios from 'axios'

export default function Profile() {
    const [name, setName] = React.useState('')
    const [dob, setDOB] = React.useState('')
    const [bio, setBio] = React.useState('')
    var [dp, setDP] = React.useState('')

    return (
        <main className='profile__main'>
            <div className="main__profile">
                <p className="login__title">Profile</p>
                <div className="profile__inputs">
                    <div className="name__div">
                        <p>Name</p>
                        <input type="text" className="name" placeholder='Start typing to dimiss this...' onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </div>
                    <div className="dob__div">
                        <p>Date of Birth</p>
                        <input type="dob" className="dob" placeholder='Start typing to dimiss this...' onChange={(e) => {
                            setDOB(e.target.value)
                        }} />
                    </div>
                    <div className="bio__div">
                        <p>Bio</p>
                        <textarea type="text" className="bio" placeholder='Start typing to dimiss this...' onChange={(e) => {
                            setBio(e.target.value)
                        }} />
                    </div>
                    <div className="dp__div">
                        <p>Profile pic</p>
                        <input type="file" accept="image/*" className="name" onChange={async (e) => {
                            const url = e.target.files[0];
                            const formData = new FormData();
                            formData.append('file', e.target.files[0]);
                            formData.append('upload_preset', 'nb6tvi1b');

                            axios
                                .post(
                                    'https://api.cloudinary.com/v1_1/ddvajyjou/image/upload',
                                    formData
                                )
                                .then(async response => {
                                    dp = response.data.secure_url;
                                    console.log(dp)
                                });
                            // console.log(dp)
                        }} />
                    </div>
                </div>
                <button className="user__login" onClick={async () => {
                    if (dp != '') {
                        axios.post('http://localhost:8001/profile', { name: name, dob: dob, bio: bio, dp: dp, username: name.replace(' ', '_'), email: localStorage.getItem('signEmail') })
                        console.log(dp)
                        window.location.href = '/'
                    }
                }}>Submit</button>
            </div>
        </main>
    )
}

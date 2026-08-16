import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)//receiving values from context
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile
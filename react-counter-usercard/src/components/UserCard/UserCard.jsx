import React from 'react'
import { useState } from 'react'

const UserCard = ({user}) => {
    const [showEmail, setShowEmail] = useState(false);
    const buttonHandler = () => {
        setShowEmail((prev => !prev))
    }
  return (
    <div style = {{
        border: "1px solid #ccc",
        padding:"20px",
        borderRadius: "8px",
        textAlign: "center"
    }}>
        <img src={user.picture.large} alt={user.name.first}  style = {{borderRadius: "75px", border: "1px solid #000"}}/>
        <h1> {user.name.first}</h1>
        {showEmail === true ? <p>{user.email}</p> : <p></p>}
        
        <button onClick={buttonHandler}>{showEmail ?  "Hide Email" : "Show Email"}</button>
    </div>
  )
}

export default UserCard

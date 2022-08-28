import React from "react";

const LogIn = ({ onPasswordChange, onUsernameChange })=>{
    return (
        <>
            <input type="text"
                id="username" 
                name="username" 
                onChange={onUsernameChange} 
                placeholder="User Name" 
            />
            <input type="password"
                id="password" 
                name="password"
                onChange={onPasswordChange} 
                placeholder="Password"
            />
        </>
    );
}

export default LogIn;
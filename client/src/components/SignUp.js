import React from "react";

const SignUp = ({onNameChange, onPasswordChange, onUsernameChange})=>{
    return (
        <>
            <input type="text"
                id="name" 
                name="name" 
                onChange={onNameChange} 
                placeholder="Name" 
            />
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

export default SignUp;
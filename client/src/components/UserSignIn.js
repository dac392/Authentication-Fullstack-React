import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const UserLogIn = ()=>{

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const onNameChange = (e)=> setName(e.target.value);
  const onUsernameChange = (e)=> setUsername(e.target.value);
  const onPasswordChange = (e)=> setPassword(e.target.value);

  const submit = () => {
    e.preventDefault();
    const val = { name, username, password }; // something like this i think
  }
  
  const cancel = () => {
    e.preventDefault();
  }

  return (
    <div className='bounds'>
      <div className='grid-33 centered signin'>
        <h1>Sign up</h1>
        <Form 
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText={"Sign Up"}
          elements={ () => ( 
            <LogIn 
              onNameChange={onNameChange}
              onUsernameChange={onUsernameChange}
              onPasswordChange={onPasswordChange}
            />
          ) }
        />
        <p>
          Already have a user account? <Link to="/signin">Click here</Link> to sign in!
        </p>
      </div>
    </div>
  );
}

export default UserLogIn;

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';
import SignUp from './SignUp';

const UserSignUp = ()=>{

  const navigate = useNavigate();

  const { data, actions } = useContext(Context);
  const [flag, setFlag] = useState(100);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const onNameChange = (e)=> setName(e.target.value);
  const onUsernameChange = (e)=> setUsername(e.target.value);
  const onPasswordChange = (e)=> setPassword(e.target.value);

  useEffect(()=>{
    console.log(`Abort flag: ${flag}`);
    if(flag === 300){
      navigate('/');
    }else if(flag === 400){
      navigate('/error')
    }
  }, [flag]);

  const submit = () => {
    const user = { name, username, password }; // something like this i think
    data.createUser(user)
      .then( errors => {
        if(errors.length) {
          setErrors( { errors } );
        } else {
          actions.logIn(username, password)
            .then(()=>navigate('/authenticated'))
            .catch( err => {
              console.log(err);
              setFlag(400)
            });
          console.log(`${username} is successfully signed up and authenticated!`);
        } 
      })
      .catch( err => {
        console.log(err);
        setFlag(400)
      });
  }
  
  const cancel = () => {
    setFlag(300)
  }

  return (
    <div className='bounds'>
      <div className='grid-33 centered signin'>
        <h1>Sign Up</h1>
        <Form 
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText={"Sign Up"}
          elements={ () => ( 
            <SignUp 
              onNameChange={onNameChange}
              onUsernameChange={onUsernameChange}
              onPasswordChange={onPasswordChange}
            />
          ) }
        />
        <p>
          Already have a user account? <Link to="/login">Click here</Link> to sign in!
        </p>
      </div>
    </div>
  );
}

export default UserSignUp;

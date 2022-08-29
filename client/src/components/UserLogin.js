import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';
import LogIn from './LogIn';

const NEUTRAL = 100;
const SUCCESS = 200;
const REDIRECT = 300
const FAILURE = 400;


const UserLogIn = ()=>{

  const navigate = useNavigate();
  const location = useLocation();

  const { actions } = useContext(Context);
  const [flag, setFlag] = useState(NEUTRAL);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const onUsernameChange = (e)=> setUsername(e.target.value);
  const onPasswordChange = (e)=> setPassword(e.target.value);
  
  useEffect(()=>{
    if(flag === SUCCESS){
      if(location.state && location.state.from){
        navigate(location.state.from);
      }else{
        navigate('/authenticated');
      }
    } else if(flag === REDIRECT){
      navigate('/');
    }else if(flag === FAILURE){
      navigate('/error');
    }
  },[flag]);

  const submit = () => {
    actions.logIn(username, password)
      .then( user=>{
        if ( user===null ){
          setErrors(['Sign-in was unsuccessful']);
        } else {
          setFlag(SUCCESS);
          console.log(`SUCCESS! ${username} is now signed in!`);
        }
      })
      .catch( err=>{
        console.log(err);
        setFlag(FAILURE);
      });
  
  }
  
  const cancel = (e) => {
    setFlag(REDIRECT);
  }

  return (
    <div className='bounds'>
      <div className='grid-33 centered signin'>
        <h1>Log In</h1>
        <Form 
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText={"Log In"}
          elements={ () => ( 
            <LogIn
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

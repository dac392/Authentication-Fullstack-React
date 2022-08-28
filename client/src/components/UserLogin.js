import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const LogIn = ()=>{

  // const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const onNameChange = (e)=> setName(e.target.value);
  const onUsernameChange = (e)=> setUsername(e.target.value);
  const onPasswordChange = (e)=> setPassword(e.target.value);

  const submit = () => {
    e.preventDefault();
  
  }
  
  const cancel = () => {
    e.preventDefault();
  }

  return (
    <div className='bounds'>
      <div className='grid-33 centered signin'>
        <h1>Log In</h1>
        <Form 
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText={"Sign Up"}
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

export default class UserLogIn extends Component {
  state = {
    username: '',
    password: '',
    errors: [],
  }

  render() {
    const {
      username,
      password,
      errors,
    } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input 
                  id="username" 
                  name="username" 
                  type="text"
                  value={username} 
                  onChange={this.change} 
                  placeholder="User Name" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={this.change} 
                  placeholder="Password" />                
              </React.Fragment>
            )} />
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
        </div>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {

  }

  cancel = () => {

  }
}

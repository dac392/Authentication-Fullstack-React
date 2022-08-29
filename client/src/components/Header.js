import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

const Header = ()=>{
  const { authUser } = useContext(Context);
  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">MyAuth</h1>
        <nav>
          {
            authUser
            ? <React.Fragment>
                <span>Welcome, {authUser.name}!</span>
                <Link className="signout" to="/logout">Log Out</Link>
              </React.Fragment>
            : <React.Fragment>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/login">Log In</Link>
              </React.Fragment>
          }
        </nav>
      </div>
    </div>
  );
}

export default Header;

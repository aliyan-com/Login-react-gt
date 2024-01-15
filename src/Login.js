import UserImage from './images/User.png'; 
import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking the validity of the username and password
    if (username === 'admin' && password === '123') { // Correct username and password
      handleLogin();
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <img className="User_img" src={UserImage} alt="User" />
          <div className="container">
            <h2><b>Sign In Form</b></h2>
            <div>
              User Name: <input className="textbox" type="text" name="username" placeholder="Enter The User Name" size="35" onChange={handleUsernameChange} />
            </div>
            <div>
              Password: <input className="textbox" type="password" name="password" placeholder="Enter The Password" size="35" onChange={handlePasswordChange} />
            </div>
            <input className="btn_signin" type="submit" name="signin" value="Sign In" />
            <input className="btn_clear" type="reset" name="clear" value="Clear" />
          </div>
        </div>
      </form>
    </center>
  );
};

export default Login;
import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return(
      <div className="login-modal">
        <div id="login-header">
          <em>penser</em>
        </div>
        <div id="login-body">
          <form action="/login" method="post">
            <div className="form-control">
              <label className="login-label" htmlFor="username">User Name:</label>
              <input id="username" name="username" type="text" />
            </div>
            <div className="form-control">
              <label className="login-label" htmlFor="password">Password:</label>
              <input name="password" type="password" />
            </div>
            <div className="form-control">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

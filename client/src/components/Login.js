import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inValid, setInValid] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container mt-5">
      <div
        className="card"
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          marginTop: '20vh',
        }}
      >
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        {
          inValid && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {inValid}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Login;

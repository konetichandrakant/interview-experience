import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inValid, setInValid] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    if (confirmPassword !== password)
      return setInValid('see password does not match entered one');
    // Add your registration logic here, such as validating the fields and making an API request
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
          <h4>Register</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleRegister}>
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
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

export default Register;

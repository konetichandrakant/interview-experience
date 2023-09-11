import React, { useReducer } from 'react'
import { validUsername, validPassword } from '../Validations/Validation';

function Login() {
  const userName = useRef('');
  const password = useRef('');

  const [validLoginCreds, setValidLoginCreds] = useState(null);

  const validate = () => {
    if (!validUsername(userName) || !validPassword(password)) {
      setValidLoginCreds(false);
    }
  }

  return (
    <div>
      <div className='login-box'>
        <div className='fields'>
          <span className='fields-naming'>
            Username
          </span>
          <span className=''>
            <input
              className='input-box'
              ref={userName} />
          </span>
        </div>
        <div>
          <span className='fields-naming'>
            Password
          </span>
          <span>
            <input
              className='input-box'
              ref={password} />
          </span>
        </div>
        <div>
          <button type='button' className='login-button'>Login</button>
        </div>
      </div>
      {
        validLoginCreds !== null && validLoginCreds === false && (
          <span>* Invalid username or password *</span>
        )
      }
    </div>
  )
}

export default Login;
/* eslint-disable no-unused-vars */
import './SignIn.css'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import routes from '../../constants/routes';
import { auth } from '../../firebase';

const SignIn = () => {
  const [signInfo, setSignInfo] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setSignInfo({ ...signInfo, email: event.currentTarget.value });
  };

  const handlePasswordChange = (event) => {
    setSignInfo({ ...signInfo, password: event.currentTarget.value });
  }

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, signInfo.email, signInfo.password)
      .then((user) => {
        console.log(user);
        setSignInfo({ email: '', password: '' });
        navigate(routes.HOME);
      }).catch((error) => {
        console.log(error);
        setLoginError('Аккаунт не найден')
      })
  }

  console.log(signInfo);
  return (
    <div className="sign-in">
      <div className="container">
        <div className="form-container">
          <h2>Регистрация</h2>
          <form onSubmit={login}>
            <input type="email" placeholder='email' onChange={handleEmailChange} />
            <input type="password" placeholder='password' onChange={handlePasswordChange} />
            <button type="submit">Войти</button>
            <Link to={routes.REGISTER}>
              Создать аккаунт
            </Link>
            {loginError ? loginError : ''}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
/* eslint-disable no-unused-vars */
import './SignUp.css'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import routes from '../../constants/routes';
import { auth } from '../../firebase';

const SignUp = () => {
  const [signInfo, setSignInfo] = useState({ email: '', password: '', copyPassword: '' });
  const [registerError, setRegisterError] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setSignInfo({ ...signInfo, email: event.currentTarget.value });
  };

  const handlePasswordChange = (event) => {
    setSignInfo({ ...signInfo, password: event.currentTarget.value });
  }

  const handleCopyPasswordChange = (event) => {
    setSignInfo({ ...signInfo, copyPassword: event.currentTarget.value });
  }

  const register = (event) => {
    event.preventDefault();
    if (signInfo.password !== signInfo.copyPassword) {
      setRegisterError("Пароли не совпадают")
      return
    }
    createUserWithEmailAndPassword(auth, signInfo.email, signInfo.password)
      .then((user) => {
        setRegisterError("");
        console.log(user);
        setSignInfo({ email: '', password: '', copyPassword: '' });
        navigate(routes.HOME);
      }).catch((error) => { console.log(error); })
  }

  console.log(signInfo);
  return (
    <div className="sign-up">
      <div className="container">
        <div className="form-container">
          <h2>Регистрация</h2>
          <form onSubmit={register}>
            <input type="email" placeholder='email' onChange={handleEmailChange} />
            <input type="password" placeholder='password' onChange={handlePasswordChange} />
            <input type="password" placeholder='confirm password' onChange={handleCopyPasswordChange} />
            <button type="submit">Зарегистрироваться</button>
            <Link to={routes.LOGIN}>
              Уже есть аккаунт
            </Link>
            {registerError ? registerError : ''}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
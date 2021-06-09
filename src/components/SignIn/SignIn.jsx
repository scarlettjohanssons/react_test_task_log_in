import React from 'react';
import './SignIn.scss';


export const SignIn = ({
  email,
  password,
  handleEmail,
  handlePassword,
  errorEmail,
  errorPassword
}) => {

  return (
    <div className='sign-in form__input '>
      <input
        type='text'
        className={`sign-in__email ${errorEmail && 'sign-in__red'}`}
        placeholder='Email'
        value={email}
        onChange={handleEmail}
      />
      {errorEmail && (
        <span className='sign-in__error-email'>enter valid email (example@gmail.com)</span>
      )}
      <input
        className={`sign-in__password ${errorPassword && 'sign-in__red'}`}
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePassword}
      />
      {errorPassword && (
        <span className='sign-in__error-password'>enter password</span>
      )}
    </div>
  )
}

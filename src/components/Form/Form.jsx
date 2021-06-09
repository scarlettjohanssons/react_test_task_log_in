import React, { useState } from 'react';
import { ButtonContinue } from '../ButtonContinue';
import { SignIn } from '../SignIn';
import { FormCheckbox } from '../FormCheckbox';
import './Form.scss';

export const Form = () => {

  const validEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [errorEmail, setErrorEmail] = useState(false);
  let [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === '' && email === '') {
      setErrorPassword(true);
      setErrorEmail(true);

      return;
    }

    if (!email.match(validEmail)) {
      setErrorEmail(true);

      return;
    }

    setEmail('');
    setPassword('');
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setErrorEmail(errorEmail = false);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setErrorPassword(errorPassword = false);
  }
  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <div className='form__name'>
        <span className='form__title'>Log in</span>
        <p className='form__registration'>
          Don’t have an account?
          <span className='form__sign-up'> Sign up</span>
        </p>
      </div>

      <ButtonContinue />

      <div className='form__line'>
        <div className='form__left-line'></div>
        <div className='form__between-line'>or</div>
        <div className='form__right-line'></div>
      </div>
    
      <SignIn
        email={email}
        password={password}
        handleSubmit={handleSubmit}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
      />

      <p className='form__forgot-pass'>
        Forgot password?
      </p>

      <FormCheckbox />

      <button
        className='form__btn-submit'
      >
        Continue
      </button>

    </form>
  )
}

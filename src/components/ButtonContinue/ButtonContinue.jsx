import React from 'react';
import './ButtonContinue.scss';

export const ButtonContinue = () => {

  return (
    <div className='btn form__continue-with'>
      <button
        className='btn__continue-with-google'
        type='button'
      >
        <span className='btn__google-icon'></span>
        <span>Continue with Google</span>
      </button>

      <button
        className='btn__continue-with-microsoft'
        type='button'
      >
        <span className='btn__microsoft-icon'></span>
        <span>Continue with Microsoft</span>
      </button>
    </div>
  )
}


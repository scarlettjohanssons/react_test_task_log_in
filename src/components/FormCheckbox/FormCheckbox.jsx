import React from 'react';
import './FormCheckbox.scss';


export const FormCheckbox = () => {

  return (
    <div className='checkbox'>
      <input className='checkbox__input' id='remember' type='checkbox' />
      <label className='checkbox__label' htmlFor='remember'>Remember me</label>
    </div>
  )
}

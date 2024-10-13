import React from 'react'
import {useForm} from 'react-hook-form'

const Form =  ()=>{

  const { register,handleSubmit }=useForm();
  
  const onSubmit = (data)=>{console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor='name' className='form-lable'>
            Name :
            </label>
            <input {...register('name')} id='name' type='text' className='form-control'>
            </input>
        </div>
        <div className='mb-3'>
            <label htmlFor='age' className='form-lable'>
            Age :
            </label>
            <input {...register('age')} id='age' type='number' className='form-control'>
            </input>
        </div>
        <button className="btn" type='submit'>Submit</button>
    </form>
  )
}

export default Form
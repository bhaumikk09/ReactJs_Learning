import React from 'react'
import {useForm} from 'react-hook-form'

const Form =  ()=>{

  const { register,handleSubmit,formState : {errors} }=useForm();
  
  const onSubmit = (data)=>console.log(data);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor='name' className='form-lable'>
            Name :
            </label>
            <input {...register('name',{required:true,minLength:3})} id='name' type='text' className='form-control'>
            </input>
            
            {errors.name?.type === 'required' && <p>Name field is required.</p>}
            {errors.name?.type === 'minLength' && <p>Name must be atleast 3 character.</p>}
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
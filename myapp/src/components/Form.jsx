import React from 'react'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3,{message:'Name must be atleast 3 Characters.'}),
  age: z.number({invalid_type_error:'Age field is required'}).min(18,{message:'Age must be atleast 18.'})
});

const Form =  ()=>{

  const { register,handleSubmit,formState : {errors} }=useForm({resolver:zodResolver(schema) });
  
  const onSubmit = (data)=>console.log(data);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor='name' className='form-lable'>
            Name :
            </label>
            <input {...register('name')} id='name' type='text' className='form-control'>
            </input>
            
            {errors.name && <p>{errors.name.message}</p>}
           </div>
        <div className='mb-3'>
            <label htmlFor='age' className='form-lable'>
            Age :
            </label>
            <input {...register('age',{ valueAsNumber:true })} id='age' type='number' className='form-control'>
            </input>
            {errors.age && <p>{errors.age.message}</p>}
        </div>
        <button className="btn" type='submit'>Submit</button>
    </form>
  )
}

export default Form
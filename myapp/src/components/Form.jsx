import React, { useState } from 'react'

const Form =  ()=>{
  const [person,setPerson] = useState({
    name:'',
    age:''
  })
  const handleSubmit = (event ) =>{
    
    event.preventDefault();  
    console.log(person);
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='name' className='form-lable'>
            Name :
            </label>
            <input value={person.name} onChange={(event) => setPerson({...person,name:event.target.value })} id='name' type='text' className='form-control'>
            </input>
        </div>
        <div className='mb-3'>
            <label htmlFor='age' className='form-lable'>
            Age :
            </label>
            <input value={person.age} onChange={(event) => setPerson({...person,age:parseInt(event.target.value)})} id='age' type='number' className='form-control'>
            </input>
        </div>
        <button className="btn" type='submit'>Submit</button>
    </form>
  )
}

export default Form
import React, { useRef } from 'react'

const Form = () => {
  const nameRef = useRef(null)
  const ageRef = useRef(null)

  const handleSubmit = (event ) =>{
    
    event.preventDefault();
    if (nameRef.current !== null)
      console.log(nameRef.current.value);
    if (ageRef.current !== null)
      console.log(ageRef.current.value);
      
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='name' className='form-lable'>
            Name :
            </label>
            <input ref={nameRef} id='name' type='text' className='form-control'>
            </input>
        </div>
        <div className='mb-3'>
            <label htmlFor='age' className='form-lable'>
            Age :
            </label>
            <input ref={ageRef} id='age' type='number' className='form-control'>
            </input>
        </div>
        <button className="btn" type='submit'>Submit</button>
    </form>
  )
}

export default Form
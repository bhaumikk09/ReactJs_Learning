import React from 'react'

const Form = () => {
  return (
    <form>
        <div className='mb-3'>
            <label htmlFor='name' className='form-lable'>
            Name :
            </label>
            <input id='name' type='text' className='form-control'>
            </input>
        </div>
        <div className='mb-3'>
            <label htmlFor='age' className='form-lable'>
            Age :
            </label>
            <input id='age' type='number' className='form-control'>
            </input>
        </div>
        <button className="btn" type='submit'>Submit</button>
    </form>
  )
}

export default Form
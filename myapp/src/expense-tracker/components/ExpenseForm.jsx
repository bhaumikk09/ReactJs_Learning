import React from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import categories from './categories'
import {z} from 'zod'

const schema = z.object({
    description : z.string().min(3).max(50),
    amount : z.number().min(0.01).max(10_000),
    category : z.enum(categories)
});

 
const ExpenseForm = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({resolver: zodResolver(schema)});
    return (
    <form>
        <div className="mb-3">
            <label htmlFor='description' className="form-label">Description</label>
            <input {...register('description')} id='description' type="text" className="form-control" />
        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount')} id='amount' type="number" className="form-control" />
        {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select {...register('category')} id='category'  className="form-control" >
                <option></option>
                {categories.map(category => <option key={category} value={category}>{category}</option> )}
            </select>
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Add</button>
    </form>
  )
}

export default ExpenseForm
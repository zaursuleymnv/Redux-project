import React from 'react'
import { increment, decrement, incrementByAmount } from '../stores/counter'
import { useDispatch } from 'react-redux'

function CounterActions() {

  const dispatch = useDispatch()

  return (
    <>
      <div className="mb-3">
        <button onClick={() => dispatch(decrement())} className='btn btn-primary' type='button'>Decrease (-)</button>
      </div>
      <div className="mb-3">
        <button onClick={() => dispatch(increment())} className='btn btn-primary' type='button'>Increase (+)</button>
      </div>
      <div className="mb-3">
        <button onClick={() => dispatch(incrementByAmount(2))} className='btn btn-primary' type='button'> Increase 2+</button>
      </div>
      </>
  )
}

export default CounterActions

import React from 'react'
import { useState } from 'react'

const AddEntry = ({ onAdd }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add an Entry')
      return
    }

    onAdd({text})
    setText('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control' >
        <label>Name</label>
        <input 
          type='text' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder='Add Name' />
      </div>
      <input className='btn btn-block' type='submit' value='Save Entry' />
    </form>
  )
}

export default AddEntry

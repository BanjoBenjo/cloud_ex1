import React from 'react'
import { useState, useEffect } from 'react'

const AddEntry = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [file, setFile] = useState(undefined)

  const handleSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined)
        return
    }
    setFile(e.target.files[0])
}

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add an Entry')
      return
    }

    if(!file) {
      alert('Please add a File')
      return
    }

    const objectUrl = URL.createObjectURL(file)

    onAdd({text, file: objectUrl})
    setText('')
    setFile(null)
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
      <div className='form-control' >
        <label>Picture</label>
        <input 
          type='file' 
          onChange={(e) => handleSelectFile(e)}/>
      </div>
      <input className='btn btn-block' type='submit' value='Save Entry' />
    </form>
  )
}

export default AddEntry

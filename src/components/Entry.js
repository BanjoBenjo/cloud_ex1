import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Entry = ({ entry, onDelete }) => {
  return (
    <div className='entry'>
      <h3>{entry.text} 
        <FaTimes style={{ color:'red', cursor: 'pointer'}} onClick={() => onDelete(entry.id)}/>
      </h3>
    </div>
  )
}

export default Entry

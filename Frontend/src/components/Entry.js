import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Entry = ({ entry, onDelete }) => {
  return (
    <div className='entry'>
      <h3>{entry.name} 
        <FaTimes style={{ color:'red', cursor: 'pointer'}} onClick={() => onDelete(entry.id)}/>
      </h3>
      <img src={entry.file} alt="img" width="200" height="200"/>
    </div>
  )
}

export default Entry

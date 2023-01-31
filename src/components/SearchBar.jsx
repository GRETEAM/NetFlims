import React, { useState } from 'react'

const SearchBar = ({filter}) => {
    
  return (
    <div>
        <input type="text" className='input' onChange={(e) => filter(e)} />
    </div>
  )
}

export default SearchBar
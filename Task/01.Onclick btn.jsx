


import React, { useState } from 'react'

function Value() {

    const [inputValue,setInputValue] = useState('')
    const [storeValue,setStoreValue] = useState('')

    const handleInputChange =(event) => {
        setInputValue(event.Value.target)
    }

    const buttonClick = () =>{
        setStoreValue(inputValue)
        setInputValue('')
    }

  return (
    <div>
        <h1>Click Button</h1>
        <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter data' />
        <button onClick={buttonClick}> Store Data</button>
        <div>
            <h2>stored value:</h2>
            <p>{storeValue}</p>
        </div>
    </div>
    
  )
}

export default Value
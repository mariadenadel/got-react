import React from 'react';
import ReactDOM from 'react-dom'

const Input = ({setCurrentHouseName}) => {
    return (
        <div className='input-form'>
            <input
                type='text'
                onChange={ (event) => setCurrentHouseName(event.target.value) }
            />

        </div>
    )
}

export default Input
